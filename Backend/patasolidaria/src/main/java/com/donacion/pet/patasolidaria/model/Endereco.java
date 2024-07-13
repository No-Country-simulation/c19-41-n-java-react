package com.donacion.pet.patasolidaria.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Endereco implements Serializable {

    private static final long serialVersion = 1L;

    @Id
    @GeneratedValue( strategy = GenerationType.UUID)
    private String id;

    private String Logradouro;

    private String numero;

    private String cep;

    private String cidade;

    @ManyToOne
    @JoinColumn(name="cliente_id")
    private Cliente cliente;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLogradouro() {
        return Logradouro;
    }

    public void setLogradouro(String logradouro) {
        Logradouro = logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
}

