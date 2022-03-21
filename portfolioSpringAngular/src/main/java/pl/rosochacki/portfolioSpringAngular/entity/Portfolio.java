package pl.rosochacki.portfolioSpringAngular.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "portfolio")
@Data
public class Portfolio {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;
}
