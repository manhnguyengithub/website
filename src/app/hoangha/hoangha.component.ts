import { Component, AfterViewInit, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { OpenCardService } from '../service/openCard.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
declare var $: any;
const animation = { duration: 50000, easing: (t: any) => t }
const animationTwo = { duration: 50000, easing: (t: any) => t }

@Component({
  selector: 'app-hoangha',
  templateUrl: './hoangha.component.html',
  styleUrls: ['./hoangha.component.scss']
})
export class HoanghaComponent implements OnInit, AfterViewInit{
    title = 'Senid';
    isShowPolicy = false;
    laptopScreen = true;
    currentPath = '';
    paramUrl = '';
    showFloatingButton = false;
    @ViewChild('slickSlider') slickSlider!: ElementRef;

    @ViewChild("sliderRefOne") sliderRefOne!: ElementRef<HTMLElement>;
    sliderOne = null;
    constructor(
        private el: ElementRef,
        private openCardService: OpenCardService,
        private route: ActivatedRoute,
        private router: Router,
        ) { }
    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const currentPath = this.router.url;
                if (currentPath) {
                    this.currentPath = currentPath;
                    const questionMarkIndex = this.currentPath.toString().indexOf('?');
                    if (questionMarkIndex !== -1) {
                        this.paramUrl = this.currentPath['slice'](questionMarkIndex);
                    } else {
                        console.log('Không có phần query string trong URL.');
                    }
                }
            }
        });
    }
    @HostListener('window:scroll', [])
    onWindowScroll() {
        // Kiểm tra vị trí cuộn của trang
        const yOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // Đặt một ngưỡng, ví dụ: 200px
        this.showFloatingButton = yOffset > 500;
        if (this.showFloatingButton) {
        }
    }
    ngAfterViewInit(): void {
        $(this.el.nativeElement).find('.slick-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: true,
            centerMode: true,
            centerPadding: '260px',
            // ... other options
            responsive: [{

                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }

            }, {

                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    centerMode: false,
                }

            }, {

                breakpoint: 300,
                settings: "unslick" // destroys slick

            }]
        });

        this.sliderOne = new KeenSlider(this.sliderRefOne.nativeElement, {
            loop: true,
            renderMode: "performance",
            drag: false,
            rtl: true,
            created(s: any) {
                s.moveToIdx(5, true, animation)
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
        });
    }

    showPolicy() {
        this.isShowPolicy = !this.isShowPolicy;
    }

    openCard() {
        this.openCardService.openCard(this.currentPath, this.paramUrl);
    }
}
