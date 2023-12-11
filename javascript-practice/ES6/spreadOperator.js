const first = { name: "Jeff" };
const second = { job: "Instructor" };

const combined = { ...first, ...second, location: "Panama" };
// el operador spread toma todos y cada uno de las propiedades dentro del objeto

const clone = { ...first }; //si queremos clonar las propiedades de un objeto