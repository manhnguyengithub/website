import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    public urlDefault: string = 'https://mothe.senid.vn/hoanghamobile'
    public urlJv1: string = 'https://cards.vpbank.com.vn/basic-details/confirmation';
    public urlFb1: string = 'https://mothe.senid.vn/fb1/conv';
    public urlTt1: string = 'https://mothe.senid.vn/tt1/conv';
}