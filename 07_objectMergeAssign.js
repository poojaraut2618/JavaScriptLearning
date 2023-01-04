const car = {
    carName: "Creta SX",
    company: "Hundai",
    launchYear: 2017
}
const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 BHP"
}

console.log(`===========Merge two Objects using assign()============`);
Object.assign(car, carEngine);
console.log(`Car and It's Engine Details:\n`, car);

console.log(`===========Merge two Objects using spread operator============`);
let res = {... car, ... carEngine};
console.log(res);



