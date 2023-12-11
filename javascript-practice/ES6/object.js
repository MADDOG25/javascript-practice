const person = {
  // objeto persona tiene 3 propiedades y 2 metodos
  name: "Mosh",
  walk() {},
  talk() {},
};
// accediento a valores de las propiedades del objeto
person.talk();
person.name = "";

const targetMember = "Jeff"; // otra manera de reasignar valores
person[targetMember.value] = "John"; // reasignando valor de la propiedad
