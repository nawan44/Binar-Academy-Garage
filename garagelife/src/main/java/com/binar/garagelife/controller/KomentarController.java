package com.binar.garagelife.controller;

import java.util.List;
import java.util.Optional;

import com.binar.garagelife.model.Komentar;
import com.binar.garagelife.service.KomentarService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class KomentarController{

    @Autowired
    private KomentarService komentarService;

    @RequestMapping(method = RequestMethod.GET, value = "/komentar")
    public List<Komentar> getAllKomentar(){
        return komentarService.getAllKomentar();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/komentar/{id}")
    public Optional<Komentar> getKomentarId(@PathVariable(value = "id") Long id){
        return komentarService.getKomentarId(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/komentar")
    public void addKomentar(@RequestBody Komentar komentar){
        komentarService.addKomentar(komentar);
    }

    
    @RequestMapping(method = RequestMethod.PUT, value = "/komentar/{id}")
    public void updateKomentar(@RequestBody Komentar komentar, @PathVariable Long id){
        komentarService.updateKomentar(id, komentar);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/komentar/{id}")
    public void deleteKomentar(@PathVariable Long id){
        komentarService.deleteKomentar(id);
    }
}