package model;

import java.util.Arrays;

public class PhotoPost {
    private int _id;
    private String _description;
    private String _createdAt;
    private String _author;
    private String _photoLink;
    private String[] _hashTags;
    private String[] _likes;

    public int get_id(){
        return _id;
    }

    public void set_id(int id){
        this._id = id;
    }

    public String get_description(){
        return _description;
    }

    public void set_description(String description){
        this._description = description;
    }

    public String get_createdAt(){
        return _createdAt;
    }

    public void set_createdAt(String createdAt){
        this._createdAt = createdAt;
    }

    public String get_author(){
        return _author;
    }

    public void set_author(String author){
        this._author = author;
    }

    public String get_photoLink(){
        return _photoLink;
    }

    public void set_photoLink(String photoLink){
        this._photoLink = photoLink;
    }

    public String[] get_hashTags(){
        return _hashTags;
    }

    public void set_hashTags(String[] hashTags){
        this._hashTags = hashTags;
    }

    public String[] get_likes(){
        return _likes;
    }

    public void set_likes(String[] likes){
        this._likes = likes;
    }

    @Override
    public String toString(){
        return String.format("%d\n%s\n%s\n%s\n%s\n%s\n%s\n",
                _id, _description, _createdAt, _author, _photoLink,
                Arrays.toString(_hashTags), Arrays.toString(_likes));
    }
}
