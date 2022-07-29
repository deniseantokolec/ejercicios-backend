class Usuario {
    constructor (){
        this.nombre = '';
        this.surname = '';
        this.books = [{autor: this.author = '', titulo: this.title = ''}];
        this.pet = [''];
        
    }
    
    getfullname () {        
        return [
            this.nombre = Nombre,
            this.surname = Apellido,
            this.books = Libros,
            this.pet = Mascotas
        ]
        
    }
    addMascota(){
        let mascota = 'loro'
        return this.pet.push(mascota)
    }
            
    countMascotas(){
        const cantidadMascotas = this.pet.length
        return cantidadMascotas
    }
    addBook(){
        const libro = [{}];
        return this.books.push(libro)
    }
    getBookName(){
    return this.books
    } 
       
   
      
}




const usuario = new Usuario (
    Nombre = 'Juan',
    Apellido = 'Perez',
    Libros = [ {autor:'j.k Rowling',  titulo: 'Harry Potter' }],
    Mascotas = ['Perro', 'Gato']
    
)

console.log('Informacion: ' , usuario.getfullname());
console.log('Libros: ' , usuario.getBookName());
console.log('Mascotas: ' + usuario.pet);
console.log('Cantidad de MAscotas: ' + usuario.countMascotas());
console.log(usuario.addMascota());
console.log('Mascotas: ' + usuario.pet);
console.log('Cantidad de MAscotas: ' + usuario.countMascotas());
console.log(usuario.addBook());
console.log('Libros: ' , usuario.getBookName());
console.log(usuario.books);


