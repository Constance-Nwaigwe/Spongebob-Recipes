const { db, DataTypes, Model } = require("./db");

class SecretRecipes extends Model {}

SecretRecipes.init(
  {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = { SecretRecipes };
