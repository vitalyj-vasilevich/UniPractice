package Servlets;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class URLFilter implements Filter {
    private final String QUESTION_MARK = "?";
    private final String AMPERSAND = "&";

    @Override
    public void init(FilterConfig config) {}

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws
            IOException, ServletException {
        HttpServletRequest hreq = (HttpServletRequest)request;

        String method = hreq.getMethod();
        String url = hreq.getRequestURL().toString();
        long start = System.currentTimeMillis();
        chain.doFilter(request, response);
        long end = System.currentTimeMillis();

        System.out.println(String.format("%s - %s - %dms", method, url, end - start));
    }

    @Override
    public void destroy() {}
}
