import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-webpages',
  templateUrl: './webpages.component.html',
  styleUrls: ['./webpages.component.css'],
})
export class WebpagesComponent implements OnInit {
  constructor() {}
  images = [
    'assets/images/webpages/webpagesleft.png',
    'assets/images/webpages/webpagesleft.png',
    'assets/images/webpages/webpagesleft.png',
    'assets/images/webpages/webpagesleft.png',
    'assets/images/webpages/webpagesleft.png',
    'assets/images/webpages/webpagesleft.png',
    'assets/images/webpages/webpagesleft.png',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  ngOnInit(): void {}
}
