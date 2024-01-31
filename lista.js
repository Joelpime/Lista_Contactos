const listaContactos = [
    {
        identificacion: 1,
        nombre: "Jorge Eliecer",
        apellidos: "Pinzon Mendivelso",
        telefono: 123465,
        ciudad: "Bogota",
    },
    {
        identificacion: 2,
        nombre: "Emiliano Andrés",
        apellidos: "Pinzon",
        telefono: 56789,
        ciudad: "Bogota",
    }
];

function crearContacto(identificacion, nombre, apellidos, telefono, ciudad) {
    const nuevoContacto = {
        identificacion: identificacion,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        ciudad: ciudad,
    };

    listaContactos.push(nuevoContacto);

}
crearContacto(98734, "Emma Isabella", "Pinzón", 3434502, "Bogotá");
crearContacto(98734, "Danna Manuela", "Pinzón", 54637, "Bogotá");
console.log(listaContactos);

console.log(listaContactos.pop());