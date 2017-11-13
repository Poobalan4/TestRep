import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { HomeService } from './../home.service'

declare let d3: any;

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../../node_modules/nvd3/build/nv.d3.css'
    ],
})

export class DashboardComponent implements OnInit {
    apps: any[];
    businessWise:any[];
    appWise:any[];

    options;
    data = [];

    constructor(private appService: HomeService) {

    }

    ngOnInit() {
        this.appService.getDashboard('criticality').subscribe(
            (apps: any[]) => {
                this.apps = apps;
                this.createChart()
            }
        );

        this.appService.getDashboard('apptype').subscribe(
            (apps:any[])=>{
                this.appWise = apps;
            }
        );

        this.appService.getDashboard('portfolio').subscribe(
            (apps:any[])=>{
                this.businessWise = apps;
            }
        );
    }

    createChart() {
        this.apps.forEach(element => {
            this.data.push({ 'key': element._id, 'y': element.count });
        });

        this.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
    }
}