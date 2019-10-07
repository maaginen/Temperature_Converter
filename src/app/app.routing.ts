import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { FeedBackComponent } from "./app.feedback.component";
import { HomeComponent } from "./app.home.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'feedback', component: FeedBackComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);