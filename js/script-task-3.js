function findBestEmployee(employees) {
  const names = Object.keys(employees);
  let maxTask = 0;
  let betterEmploier;
  for (let name of names) {
    if (maxTask < employees[name]) {
      maxTask = employees[name];
      betterEmploier = name;
    }
  }
  return betterEmploier;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux