import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PortfolioService } from './services/portfolio.service';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';

const routes: Routes = [
  { path: 'portfolio/:id', component: PortfolioDetailsComponent },
  { path: 'portfolio', component: PortfolioListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    ContactComponent,
    PortfolioDetailsComponent,
    HomeComponent,
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
