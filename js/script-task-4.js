function countTotalSalary(employees){
  const salary = Object.values(employees)
  console.log('salary :', salary);
  let sum = 0;
  for(const el of salary){
    sum += el;
  }
  return sum
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400