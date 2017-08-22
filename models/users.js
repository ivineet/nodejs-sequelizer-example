var sequelize = require('sequelize');
console.log('inside user model');

module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User', {
    id: DataTypes.STRING,
    name:DataTypes.STRING
	});

	User.sync({force: true}).then(function () {
  // Table created
	  return User.create({
	    id: 'J1',
	    name: 'vineet'
	  });
	});





	//return User;
};

