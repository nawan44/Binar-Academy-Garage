package com.binar.garagelife.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.binar.garagelife.model.Komentar;
import com.binar.garagelife.repository.KomentarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KomentarService{

    @Autowired
    KomentarRepository komentarRepository;


    public List<Komentar> getAllKomentar(){
        List<Komentar> komentars = new ArrayList<>();
        komentarRepository.findAll()
        .forEach(komentars::add);
        return komentars;
    }

    public Optional<Komentar> getKomentarId(Long id){
        return komentarRepository.findById(id);
    }

    public void addKomentar(Komentar komentar){
        komentarRepository.save(komentar);
    }

    public void updateKomentar(Long id, Komentar komentar){
        komentarRepository.save(komentar);
    }

    public void deleteKomentar(Long id){
        komentarRepository.deleteById(id);
    }

}