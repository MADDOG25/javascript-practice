const address = {
  street: "",
  city: "",
  country: "",
};

const street = address.street;
const city = address.city;
const country = address.country;
// esto es un codigo repetitivo

const { street: st } = address;
// manera correcta de destructurar  y extraer la propiedad street del objeto address
