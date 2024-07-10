package com.donacion.pet.patasolidaria.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;

@Entity
public class Animal {

    @Id
    @GeneratedValue( strategy = GenerationType.UUID)
    private Long id;

    private String nome;

    private BigDecimal peso;
}
