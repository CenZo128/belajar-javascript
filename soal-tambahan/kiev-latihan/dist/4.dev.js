"use strict";

/*
  SHOPPING TEROS
  Tokosidia ingin membuat fitur untuk menjumlahkan harga dari barang-barang yang dibelanjakan oleh customer.
  Berikut adalah list-list barang yang dijual di Tokosidia:
  --------------------------------------------
  | No |     Nama Product       |   Harga    |
  --------------------------------------------
  | 1 |        Asus ROG         |  25000000  |
  --------------------------------------------
  | 2 |      Lenovo Legion      |  22000000  |
  --------------------------------------------
  | 3 |         HP Omen         |  20000000  |
  --------------------------------------------
  | 4 |      Acer Predator      |  21000000  |
  --------------------------------------------
  
  Tokosidia juga mempunyai promo DISCOUNT 20% untuk MEMBER di tokosidia.
  Bantulah Tokosidia untuk membuat fitur dengan ketentuan di bawah!
  ---------------
    DIRECTIONS
  --------------
  Diberikan 4 buah function yaitu:
  1. shoppingTeros merupakan main function yang akan memanggil fungsi-fungsi lain di dalam nya untuk mengeluarkan output yang di inginkan dengan:
    - Input adalah customer berupa object
    - Output adalah result berupa string
  2. getProductAmount untuk mendapatkan jumlah dari produk yang ingin di beli dengan:
    - Input adalah products berupa array multidimensi
    - Output adalah listProductAmount berupa object 
  3. getTotalPrice untuk mendapatkan total harga dari semua produk yang ingin di beli dengan:
    - Input adalah listProductAmount berupa object 
    - Output adalah totalPrice berupa number
  4. getDiscount untuk mendapatkan diskon jika customer merupakan member Tokosidia dengan:
    - Input adalah statusMember berupa boolean dan totalPrice berupa number
    - Output adalah totalPriceAfterDiscount berupa number
  ==========================================================================================================================
  -------------
      NOTES
  -------------
  1. Jika customer merupakan member maka kembalikan output berupa string dengan format:
      "Hai pelanggan setia <Nama Customer>! Total Harga yang harus kamu bayar adalah Rp <Total Harga Akhir>"
  2. Jika customer BUKAN merupakan member maka kembalikan output berupa string dengan format:
      "Hai <Nama Customer>! Total Harga yang harus kamu bayar adalah Rp <Total Harga Akhir>"
  ========================================================================================================================== 
  -------------
    EXAMPLES
  ------------
  Input: 
  {
    name: "Amir",
    products: [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]],
    member: true
  }
  PROSES:
  - Panggil fungsi getProductAmount didalam fungsi shoppingTeros dengan paramater input:
    products = [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]]
  - Fungsi getProductAmount akan merapihkan data product dengan jumlah yang ingin dibeli, dan mengembalikan output berupa object: 
    { 'Acer Predator': 2, 'Asus ROG': 1, 'Lenovo Legion': 1 }
  - Panggil fungsi getTotalPrice didalam fungsi shoppingTeros dengan parameter input:
    products = { 'Acer Predator': 2, 'Asus ROG': 1, 'Lenovo Legion': 1 }
  - Fungsi getTotalPrice akan menjumlahkan semua harga dari barang-barang yang di beli customer, dan mengembalikan output berupa number: 
    89000000
  - Panggil fungsi getDiscount didalam fungsi shoppingTeros dengan parameter input:
    statusMember: true
    totalPrice: 89000000
  
  - Fungsi getDiscount akan menghitung discount (jika ada), dan akan mengembalikan output berupa number:
    71200000
  Output:
  "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"
  
  ---------------
  RESTRICTION
  ---------------
  1. Tidak boleh menggunakan built-in Function yang DILARANG!
*/
function getProductsAmount(productsArr) {
  // Write your code here
  var result = {};
  var listProduk = productsArr.products;

  for (var i = 0; i < listProduk.length; i++) {
    if (result[listProduk[i][0]] === undefined) {
      result[listProduk[i][0]] = listProduk[i][1];
    }
  }

  return result;
}

function getTotalPrice(productsObj) {
  var listProduct = [["Asus ROG", 25000000], ["Lenovo Legion", 22000000], ["Zyrex 1945", 7000000], ["HP Omen", 20000000], ["Acer Predator", 21000000]]; // Write your code here

  var result = 0;

  for (var key in productsObj) {
    for (var i = 0; i < listProduct.length; i++) {
      if (key === listProduct[i][0]) {
        result += productsObj[key] * listProduct[i][1];
      }
    }
  }

  return result;
}

function getDiscount(memberStatus, totalPrice) {
  // Write your code here
  var result = 0;
  var discount = 0.2;

  if (memberStatus === true) {
    result = totalPrice - totalPrice * discount;
  } else {
    return totalPrice;
  }

  return result;
}

function shoppingTeros(customer) {
  // write your code here
  var productAmount = getProductsAmount(customer);
  var totalHarga = getTotalPrice(productAmount);
  var diskon = getDiscount(customer.member, totalHarga);

  if (customer.member === true) {
    return "Hai pelanggan setia ".concat(customer.name, "! Total Harga yang harus kamu bayar adalah Rp ").concat(diskon);
  } else {
    return "Hai ".concat(customer.name, "! Total Harga yang harus kamu bayar adalah Rp ").concat(totalHarga);
  }
}

var customer1 = {
  name: "Fajrin",
  products: [["Asus ROG", 2], ["Lenovo Legion", 3]],
  member: true
};
var customer2 = {
  name: "Fadlila",
  products: [["Acer Predator", 1], ["Asus ROG", 3], ["Lenovo Legion", 1]],
  member: false
};
var customer3 = {
  name: "Jetly",
  products: [["HP Omen", 2]],
  member: true
}; // TEST CASES

console.log(shoppingTeros(customer1)); // Hai pelanggan setia Fajrin! Total Harga yang harus kamu bayar adalah Rp 92800000

console.log(shoppingTeros(customer2)); // Hai Fadlila! Total Harga yang harus kamu bayar adalah Rp 118000000

console.log(shoppingTeros(customer3)); // Hai pelanggan setia Jetly! Total Harga yang harus kamu bayar adalah Rp 32000000

module.exports = {
  getProductsAmount: getProductsAmount,
  getTotalPrice: getTotalPrice,
  getDiscount: getDiscount,
  shoppingTeros: shoppingTeros
};