import { Component, OnInit, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plan-subscription',
  templateUrl: './plan-subscription.component.html',
  styleUrls: ['./plan-subscription.component.scss'],
})
export class PlanSubscriptionComponent implements OnInit {
  plan = {
    price: 499,
    sms: 20000,
    days: 30,
  };

  showNavigationArrows = true;
  showNavigationIndicators = true;
  items: number = 5;
  slideIndex = 1;
  isInitialize: boolean = false;
  animation: string = '';

  cards: any[] = [1, 2, 3, 4, 5, 7, 8, 9];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 400) this.items = 1;
    else if (window.innerWidth < 600) this.items = 2;
    else if (window.innerWidth < 900) this.items = 3;
    else if (window.innerWidth < 1200) this.items = 4;
    else if (window.innerWidth < 1500) this.items = 5;
    else this.items = 5;
    this.isInitialize && this.showSlides(this.slideIndex);
  }

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
    this.onResize('');
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
    this.isInitialize = true;
  }

  buy(event) {}

  getSlideCount() {
    return Math.ceil(36 / this.items);
  }

  plusSlides(n) {
    this.animation = n > 0 ? 'slideIn' : 'slideOut';
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n) {
    this.animation = n > this.slideIndex  ? 'slideIn' : 'slideOut';
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n) {
    var i;
    var slides: any = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
      this.animation="slideIn"
    }
    if (n < 1) {
      this.slideIndex = slides.length;
      this.animation="slideOut"
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}
