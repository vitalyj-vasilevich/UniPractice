package model;

import java.util.List;

public interface PhotoPostInterface{
    List<String> getPage(int start, int count, String filter);
    String get(int id);
    boolean add(String postString);
    boolean remove(int id);
    boolean validate(String postString);
    boolean edit(int id, String editPattern);
}