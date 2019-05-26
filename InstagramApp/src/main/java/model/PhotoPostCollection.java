package model;

import com.google.gson.Gson;
import org.joda.time.DateTime;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class PhotoPostCollection implements PhotoPostInterface{
    public static final PhotoPostCollection photoPostCollection = new PhotoPostCollection();
    public static final List<String> posts = PhotoPosts.postsCollection;

    private PhotoPostCollection(){};
    public PhotoPostCollection getInstance(){
        return photoPostCollection;
    }

    @Override
    public List<String> getPage(int start, int count, String filter){
        if(start < 0 || start >= posts.size()){
            return new ArrayList<>();
        }

        PostFilter postFilter = (PostFilter)MyJsonParser.getObject(filter, PostFilter.class);
        List<String> page = posts.stream().filter((post) -> {
            PhotoPost photoPost = (PhotoPost) MyJsonParser.getObject(post, PhotoPost.class);
            if (postFilter.get_author() != null) {
                if (!postFilter.get_author().equals(photoPost.get_author())) {
                    return false;
                }
            }

            if (postFilter.get_createdAt() != null){
                DateTime currentDate = new DateTime(postFilter.get_createdAt());
                currentDate = currentDate.minusMillis(currentDate.getMillisOfDay());
                DateTime nextDay = currentDate.plusDays(1);
                DateTime postDate = new DateTime(photoPost.get_createdAt());
                if (postDate.compareTo(currentDate) < 0 || postDate.compareTo(nextDay) > 0){
                    return false;
                }
            }

            if (postFilter.get_hashTags() != null){
                return Arrays.stream(photoPost.get_hashTags()).anyMatch(hashTag ->
                        Arrays.asList(postFilter.get_hashTags()).contains(hashTag));
            }

            return true;
        }).collect(Collectors.toList());

        page.sort((x,y) -> {
            PhotoPost xObject = (PhotoPost) MyJsonParser.getObject(x, PhotoPost.class);
            PhotoPost yObject = (PhotoPost)MyJsonParser.getObject(y, PhotoPost.class);

            DateTime xDate = new DateTime(xObject.get_createdAt());
            DateTime yDate = new DateTime(yObject.get_createdAt());

            return yDate.compareTo(xDate);
        });

        if (start >= page.size()) {
            return new ArrayList<>();
        }
        if (start + count > page.size()) {
            return page;
        }

        return page.subList(start, start + count);
    }

    @Override
    public boolean add(String postString)
    {
        if (validate(postString)){
            posts.add(postString);
            return true;
        }
        return false;
    }

    @Override
    public String get(int id){
        String result = "";
        for (String postString : posts){
            PhotoPost photoPost = (PhotoPost)MyJsonParser.getObject(postString, PhotoPost.class);
            if (photoPost.get_id() == id){
                result = postString;
                break;
            }
        }
        return result;
    }

    @Override
    public boolean remove(int id) {
        String post = get(id);
        if(!post.isEmpty()){
            posts.remove(post);
            return true;
        }
        return false;
    }

    public boolean validate(String postString){
        PhotoPost photoPost = (PhotoPost)MyJsonParser.getObject(postString, PhotoPost.class);
        return photoPost.get_id() > 0 && photoPost.get_author() != null && photoPost.get_createdAt() != null &&
                photoPost.get_description() != null && photoPost.get_hashTags() != null && photoPost.get_likes() != null
                && photoPost.get_photoLink() != null && photoPost.get_description().length() < 200;
    }

    @Override
    public boolean edit(int id, String editPattern){
        PhotoPost editPost = (PhotoPost)MyJsonParser.getObject(get(id), PhotoPost.class);
        PhotoPost changesPost = (PhotoPost)MyJsonParser.getObject(editPattern, PhotoPost.class);
        editPost.set_description(changesPost.get_description());
        editPost.set_hashTags(changesPost.get_hashTags());
        editPost.set_createdAt(changesPost.get_createdAt());

        String jsonEditPost = MyJsonParser.getJson(editPost);

        if(validate(jsonEditPost)){
            remove(editPost.get_id());
            add(jsonEditPost);
            return true;
        }

        return false;
    }

    public List<String> filter(String filterString){
        PostFilter postFilter = (PostFilter)MyJsonParser.getObject(filterString, PostFilter.class);
        return getPage(0, posts.size(), filterString);
    }

    public int generateId(){
        return posts.size() + 1;
    }
}