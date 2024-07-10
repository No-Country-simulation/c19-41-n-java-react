package com.donacion.pet.patasolidaria.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
public class Servico {
    @Id
    @GeneratedValue( strategy = GenerationType.UUID)
    private String id;

    private String nome;

    private String descricao;

    private String tempo;

    @Column(precision = 10, scale = 2)
    private BigDecimal preco;

    @CreationTimestamp
    private Instant createdAt;

    @UpdateTimestamp
    private Instant updatedAt;
}
