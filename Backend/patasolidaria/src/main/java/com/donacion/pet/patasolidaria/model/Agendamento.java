package com.donacion.pet.patasolidaria.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.Date;


@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private Date dataAtendimento;

    private Date horaAtendimento;

    private Date created;

    @CreationTimestamp
    private Instant createdAt;

    @UpdateTimestamp
    private Instant updatedAt;

}
