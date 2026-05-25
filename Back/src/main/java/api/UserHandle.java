package api;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import models.Users.CreateUser;
import models.Users.UsersDAO;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;

public class UserHandle implements HttpHandler {

    @Override
    public void handle(HttpExchange httpExchange) throws IOException{
        httpExchange.getResponseHeaders().set("Content-Type", "application/json");

        httpExchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

        httpExchange.getResponseHeaders().add("Access-Control-Allow-Headers", "*");

        httpExchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

        String method = httpExchange.getRequestMethod();

        if (method.equals("OPTIONS")) {

            httpExchange.sendResponseHeaders(204, -1);

            return;
        }

        Gson gson = new Gson();

        UsersDAO users = new UsersDAO();

        String response = "";
        int statusCode = 405;

        if (method.equals("POST")) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(httpExchange.getRequestBody()));

            StringBuilder bodyBuilder = new StringBuilder();

            String line;

            while ((line = reader.readLine()) != null){bodyBuilder.append(line);}

            String body = bodyBuilder.toString();

            CreateUser user = gson.fromJson(body, CreateUser.class);

            boolean put = users.put(user.getLogin(), user.getPassword(), user.getName());

            if (put){
                response = "{\"success\": true, \"message\": \"Account created\"}";
                statusCode = 201;
            } else {
                response = "{\"success\": false}";
                statusCode = 500;
            }
        }

        httpExchange.sendResponseHeaders(statusCode, response.getBytes().length);

        OutputStream os = httpExchange.getResponseBody();

        os.write(response.getBytes());

        os.close();

    }
}