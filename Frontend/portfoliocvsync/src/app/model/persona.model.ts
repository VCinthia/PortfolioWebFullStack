export class persona {
    id?: number;//con el signo? al final de la variante indicamos que ese dato no es necesario y deja de marcar error
    nombre: String;
    apellido: String;
    url_foto: String;

    constructor(nombre: String, apellido: String, url_foto: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.url_foto = url_foto;
    }
}