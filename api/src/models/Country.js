const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.CHAR(3),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    continente:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue:"The capital is not found"
    },
    subregion:{
      type: DataTypes.STRING,
      defaultValue:"The subregion is not found"
    },
    area:{
      type: DataTypes.FLOAT
    },
    poblacion:{
      type: DataTypes.FLOAT
    },
    
  }, {
    timestamps:false
  } );
  
};
