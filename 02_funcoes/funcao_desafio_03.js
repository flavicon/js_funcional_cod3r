const cart = [
    { name: 'pencil', qtd: 3, price: 10.00, fragil: true },
    { name: 'pen', qtd: 2, price: 5.00, fragil: false },
    { name: 'table', qtd: 1, price: 18.00, fragil: false },
    { name: 'book', qtd: 5, price: 10.90, fragil: true },
    { name: 'smartphone', qtd: 4, price: 200.00, fragil: true },
];

// 1. filtrar todos os frageis;
const fragileProduct = cart.filter((product) => product.fragil);
console.log('Produtos frageis:', fragileProduct);

// 2. preco total por produto; 
const totalPerProduct = cart.map((product) => product.qtd * product.price);
console.log('Preco total por produto:', totalPerProduct);

// 3. media de preco de produtos;
const averagePricePerProduct = cart.reduce((acc, product, index, cart) => {
    acc.price += product.price * product.qtd;
    acc.qtd += product.qtd;

    const parcial = {
        price: acc.price,
        qtd: acc.qtd
    }

    if (index !== (cart.length - 1)) return parcial;
    
    return acc.price / acc.qtd; 
}, { price: 0, qtd: 0 });

console.log(averagePricePerProduct);
