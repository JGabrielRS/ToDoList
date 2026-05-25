package api;

import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

public class Server {

    public static void main(String[] args) throws IOException {
        HttpServer server =
                HttpServer.create(
                        new InetSocketAddress(8080),
                        0
                );

        server.createContext(
                "/login",
                new LoginHandle()
        );

        server.createContext(
                "/users",
                new UserHandle()
        );

        server.createContext(
                "/tasks",
                new TaskHandle()
        );

        server.start();

        System.out.println(
                "Servidor iniciado na porta 8080"
        );
    }
}