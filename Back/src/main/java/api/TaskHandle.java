package api;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import models.Tasks.TaskRequest;
import models.Tasks.Tasks;
import models.Tasks.TasksDAO;
import models.Tasks.UpdatedTaskRequest;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.util.List;

public class TaskHandle implements HttpHandler {

    @Override
    public void handle(HttpExchange httpExchange) throws IOException{
        httpExchange.getResponseHeaders().set(
                "Content-Type",
                "application/json"
        );

        httpExchange.getResponseHeaders().set(
                "Access-Control-Allow-Origin",
                "*"
        );

        httpExchange.getResponseHeaders().set(
                "Access-Control-Allow-Headers",
                "Content-Type, ngrok-skip-browser-warning"
        );

        httpExchange.getResponseHeaders().set(
                "Access-Control-Allow-Methods",
                "GET, POST, PUT, DELETE, OPTIONS"
        );

        String method = httpExchange.getRequestMethod();

        if(method.equals("OPTIONS")){
            httpExchange.sendResponseHeaders(204, -1);
            return;
        }

        Gson gson = new Gson();

        TasksDAO tasks = new TasksDAO();

        String response = "";
        int statusCode = 405;

        if(method.equals("GET")){
            String path = httpExchange.getRequestURI().getPath();
            if(path.matches("/tasks/\\d+")){

                int taskId = Integer.parseInt(
                    path.substring("/tasks/".length())
                );

                Tasks task = tasks.getById(taskId);
                response = gson.toJson(task);
                statusCode = 200;

            } else {

                String query = httpExchange.getRequestURI().getQuery();

                int userId = Integer.parseInt(query.split("=")[1]);

                List<Tasks> tasksFromUser = tasks.getAllById(userId);

                response = gson.toJson(tasksFromUser);
                statusCode = 200;
            }
        } else if(method.equals("POST")){
            BufferedReader reader = new BufferedReader(new InputStreamReader(httpExchange.getRequestBody()));

            StringBuilder bodyBuilder = new StringBuilder();

            String line;

            while ((line = reader.readLine()) != null){bodyBuilder.append(line);}

            String body = bodyBuilder.toString();

            TaskRequest task = gson.fromJson(body, TaskRequest.class);

            boolean put = tasks.put(task.getUserId(), task.getContent(), task.getTitle(), LocalDateTime.now());

            if (put){
                response = "{\"success\": true, \"message\": \"Task created\"}";
                statusCode = 201;
            } else {
                response = "{\"success\": false}";
                statusCode = 500;
            }

        } else if(method.equals("PUT")){
            BufferedReader reader = new BufferedReader(new InputStreamReader(httpExchange.getRequestBody()));

            StringBuilder bodyBuilder = new StringBuilder();

            String line;

            while ((line = reader.readLine()) != null){bodyBuilder.append(line);}

            String body = bodyBuilder.toString();

            UpdatedTaskRequest request = gson.fromJson(body, UpdatedTaskRequest.class);

            boolean sucess = tasks.updateChecked(request.getTaskId());

            if (sucess){
                response = "{\"success\": true, \"message\": \"Task updated\"}";
                statusCode = 200;
            } else {
                response = "{\"success\": false}";
                statusCode = 500;
            }

        } else if(method.equals("DELETE")){
            BufferedReader reader = new BufferedReader(new InputStreamReader(httpExchange.getRequestBody()));

            StringBuilder bodyBuilder = new StringBuilder();

            String line;

            while ((line = reader.readLine()) != null){bodyBuilder.append(line);}

            String body = bodyBuilder.toString();

            UpdatedTaskRequest request = gson.fromJson(body, UpdatedTaskRequest.class);

            boolean sucess = tasks.remove(request.getTaskId());

            if (sucess){
                response = "{\"success\": true, \"message\": \"Task deleted\"}";
                statusCode = 200;
            } else {
                response = "{\"success\": false}";
                statusCode = 500;
            }

        } else {
            httpExchange.sendResponseHeaders(405, -1);
            return;
        }
        httpExchange.sendResponseHeaders(statusCode, response.getBytes().length);

        OutputStream os = httpExchange.getResponseBody();

        os.write(response.getBytes());

        os.close();
        }
}