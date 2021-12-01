const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    idActivity:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:true,
      primaryKey:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  difficulty:{
      type: DataTypes.INTEGER,
      validate:{
        min:1,
        max:5
      },
      allowNull: false
  },
  duration:{
      type: DataTypes.STRING,
      allowNull: false 
  },
  season:{
      type:DataTypes.ENUM("Summer", "Autumn","Winter","Spring"),
      allowNull: false
  }
},
{
  timestamps:false 
}
  );
}; 

// "name" : "Benin"
// "dificultad" : "5" 
// "duracion" : "alta"
// "temporada" : "Summer"