// Store Provision
// You will receive two arrays. The first array represents the current stock of the local store. The second array will
// contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product.
// The second array could contain products that are already in the local store. If that happens increase the quantity for
// the given product. You should store them into an object, and print them in the following format: (product ->
// quantity)
// All of the arrays’ values will be strings.


function storeProvision(stock, orderedProducts) {

  let products = {};

  for (let i = 0; i < stock.length; i += 2) {
    let productName = stock[i];
    let qty = +stock[i + 1];

    products[productName] = qty;
  }

  for (let i = 0; i < orderedProducts.length; i += 2) {
    let productName = orderedProducts[i];
    let qty = +orderedProducts[i + 1];

    if (products.hasOwnProperty(productName)) {
      products[productName] += qty;
      continue;
    }
    products[productName] = qty;

    // if (productName in products) {
    //   products[productName] += qty;
    // } else {
    //   products[productName] = qty;
    // }
  }

  for (let entry of Object.entries(products)) {
    console.log(entry.join(' -> '));
  }

}
storeProvision([
  'Chips', '5', 'CocaCola', '9', 'Bananas',
  '14', 'Pasta', '4', 'Beer', '2'
],
  [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
  ]
)