package com.rtaylor02.todo.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
    @GetMapping(value = "/hello-from-bean", produces = {"application/json", "application/xml"})
    public String sayHello() {
        return "Boo! Hello from HelloWorldController";
    }
}
