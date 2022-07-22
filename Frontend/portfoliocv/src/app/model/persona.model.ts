export class persona {
    id?: number;//con el signo? al final de la variante indicamos que ese dato no es necesario y deja de marcar error
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}