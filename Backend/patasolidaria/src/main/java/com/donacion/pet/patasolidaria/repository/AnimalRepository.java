package com.donacion.pet.patasolidaria.repository;

import com.donacion.pet.patasolidaria.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepository extends JpaRepository<Animal, Long> {

}
