const square = (number) => number * number; // sintaxis de arrow functions
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);
// con el metodo filter iteramos el array returnando solo los trabajos activos
