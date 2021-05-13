import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss'],
})
export class SubscriptionPlanComponent implements OnInit {
  items: any = [
    {
      banner: '../assets/images/Web Banner.png',
      logo: '../assets/images/location.svg',
      service: 'Remote Service',
      description: 'One word for description',
      amount: 499,
      feature: [
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
      ],
      button: 'Explore Now',
    },
    {
      banner: '../assets/images/Web Banner.png',
      logo: '../assets/images/location.svg',
      service: 'Location Service',
      description: 'One word for description',
      amount: 499,
      feature: [
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
      ],
      button: 'Explore Now 2',
    },
    {
      banner: '../assets/images/Web Banner.png',
      logo: '../assets/images/location.svg',
      service: 'SMS Service',
      description: 'One word for description',
      amount: 599,
      feature: [
        'Basic Benifits: Discription 1: Onliner detail will be better',
      ],
      button: 'Explore Now 3',
    },
    {
      banner: '../assets/images/Web Banner.png',
      logo: '../assets/images/location.svg',
      service: 'Location Service',
      description: 'One word for description',
      amount: 499,
      feature: [
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
      ],
      button: 'Explore Now 4',
    },
    {
      banner: '../assets/images/Web Banner.png',
      logo: '../assets/images/location.svg',
      service: 'Location Service',
      description: 'One word for description',
      amount: 499,
      feature: [
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
        'Basic Benifits: Discription 1: Onliner detail will be better',
      ],
      button: 'Explore Now 5',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
