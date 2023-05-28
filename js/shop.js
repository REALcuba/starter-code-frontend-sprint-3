/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
    offer: {
      number: 3,
      percent: 20
    }
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery'
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
    offer: {
      number: 10,
      percent: 30
    }
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty'
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty'
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty'
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes'
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes'
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes'
  }
]
// import {products } from './products.js'
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = []

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = []

var total = 0

// getElements
const cartArr = document.getElementById('cart_list')
const totalPrice = document.getElementById('total_price')
var cartCount = document.getElementById('count_product')

// Exercise 1
function buy (id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
  // const cartArr = document.getElementById('cart_list')

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      cartList.push(products[i])
      cartCount.innerHTML = cartList.length
    }
  }
}

// Exercise 2
function cleanCart () {
  if (cartList.length >= 0) {
    cartList = []
    cart = []
    // console.log('Cart cleaned')
    cartArr.innerHTML = []
    console.log(cartList)
    total = 0
    // cartList.product.quantity = 0
    totalPrice.innerText = 0
    cartCount.innerHTML = 0
  }
}

// Exercise 3
function calculateTotal () {
    // Calculate total price of the cart using the "cartList" array
  total = 0
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price
  }
  console.log('Total: $' + `${total}`)
  return total
}

// Exercise 4
function generateCart () {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart = []
  for (let i = 0; i < cartList.length; i++) {
    const product = cartList[i]

    if (!cart.includes(product)) {
      cart.push(product)
      product.quantity = 1
    } else {
      product.quantity++
    }
    product.subtotal
  }

  console.log(cart)
  return cart // Return cart array with items and quantity in cart
}

// Exercise 5
function applyPromotionsCart () {
// Apply promotions to each item in the array "cart"
// Si el usuario compra 3 o más botellas de aceite, el precio del producto desciende a 10 euros.

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i]
    var groceryQty = 0
    // Cuando se compran 10 o más productos para hacer pastel, su precio se rebaja a 2/3.
    if (product.name === 'cooking oil' && product.quantity >= 3) {
      product.price = 10
      product.subTotalWithDiscount = (product.price * product.quantity)
    }

    cart.forEach(product => {
      if (product.type === 'grocery') {
        groceryQty += product.quantity
      }
      return groceryQty
    })

    if (product.type === 'grocery' && groceryQty >= 10) {
      product.subTotalWithDiscount = ((product.price * (2 / 3)) * product.quantity)
    } else {
      product.subTotalWithDiscount = (product.price * product.quantity)
    }
    calculateTotal()
  }
}

// Exercise 6
function printCart () {
    // Fill the shopping cart modal manipulating the shopping cart dom
  generateCart()
  applyPromotionsCart()
  cartArr.innerHTML = cart.map(product => `<tr>
  <th scope="row">${product.name}</th>
    <td>$${product.price.toFixed(2)}</td>
    <td>${product.quantity}</td>
    <td>$${(product.subTotalWithDiscount).toFixed(2)}</td>
  </tr>`).join('')
  totalPrice.innerHTML = total.toFixed(2)
}

// ** Nivell II **

// Exercise 7
function addToCart (id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  products.forEach(product => {
    if (product.id === id) {
      product.quantity = 1
      cart.find(product => product.id === id) ? product.quantity++ : cart.push(product)
    }
  }

  )
}

// Exercise 8
function removeFromCart (id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal () {
  console.log('Open Modal')
  printCart()
  // calculateTotal()
}

