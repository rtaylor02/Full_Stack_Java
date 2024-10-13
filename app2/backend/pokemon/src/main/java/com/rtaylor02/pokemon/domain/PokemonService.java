package com.rtaylor02.pokemon.domain;

import java.util.List;

public interface PokemonService {
    List<Pokemon> find();
    Pokemon create(Pokemon pokemon);
    Pokemon update(Long id, int quantity);
    void delete(Long id);
}
