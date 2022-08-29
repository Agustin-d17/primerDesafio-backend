class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log(`Hola! mi nombre es ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(libro, autor){
        let newBook = {
            nombre: libro,
            autor: autor,
        }

        this.libros.push(newBook);
    }

    getBookNames(){
        let bookNames = [];
        this.libros.forEach(libro => bookNames.push(libro.nombre));
        console.log(bookNames)
    }
}


const usuario = new Usuario("Agustin", "Diaz", [],[]);

usuario.addMascota("Perro");
usuario.addMascota("Gato");
usuario.addBook("Cien años de soledad", "Garcia Marquez");
usuario.addBook("Cielo Rojo", "David Lozano Garbala");
usuario.getFullName();
usuario.countMascotas();
usuario.getBookNames();
