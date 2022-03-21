import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PortfolioService } from './services/portfolio.service';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [AppComponent, PortfolioListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
