import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from 'src/app/common/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css'],
})
export class PortfolioDetailsComponent implements OnInit {
  portfolio: Portfolio = new Portfolio();

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handlePortfolioDetails();
    });
  }

  handlePortfolioDetails() {
    const thePortfolioId: number = +this.route.snapshot.paramMap.get('id');

    this.portfolioService.getPortfolio(thePortfolioId).subscribe((data) => {
      this.portfolio = data;
    });
  }
}
