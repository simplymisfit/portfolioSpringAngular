import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PortfolioService } from './services/portfolio.service';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'portfolio/:id', component: PortfolioListComponent },
  { path: 'portfolio', component: PortfolioListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, PortfolioListComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
