import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/common/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home: Home = new Home();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.handleQuote();
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  handleQuote() {
    const theQuoteId: number = this.randomNumber(1, 3);

    this.homeService.getQuote(theQuoteId).subscribe((data) => {
      this.home = data;
    });
  }
}
