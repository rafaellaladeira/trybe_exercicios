// Quanto custaria para comprar todos os itens de uma vez?

function shoppingSpree(arr) {
   return arr.reduce((acc, cur)=> acc + cur.price, 0)
} // após a primeira rodada , o acc não é acc.price mais, por isso, nao pode colocar acc.price

    const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
    ];
    
    console.log(shoppingSpree(wishlist)); // 227005 