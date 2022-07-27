export interface Estudio{
    id?:number;
    institucion:string;
    titulo: string;
    periodo:string;
    descripcion:string;
}
export interface Experiencia{
    id?:number;
    periodo:string;
    puesto:string;
    descripcion:string;
}
export interface Proyecto{
    id?:number;
    nombre:string;
    imagen:String;
    url:String;
    descripcion:String;
}
export interface Persona{
    id?:number;
    nombre:string;
    apellido:string;
    img:string;
    sobremi:string;
    rol:string;
}
export interface SocialHeader {
    id?:number;
    email:string;
    github:string;
    linkedin:string;
    cv:string;
}
export interface Skills{
    id?:number;
    porcentaje: number;
    nombre:string;
}