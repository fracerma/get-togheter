"use strict";
module.exports = (sequelize, DataTypes) => {
  const Party = sequelize.define('Party', {
    recipes: DataTypes.JSONB,
    wines: DataTypes.JSONB,
    beers: DataTypes.JSONB,
    cocktails: DataTypes.JSONB,

  }, {});
  Party.associate = function(models) {
    Party.hasMany(models.Comment);
    Party.belongsToMany(models.Recipe, {
      through: "PartyRecipe",
      foreingKey: "partyId",
    });
    Party.belongsToMany(models.User, {
      through: "UserParty",
      foreingKey: "partyId",
    });
  };
  return Party;
};
