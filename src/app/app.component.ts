import { Component, OnInit } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { OpenCardService } from './service/openCard.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
declare var $: any;
const animation = { duration: 50000, easing: (t: any) => t }
const animationTwo = { duration: 50000, easing: (t: any) => t }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    sliderOne = null;
    constructor() { }
    ngOnInit(): void { }

}
