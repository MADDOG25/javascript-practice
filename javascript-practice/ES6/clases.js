// Default -> import ... from '';
// Named -> import {...} from '';

class Person {
  constructor(name) {
    // el metodo constructor es un nombre reservado a keyword especial
    this.name = name;
    // usaremos en este caso this que siempre devuelve la referencia al elemento que estamos señalando
  }

  walk() {
    console.log("walk");
  }
}
//Inheritance
class Teacher extends Person {
  // usamos el keyword "extends" para que sea una extension de la clase Person
  constructor(name, degree) {
    super(name); // usamos el keyword "super" para gestionar el parametro de la clase Person
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Mosh", "MSc"); // mostramos el objeto Teacher con los valores que necesita

const person = new Person("Mosh"); // para mostrar el objeto Person necesitamos usar "new" como operador
