package com.donacion.pet.patasolidaria.repository;

import com.donacion.pet.patasolidaria.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
