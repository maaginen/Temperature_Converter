import { Component }      from '@angular/core';

// This component consumes the re-usable service.
@Component({
    selector: 'app-root',
    template: `
                <a routerLink="/home" routerLinkActive="active">Home</a> |
                <a routerLink="/feedback" routerLinkActive="active">Feedback</a>
                <router-outlet></router-outlet>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent { }