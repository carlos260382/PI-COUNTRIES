export function ValidationInput(input) {
  
    let error = {};
switch (input) {
    case !input.name:
        return error.name = "Name is requerid";

    case /\d/.test(input.name): //(test) ejecuta la busqueda de una expresion regular dice si es true o false
        return error.name = "Numbers are not allowed";

    case input.name.length<3:
        return error.name = "Activity name must have at least 3 characters";

    case !input.difficulty:
        return error.difficulty = "select at least one";

    case !input.duration:
        return error.duration = "indicates duration";


    case !input.season:
        return error.season="Select at least one"
    
    case input.countries.length<=0:
        return error.countries="Select at least one country"

    default:
        return error;
}
};