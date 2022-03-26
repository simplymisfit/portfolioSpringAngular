package pl.rosochacki.portfolioSpringAngular.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "quote")
@Data
public class Quote {

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "author_name")
    private String authorName;

    @Column(name = "author_surname")
    private String authorSurname;

    @Column(name = "quote")
    private String quote;
}
