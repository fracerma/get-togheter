"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      text: DataTypes.TEXT,
      UserId: DataTypes.INTEGER,
      PartyId: DataTypes.INTEGER
    },
    {}
  );
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.Party);
    Comment.belongsTo(models.User);
  };
  
  return Comment;
};
