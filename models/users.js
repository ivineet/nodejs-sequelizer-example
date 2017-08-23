var sequelize = require('sequelize');
console.log('inside user model');

module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User', {
    id: DataTypes.STRING,
    name:DataTypes.STRING
	});






	//return User;
};

