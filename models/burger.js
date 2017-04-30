module.exports = function(sequelize, dataTypes) {
	var Burger = sequelize.define('Burger', {
		burger_name: dataTypes.STRING,
		devoured: {
			type: dataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return Burger;
}