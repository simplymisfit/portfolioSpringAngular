import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PortfolioService } from './services/portfolio.service';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { WebpagesComponent } from './components/webpages/webpages.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';

const routes: Routes = [
  { path: 'portfolio/:id', component: PortfolioDetailsComponent },
  { path: 'portfolio', component: PortfolioListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'webpages', component: WebpagesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    ContactComponent,
    WebpagesComponent,
    PortfolioDetailsComponent,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
