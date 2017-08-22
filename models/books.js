var sequelize = require('sequelize');
console.log('inside book model');

module.exports = function(sequelize, DataTypes) {

	var books = sequelize.define('Books', {
    id: DataTypes.STRING,
    name:DataTypes.STRING
	});

	return books;
};

