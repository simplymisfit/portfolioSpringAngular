package pl.rosochacki.portfolioSpringAngular.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import pl.rosochacki.portfolioSpringAngular.entity.Quote;

@CrossOrigin("http://localhost:4200")
public interface QuoteRepository extends JpaRepository<Quote, Long> {
}
