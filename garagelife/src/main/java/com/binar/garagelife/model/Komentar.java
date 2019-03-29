package com.binar.garagelife.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Komentar {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String isiKomentar;
    private Long levelKomentar;


    public Komentar(){


    }

    public Komentar(Long id, String isiKomentar, Long levelKomentar){
        super();
        this.id = id;
        this.isiKomentar = isiKomentar;
        this.levelKomentar = levelKomentar;
    }
    
    

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the isiKomentar
     */
    public String getIsiKomentar() {
        return isiKomentar;
    }

    /**
     * @param isiKomentar the isiKomentar to set
     */
    public void setIsiKomentar(String isiKomentar) {
        this.isiKomentar = isiKomentar;
    }

    /**
     * @return the levelKomentar
     */
    public Long getLevelKomentar() {
        return levelKomentar;
    }

    /**
     * @param levelKomentar the levelKomentar to set
     */
    public void setLevelKomentar(Long levelKomentar) {
        this.levelKomentar = levelKomentar;
    }

}