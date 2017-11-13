import { Component } from '@angular/core';

import { HomeService } from './home.service'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[HomeService]
})
export class AppComponent {
    
}