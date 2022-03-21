import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/common/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
})
export class PortfolioListComponent implements OnInit {
  portfolios: Portfolio[];
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.listPortfolios();
  }

  listPortfolios() {
    this.portfolioService.getPortfolioList().subscribe(
      data => {
        this.portfolios = data;
      }
    );
  }
}
