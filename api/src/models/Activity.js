const {
  DataTypes
} = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('activity', {
    idActivity: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false

    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      },
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull: false
    }
  }, {
    timestamps: false
  });
};