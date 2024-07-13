package com.donacion.pet.patasolidaria.service;

import com.donacion.pet.patasolidaria.dto.ClienteDTO;
import com.donacion.pet.patasolidaria.model.Cliente;
import com.donacion.pet.patasolidaria.model.Endereco;
import com.donacion.pet.patasolidaria.repository.ClienteRepository;
import com.donacion.pet.patasolidaria.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    public Cliente crearCliente(ClienteDTO clienteDTO){

        Cliente cliente = new Cliente();
        cliente.setNome(clienteDTO.getNome());
        cliente.setSobrenome(clienteDTO.getSobrenome());
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setTelefone(clienteDTO.getTelefone());

        Cliente clienteSalvo = clienteRepository.save(cliente);

        List<Endereco> enderecos = clienteDTO.getEnderecos().stream().map( dto ->{
                Endereco endereco = new Endereco();
                endereco.setLogradouro(dto.getLogradouro());
                endereco.setNumero(dto.getNumero());
                endereco.setCep(dto.getCep());
                endereco.setCidade(dto.getCidade());
                endereco.setCliente(clienteSalvo);
                return endereco;
            }

        ).collect(Collectors.toList());
        enderecoRepository.saveAll(enderecos);

        clienteSalvo.setEnderecos(enderecos);

        return  clienteRepository.save(clienteSalvo);
    }
}
