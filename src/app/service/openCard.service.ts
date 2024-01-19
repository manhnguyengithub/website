import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root',
})
export class OpenCardService {
    constructor(
        private configService: ConfigService
    ) {

    }
    openCard(currentPath: any, paramUrl: any) {
        
        
        if (paramUrl) {
            paramUrl = paramUrl.replace('gclid', 'utm_term');
            paramUrl = paramUrl.replace('fbclid', 'utm_term');
            paramUrl = paramUrl.replace('ttclid', 'utm_term');
            paramUrl = paramUrl.replace('MSCLKID ', 'utm_term');
            paramUrl = paramUrl.replace('msclkid', 'utm_term');
        }
        let paramUrlUpdate = this.updateUtmParameters();
        if (paramUrlUpdate) {
            paramUrlUpdate = paramUrlUpdate.replace('gclid', 'utm_term');
            paramUrlUpdate = paramUrlUpdate.replace('fbclid', 'utm_term');
            paramUrlUpdate = paramUrlUpdate.replace('ttclid', 'utm_term');
            paramUrlUpdate = paramUrlUpdate.replace('MSCLKID ', 'utm_term');
            paramUrlUpdate = paramUrlUpdate.replace('msclkid', 'utm_term');
        }
        if (currentPath.includes('/jv1')) {
            if (paramUrl) {
                window.location.href = `${this.configService.urlJv1}${paramUrl}`;
            } else {
                window.location.href = this.configService.urlJv1;
            }
        } else if (currentPath.includes('/fb1')) {
            if (paramUrl) {
                window.location.href = `${this.configService.urlFb1}${paramUrl}`;
            } else {
                window.location.href = this.configService.urlFb1;
            }
        } else if (currentPath.includes('/tt1')) {
            if (paramUrl) {
                window.location.href = `${this.configService.urlTt1}${paramUrl}`;
            } else {
                window.location.href = this.configService.urlTt1;
            }
        }
        else {
            if (paramUrl) {
                window.location.href = `${this.configService.urlDefault}${paramUrl}`;
            } else {
                window.location.href = this.configService.urlDefault;
            }
        }
    }

    updateUtmParameters() {
        const urlParams = new URLSearchParams(window.location.search);
    
        const existingSource = urlParams.get('utm_source');
        const existingCampaign = urlParams.get('utm_campaign');
    
        urlParams.set('utm_source', 'DGT');
    
        urlParams.set('utm_campaign', 'TPC.JarvisCustCC');
        // const msClickId = urlParams.get('MSCLKID');
        // if (msClickId) {
        //   urlParams.delete('MSCLKID');
        //   urlParams.set('utm_term', msClickId);
        // }
    
        if (urlParams.toString() !== '') {
          const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
          history.replaceState({}, '', newUrl);
        }
        return '?' + urlParams;
      }
}