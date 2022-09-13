const { db, DataTypes, Model } = require("./db");

class Recipes extends Model {}

Recipes.init(
  {
    name: DataTypes.STRING,
    ingredients: DataTypes.ARRAY(DataTypes.STRING),
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = { Recipes };
