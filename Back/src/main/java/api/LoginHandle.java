package api;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import models.Users.CreateUser;
import models.Users.Login;
import models.Users.Users;
import models.Users.UsersDAO;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Objects;

public class LoginHandle implements HttpHandler {

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

        if(method.equals("POST")) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(httpExchange.getRequestBody()));

            StringBuilder bodyBuilder = new StringBuilder();

            String line;

            while ((line = reader.readLine()) != null){
                bodyBuilder.append(line);
            }

            String body = bodyBuilder.toString();

            Login request = gson.fromJson(body, Login.class);

            Users user = users.getByLogin(request.getLogin());

            if (user != null && Objects.equals(user.getPassword(), request.getPassword())) {
                response = String.format(
                        "{\"success\": true, " +
                                "\"message\": \"Login successful\", " +
                                "\"userId\": %d, " +
                                "\"name\": \"%s\"}",
                        user.getId(),
                        user.getName()
                );
                statusCode = 200;
            } else {
                response =  "{\"success\": false, \"message\": \"incorrect login/password\"}";
                statusCode = 401;
            }

        }

        httpExchange.sendResponseHeaders(statusCode, response.getBytes().length);

        OutputStream os = httpExchange.getResponseBody();

        os.write(response.getBytes());

        os.close();

    }
}