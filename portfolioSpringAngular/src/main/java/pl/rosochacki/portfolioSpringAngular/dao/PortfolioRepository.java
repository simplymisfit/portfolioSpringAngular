package pl.rosochacki.portfolioSpringAngular.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.rosochacki.portfolioSpringAngular.entity.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
}
