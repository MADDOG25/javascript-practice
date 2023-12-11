const person = {
  name: "Mosh",
  walk() {
    console.log(this); // retorna el objeto al que hace referencia
  },
};

person.walk();
