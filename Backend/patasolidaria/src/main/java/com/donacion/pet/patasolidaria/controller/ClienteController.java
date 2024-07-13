package com.donacion.pet.patasolidaria.controller;

import com.donacion.pet.patasolidaria.dto.ClienteDTO;
import com.donacion.pet.patasolidaria.model.Cliente;
import com.donacion.pet.patasolidaria.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ResponseEntity<Cliente> crearCliente(@RequestBody ClienteDTO clienteDTO){

        Cliente cliente = clienteService.crearCliente(clienteDTO);
        return  ResponseEntity.status(HttpStatus.CREATED).body(cliente);
    }
}
