package servlets;

import com.sun.net.httpserver.HttpServer;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static model.PhotoPostCollection.photoPostCollection;

public class PhotoPostServlet extends HttpServer {

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String[] keyValue = request.getQueryString().split("=");
        if (keyValue[0].equals("id")) {
            response.getOutputStream().println(photoPostCollection.remove(Integer.parseInt(keyValue[1])));
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String[] keyValue = request.getQueryString().split("=");
        if (keyValue[0].equals("id")) {
            response.getOutputStream().println(
                    photoPostCollection.get(Integer.parseInt(keyValue[1])));
        } else if (keyValue[0].equals("method") && keyValue[1].equals("generateId")) {
            response.getOutputStream().println(photoPostCollection.generateId());
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String jsonPost = PhotoPostsServlet.readRequestBody(request);
        String query = request.getQueryString();
        ServletOutputStream out = response.getOutputStream();

        if (query.contains("edit")) {
            String[] params = query.split("&");
            for (String param: params) {
                if (param.contains("id")) {
                    String[] keyValue = param.split("=");
                    out.println(photoPostCollection.edit(Integer.parseInt(keyValue[1]), jsonPost));

                    break;
                }
            }
        } else if (query.contains("add")){
            out.println(photoPostCollection.add(jsonPost));
        }
    }
}