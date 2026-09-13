function isEnoughCapacity(products, containerSize) {
    const product = Object.values(products);
    let total = 0;

    for (const item of product) {
        total += item;
    }
    return total <= containerSize;
}

console.log();
console.log();
console.log();
console.log();