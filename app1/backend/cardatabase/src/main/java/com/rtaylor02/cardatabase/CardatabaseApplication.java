package com.rtaylor02.cardatabase;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CardatabaseApplication {
	private static final Logger logger = LoggerFactory.getLogger(CardatabaseApplication.class);

	public static void main(String[] args) {
		// this is a restart test
		SpringApplication.run(CardatabaseApplication.class, args);
		logger.info("***This is on main()***app1/backend");
	}

}
