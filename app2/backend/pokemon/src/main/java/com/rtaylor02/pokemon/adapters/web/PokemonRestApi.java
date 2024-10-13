package com.rtaylor02.pokemon.adapters.web;

import com.rtaylor02.pokemon.domain.Pokemon;
import com.rtaylor02.pokemon.domain.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/pokemon")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PokemonRestApi {
    @Autowired
    private PokemonService service;

    @GetMapping
    public List<Pokemon> find() {
        return service.find();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Pokemon create(@RequestBody Pokemon pokemon) {
        return service.create(pokemon);
    }

    @PutMapping("/{id}")
    public Pokemon update(@PathVariable Long id, @RequestBody Map<String, Object> payload) {
        return service.update(id, (int) payload.get("quantity"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
