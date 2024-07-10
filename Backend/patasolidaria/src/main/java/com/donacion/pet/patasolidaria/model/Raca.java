package com.donacion.pet.patasolidaria.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Raca {

    private static final long serialVersion = 1L;

    @Id
    @GeneratedValue ( strategy = GenerationType.UUID)
    private Long id;

    private String nome;

    private String cor;
}
