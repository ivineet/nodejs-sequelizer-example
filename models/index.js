"use strict";

var express = require('express');
var app = express();

var fs        = require("fs");
var path      = require("path");
var env = app.get('env') == 'development' ? 'dev' : app.get('env');



// IMPORT MODELS
// =============================================================================
var Sequelize = require('sequelize');

// db config
var env = "dev";
var config = require('../database.json')[env];
var password = config.password ? config.password : null;

// initialize database connection
var sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
    dialect: config.driver,
    logging: console.log,
        define: {
            timestamps: false
        }
    }
);

sequelize.authenticate().complete(function (err) {
 if (err) {
    console.log('There is connection in ERROR');
 } else {
    console.log('Connection has been established successfully');
 }
});

var db        = {};

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0)
            && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
       // db[model.name] = model;
		//console.log('model db index.js : '+db[model.name]);
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
//db.Sequelize = Sequelize;

module.exports = db;
