var mong = require('mongoose');
var Schema = mong.Schema;

var schema = new Schema({
    name: { type: String, require: true },
    desc: { type: String },
    criticality: {type: String },
    masterapp:{type:String},
    apptype:{type:String},
    business:{type:String},
    subbusiness:{type:String},
    os:{type:String},
    tech:{type:String},
    filer:{type:String},
    scripter:{type:String},
    portfolio:{type:String},
    projcode:{type:String},
    dm:{type:String},
    pm:{type:String},
    cc:{type:String},
    lserver:{type:String},
    ldb:{type:String},
    lschema:{type:String},
    tserver:{type:String},
    tdb:{type:String},
    tschema:{type:String},
    dserver:{type:String},
    ddb:{type:String},
    dschema:{type:String},
    confid:{type:String},
    integ:{type:String},
    appli:{type:String},
},{collection:'allapps'});

module.exports = mong.model('Application', schema);