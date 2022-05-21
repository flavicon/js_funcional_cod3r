const cart = [
    { name: 'pencil', qtd: 1, price: 10.00, fragil: true },
    { name: 'pen', qtd: 1, price: 5.00, fragil: false },
    { name: 'table', qtd: 0, price: 18.00, fragil: false },
    { name: 'book', qtd: 1, price: 10.90, fragil: true },
    { name: 'smartphone', qtd: 1, price: 200.00, fragil: true },
];

const total = cart.reduce((acc, product) => acc + (product.qtd * product.price), 0);

console.log('price total on cart: $', total);
