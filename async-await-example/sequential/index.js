const { taskOne, taskTwo } = require("./tasks");

async function main() {
  try {
    console.time("measuring time");
    const result = await Promise.all([taskOne(), taskTwo()]);

    console.timeEnd("measuring time");

    console.log("Task one returned", result[0]);
    console.log("Task two returned", result[1]);
  } catch (e) {
    console.log(e);
  }
}

main();
