/*  
   INCOME & EXPENSE TRACKER
   
   SMMARY
   =========
   Buatlah sebuah income and expense tracker yang dapat mengatur list pengeluaran dan pemasukan.
   
   TASKS
   =========
   Aplikasikan modular function untuk membuat aplikasi tersebut. Berikut rincian :
   
   function getTracks()
   - mengambil variable tracsk lalu menghasilkan output seperti berikut :
 
   
  */

 const tracks = {
     expense : {
         lists : [
            {
                id : 1,
                name : "Bayar cicilan",
                subtotal : 1000000
            },
            {
                id : 2,
                name : "Beli makan",
                subtotal : 500000
            }
         ],
         total : 1500000
     },
     income : {
        lists : [
           {
               id : 1,
               name : "Bayar cicilan",
               subtotal : 1000000
           },
           {
               id : 2,
               name : "Beli makan",
               subtotal : 500000
           }
        ],
        total : 1500000
    },
 }

 function getTrackers(){
     // code here
 }
 function addTracks(type,name,price){
    // code here
}
function deleteTracks(){
    // code here
}
