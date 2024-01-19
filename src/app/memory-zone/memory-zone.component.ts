import { Component, AfterViewInit, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { OpenCardService } from '../service/openCard.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
declare var $: any;
const animation = { duration: 50000, easing: (t: any) => t }
const animationTwo = { duration: 50000, easing: (t: any) => t }

@Component({
  selector: 'app-memory-zone',
  templateUrl: './memory-zone.component.html',
  styleUrls: ['./memory-zone.component.scss']
})
export class MemoryZoneComponent implements OnInit, AfterViewInit{
    title = 'Senid';
    isShowPolicy = false;
    laptopScreen = true;
    currentPath = '';
    paramUrl = '';
    showFloatingButton = false;
    // @ViewChild('slickSlider') slickSlider!: ElementRef;

    constructor(
        private el: ElementRef,
        private openCardService: OpenCardService,
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title
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
        this.titleService.setTitle('SenID x Memory Zone - Mở thẻ dùng ngay, nhận quà liền tay');
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
        $(this.el?.nativeElement)?.find('.slick-slider1')?.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: true,
            
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
        $(this.el?.nativeElement)?.find('.slick-slider2')?.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: true,
            centerMode: true,
            // centerPadding: '60px',
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

                breakpoint: 991,
                settings: "unslick" // destroys slick

            }]
        });
    }

    showPolicy() {
        this.isShowPolicy = !this.isShowPolicy;
    }

    openCard() {
        this.openCardService.openCard(this.currentPath, this.paramUrl);
    }
}
