import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faAddressBook,
  faFile,
  faHouse,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-portfolio';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faHouse = faHouse;
  faWindowMaximize = faWindowMaximize;
  faFile = faFile;
  faAddressBook = faAddressBook;
}
