package com.binar.garagelife.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Post{

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id",updatable = false, nullable = false )
    private Long id;
    private String judulPost;
    private String isiPost;
    // @Column(nullable = false, updatable = false)
    // @Temporal(TemporalType.TIMESTAMP)
    // @CreatedDate
    // private Date createAt;
    // @Column(nullable = false)
    // @Temporal(TemporalType.TIMESTAMP)
    // @LastModifiedDate
    // private Date updateAt;

    
    public Post(){


    }

    public Post(Long id, String judulPost, String isiPost){
        super();
        this.id = id;
        this.judulPost = judulPost;
        this.isiPost = isiPost;
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
     * @return the judulPost
     */
    public String getJudulPost() {
        return judulPost;
    }

    /**
     * @param judulPost the judulPost to set
     */
    public void setJudulPost(String judulPost) {
        this.judulPost = judulPost;
    }

    /**
     * @return the isiPost
     */
    public String getIsiPost() {
        return isiPost;
    }

    /**
     * @param isiPost the isiPost to set
     */
    public void setIsiPost(String isiPost) {
        this.isiPost = isiPost;
    }

    
    
}