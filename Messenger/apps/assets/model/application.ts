export class Application {
    appid: String;
    name: string;
    desc: string;
    criticality: string;
    masterapp: String;
    apptype: String;
    business: String;
    subbusiness: String;
    os: String;
    tech: String;
    filer: String;
    scripter: String;
    portfolio: String;
    projcode: String;
    dm: String;
    pm: String;
    cc: String;
    lserver: String;
    ldb: String;
    lschema: String;
    tserver: String;
    tdb: String;
    tschema: String;
    dserver: String;
    ddb: String;
    dschema: String;
    confid: String;
    integ: String;
    appli: String;

    constructor(name: string) {
        this.name = name;
    }
}