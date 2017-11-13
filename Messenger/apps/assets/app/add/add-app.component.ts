import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { Application } from '../../model/application'
import { HomeService } from '../home.service'

@Component({
    selector: 'add-app',
    templateUrl: './add-app.component.html'
})

export class AddComponent implements OnInit {
    application: Application;
    myForm: FormGroup;
    @Input() ediApp: Application;
    @Output() updateComplete = new EventEmitter();

    constructor(private homeService: HomeService, private router: Router) { }

    onReset() {
        this.myForm.reset();
    }

    onSubmit() {
        if (this.application) {
            this.application.name = this.myForm.value.name;
            this.application.desc = this.myForm.value.desc;
            this.application.apptype = this.myForm.value.apptype;
            this.application.tech = this.myForm.value.tech;
            this.application.desc = this.myForm.value.desc;
            this.application.business = this.myForm.value.business;
            this.application.subbusiness = this.myForm.value.subbusiness;
            this.application.os = this.myForm.value.os;
            this.application.dm = this.myForm.value.dm;
            this.application.pm = this.myForm.value.pm;
            this.application.cc = this.myForm.value.cc;
            this.application.criticality = this.myForm.value.criticality;
            this.homeService.updateApplication(this.application).subscribe(
                data => console.log(data),
                error => console.error(error));
            this.updateComplete.emit();
        }
        else {
            const app = new Application(this.myForm.value.name);
            app.apptype = this.myForm.value.apptype;
            app.tech = this.myForm.value.tech;
            app.desc = this.myForm.value.desc;
            app.business = this.myForm.value.business;
            app.subbusiness = this.myForm.value.subbusiness;
            app.os = this.myForm.value.os;
            app.dm = this.myForm.value.dm;
            app.pm = this.myForm.value.pm;
            app.cc = this.myForm.value.cc;
            app.criticality = this.myForm.value.criticality;
            this.homeService.addApplication(app)
                .subscribe(
                data => console.log(data),
                error => console.error(error)
                );
            this.router.navigate(['/home']);
        }
    }

    ngOnInit() {
        //this.application = new Application("");
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            apptype: new FormControl(),
            tech: new FormControl(),
            desc: new FormControl(),
            business: new FormControl(),
            subbusiness: new FormControl(),
            os: new FormControl(),
            dm: new FormControl(null, Validators.required),
            pm: new FormControl(),
            cc: new FormControl(),
            criticality: new FormControl()
        });

        this.homeService.appIsEdit.subscribe(
            (app: Application) => this.application = app
        );
        this.application = this.ediApp;
    }
}