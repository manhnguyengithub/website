import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MemoryZoneComponent } from './memory-zone/memory-zone.component';
import { HoanghaComponent } from './hoangha/hoangha.component';


const routes: Routes = [
    {
        path: '*',
        pathMatch: 'full',
        component: HoanghaComponent
    },
    {
        path: 'hoanghamobile',
        component: HoanghaComponent
    },
    {
        path: 'memoryzone',
        component: MemoryZoneComponent
    },
    {
        path: '**',
        component: HoanghaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
