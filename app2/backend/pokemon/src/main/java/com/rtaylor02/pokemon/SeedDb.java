package com.rtaylor02.pokemon;

import com.rtaylor02.pokemon.domain.Pokemon;
import com.rtaylor02.pokemon.domain.PokemonServiceImpl;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.Base64;
import java.util.List;

//@SpringBootApplication(scanBasePackageClasses = {com.rtaylor02.pokemon.domain.PokemonServiceImpl.class, com.rtaylor02.pokemon.domain.port.PokemonRepository.class})
@SpringBootApplication
public class SeedDb {
    @Autowired
    private PokemonServiceImpl service;

    public static void main(String[] args) {
        SpringApplication.run(SeedDb.class, args);
    }

    @Bean
    InitializingBean seed() {
        return () -> {
            RestTemplate restTemplate = new RestTemplate();
            PokemonListResponse pokemonListResponse = restTemplate.getForObject("https://pokeapi.co/api/v2/pokemon?limit=10", PokemonListResponse.class);

            pokemonListResponse.results.forEach(pokemonListEntry -> {
                PokemonEntry entry = restTemplate.getForObject(pokemonListEntry.url, PokemonEntry.class);

                String name = entry.name;
                String image_front = getBase64(entry.sprites.front_default);
                String image_back = getBase64(entry.sprites.back_default);

                Pokemon pokemon = Pokemon.builder()
                        .name(name)
                        .imagefront(image_front)
                        .imageback(image_back)
                        .quantity(0)
                        .build();
                service.create(pokemon);
            });
        };
    }

    private String getBase64(String url) {
        try {
            URL imageUrl = new URL(url);
            URLConnection conn = imageUrl.openConnection();
            InputStream is = conn.getInputStream();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int read = 0;
            while ((read = is.read(buffer, 0, buffer.length)) != -1) {
                baos.write(buffer, 0, read);
            }
            baos.flush();
            return String.format("data:image/png;base64,%s", Base64.getEncoder().encodeToString(baos.toByteArray()));
        } catch (Exception e) {
            return null;
        }
    }

    private static class PokemonListEntry {
        public String url;
    }

    private static class PokemonListResponse {
        public List<PokemonListEntry> results;
    }

    private static class PokemonImage {
        public String front_default;
        public String back_default;
    }

    private static class PokemonEntry {
        public String name;
        public SeedDb.PokemonImage sprites;
    }
}
