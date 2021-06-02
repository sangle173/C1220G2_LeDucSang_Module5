let money = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Not enough money for by car Please study java web to get more money");
            }
        }, 100);
    }));
};
money = 101;
const promise = buyACar("Toyota").then(value => {
    console.log(value);
}, onerror => {
    console.log(onerror);
});
//# sourceMappingURL=main.js.map