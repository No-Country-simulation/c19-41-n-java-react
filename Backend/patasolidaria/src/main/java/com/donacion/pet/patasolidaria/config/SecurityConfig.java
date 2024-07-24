package com.donacion.pet.patasolidaria.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.Customizer;
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // Desabilita CSRF para permitir POST requests
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/clientes").permitAll() // Permite acesso ao endpoint /clientes
                        .anyRequest().authenticated() // Requer autenticação para qualquer outro endpoint
                )
                .httpBasic(Customizer.withDefaults()); // Configura autenticação básica usando Customizer.withDefaults()

        return http.build();
    }
}
