package model;

import com.google.gson.Gson;

public class MyJsonParser {
    private static final Gson GSON = new Gson();

    public static String getJson(Object object){
        return GSON.toJson(object);
    }

    public static Object getObject(String objectString, Class c){
        return GSON.fromJson(objectString, c);
    }
}
