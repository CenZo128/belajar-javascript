"use strict";

/**
 * Terdapat sebuah perusahaan furniture yang hendak membuat software untuk menghitung production cost
 * dari permintaan-permintaan yang ada. Kriteria penentuan cost produksi sebuah produk dibagi menjadi 3
 * yaitu jenis produk, ukuran, serta material.
 * 
 * Buatlah sebuah function untuk permasalahan tersebut. Function akan memiliki 4 buah parameter yaitu:
 *   - product yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       lemari: 32000,
 *       meja: 22000,
 *       kursi: 14000
 *     }
 *   - size yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       besar: 31000,
 *       sedang: 21500,
 *       kecil: 18000
 *     }
 *   - material yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       jati: 40000,
 *       stainless: 35000,
 *       kayu: 27500,
 *       plastik: 13000
 *     }
 *   - demands yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       demand1: [
 *         ['meja', 'sedang', 'kayu'],
 *         ['lemari', 'besar', 'kayu'],
 *         ['meja', 'kecil', 'plastik']
 *       ],
 *       demand2: [
 *         ['kursi', 'besar', 'jati'],
 *         ['meja', 'besar', 'stainless']
 *       ],
 *       demand3: [
 *         ['meja', 'kecil', 'plastik'],
 *         ['meja', 'sedang', 'jati'],
 *         ['kursi', 'kecil', 'jati']
 *       ]
 *     }
 * 
 * Hasil yang diharapkan dari fungsi tersebut adalah sebuah object seperti di bawah
 * {
 *   demand1: 214500,
 *   demand2: 173000,
 *   demand3: 208500
 * }
 * 
 * Nilai 173000 pada demand2 didapatkan dari:
 *   ['kursi', 'besar', 'jati']     --> 14000 + 31000 + 40000 = 85000 ┬─[ + ]── 173000
 *   ['meja', 'besar', 'stainless'] --> 22000 + 31000 + 35000 = 88000 ┘
 */
function getProductionCost(product, size, material, demands) {
  // Put your code here!
  var result = {}; // let total = 0;

  for (var key in demands) {
    result[key] = 0;

    for (var i = 0; i < demands[key].length; i++) {
      for (var x in product) {
        if (demands[key][i][0] === x) {
          result[key] += product[x];
        }
      }

      for (var y in size) {
        if (demands[key][i][1] === y) {
          result[key] += size[y];
        }
      }

      for (var z in material) {
        if (demands[key][i][2] === z) {
          result[key] += material[z];
        }
      }
    }
  }

  return result;
}

console.log(getProductionCost({
  lemari: 32000,
  meja: 22000,
  kursi: 14000
}, {
  besar: 31000,
  sedang: 21500,
  kecil: 18000
}, {
  jati: 40000,
  stainless: 35000,
  kayu: 27500,
  plastik: 13000
}, {
  demand1: [['meja', 'sedang', 'kayu'], ['lemari', 'besar', 'kayu'], ['meja', 'kecil', 'plastik']],
  demand2: [['kursi', 'besar', 'jati'], ['meja', 'besar', 'stainless']],
  demand3: [['meja', 'kecil', 'plastik'], ['meja', 'sedang', 'jati'], ['kursi', 'kecil', 'jati']]
})); // { demand1: 214500, demand2: 173000, demand3: 208500 }