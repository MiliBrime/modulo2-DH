let perfil="a";
/* if (perfil==" "){
    console.log("Debe especificar el perfil del usuario");
}
else if(perfil=="administrador"|| perfil=="ADMINISTRADOR"||perfil=="Adminisitrador"){
    console.log("Usted tiene todos los privilegios de uso del sistema");
}
else if (perfil=="asistente"||perfil=="ASISTENTE"||perfil=="Asistente"){
    console.log("Usted solo tiene permisos de registrar, modificar y consultar datos");
}
else if (perfil=="invitado"||perfil=="INVITADO"||perfil=="Invitado"){
    console.log("Usted solo tiene permisos de consultar datos");
}
else{console.log("Debe especificar un perfil valido")}; */

switch(perfil){
    case "administrador":
        case "Administrador":
            case "ADMINISTRADOR":
                console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
    case "asistente":
        case "Asistente":
            case "ASISTENTE":
                console.log("Usted solo tiene permisos de consultar datos");
    break;
    case "invitado":
        case "Invitado":
            case "INVITADO":
                console.log("Usted solo tiene permisos de consultar datos");
    break;
    default: 
        console.log("Debe especificar un perfil valido");
}
