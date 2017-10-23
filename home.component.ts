import { Component, OnInit } from '@angular/core';
import { Application } from '../model/application';

import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { FilterPipe } from './shared/filter.pipe';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [`
        .activeApp{
            background-color:#b3e5fc ;
        }
    `]
})

export class HomeComponent implements OnInit {
    //apps: Application[] = [];
    apps: Application[];
    selectedApp: Application;
    color: String;
    mode: String;
    i: number;
    listview:Boolean = true;

    constructor(private appService: HomeService, private router: Router) { }

    ngOnInit() {
        // var a = new Application("Appmart", "Apps ");
        // var t = new Application("Timesheet", "timeshee");
        // this.apps.push(a, t);

        // Take from DB via service
        this.appService.getApps().subscribe(
            (apps: Application[]) => {
                this.apps = apps;
                this.selectedApp = apps[0];
            });
        this.mode = 'view';
        this.i = 0;
    }

    openDetails(app: Application): void {
        this.selectedApp = app;
        this.mode = 'view';
        //this.router.navigate(['/detail', { app: this.selectedApp, name: this.selectedApp.name }]);
    }

    editApp() {
        this.appService.editApplication(this.selectedApp); 
        this.mode = 'edit';
    }

    deleteApp() {
        this.appService.deleteApplication(this.selectedApp)
            .subscribe(result => console.log(result));
        //this.i++;
        this.selectedApp = this.apps[0];
    }
}
