var sequelize = require('sequelize');
console.log('inside book model');

module.exports = function(sequelize, DataTypes) {

	var books = sequelize.define('Books', {
    id: {
    	type:DataTypes.STRING,
    	primaryKey: true
    },
    name:DataTypes.STRING
	});

	return books;
};

