import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Application } from '../model/application';

@Injectable()
export class HomeService {
    private apps: Application[] = [];
    appIsEdit = new EventEmitter<Application>();
    server = "BLRKEC205067L";

    constructor(private http: Http) {

    }

    getApps() {
        return this.http.get('http://' + this.server + ':4200/application')
            .map((response: Response) => {
                const apps = response.json().obj;
                let transformedMessages: Application[] = [];
                for (let app of apps) {
                    var a = new Application(app.name);
                    a.appid = app._id;
                    a.desc = app.desc == 'NULL' ? 'Application description' : app.desc;
                    a.criticality = app.criticality;
                    a.appli = app.appli;
                    a.apptype = app.apptype;
                    a.business = app.business;
                    a.subbusiness = app.subbusiness;
                    a.cc = app.cc;
                    a.confid = app.confid;
                    a.ddb = app.ddb;
                    a.dm = app.dm;
                    a.dschema = app.dschema;
                    a.dserver = app.dserver;
                    a.filer = app.filer;
                    a.integ = app.integ;
                    a.ldb = app.ldb;
                    a.lserver = app.lserver;
                    a.lschema = app.lschema;
                    a.tdb = app.tdb;
                    a.tserver = app.tserver;
                    a.tschema = app.tschema;
                    a.masterapp = app.masterapp;
                    a.os = app.os;
                    a.pm = app.pm;
                    a.portfolio = app.portfolio;
                    a.projcode = app.projcode;
                    a.scripter = app.scripter;
                    a.tech = app.tech;

                    transformedMessages.push(a);
                }
                this.apps = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    };

    addApplication(app: Application) {
        const body = JSON.stringify(app);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://' + this.server + ':4200/application', body, { headers: headers })
            .map((res: Response) => {
                const result = res.json();
                const app = new Application(result.obj.name);
                app.apptype = result.obj.apptype;
                app.tech = result.obj.tech;
                app.desc = result.obj.desc;
                app.business = result.obj.business;
                app.subbusiness = result.obj.subbusiness;
                app.os = result.obj.os;
                app.dm = result.obj.dm;
                app.pm = result.obj.pm;
                app.cc = result.obj.cc;
                app.criticality = result.obj.criticality;
                this.apps.push(app);
                return app;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editApplication(application: Application) {
        return this.appIsEdit.emit(application);
    }

    updateApplication(application: Application) {
        const body = JSON.stringify(application);
        const headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.patch('http://' + this.server + ':4200/application/' + application.appid, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


    deleteApplication(app: Application) {
        this.apps.splice(this.apps.indexOf(app), 1);
        const headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.delete('http://' + this.server + ':4200/application/' + app.appid, { headers: headers })
            .map((response: Response) => response.json());
        //.catch((error: Response) => Observable.throw(error.json()));
    }

    getDashboard(column: String) {
        return this.http.get('http://' + this.server + ':4200/application/dash/' + column)
            .map((response: Response) => {
                const apps = response.json().obj;
                let transformedMessages: any[] = [];
                for (let app of apps) {
                    transformedMessages.push(app);
                }
                this.apps = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));

    }
}
