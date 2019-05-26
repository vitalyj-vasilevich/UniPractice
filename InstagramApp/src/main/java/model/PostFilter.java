package model;

import java.util.Arrays;

public class PostFilter {
    private String _author;
    private String _createdAt;
    private String[] _hashTags;

    public String get_author(){
        return _author;
    }

    public String get_createdAt(){
        return _createdAt;
    }

    public String[] get_hashTags(){
        return _hashTags;
    }

    @Override
    public String toString(){
        return String.format("%s\n%s\n%s\n",
                _author, _createdAt, Arrays.toString(_hashTags));
    }
}
