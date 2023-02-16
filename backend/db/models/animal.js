const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ User, Favourite, Comment }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Favourite, { foreignKey: 'animal_id' });
      this.hasMany(Comment, { foreignKey: 'animal_id' });
    }
  }
  Animal.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Animal',
    }
  );
  return Animal;
};
