const { db, DataTypes, Model } = require("./db");

class Recipes extends Model {}

Recipes.init(
  {
    name: DataTypes.STRING,
    ingredients: DataTypes.ARRAY,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = { Recipes };
