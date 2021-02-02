/**
 * Seorang HRD ingin menghire seorang karyawan.
 * Loker yang tersedia ada 3 jenis : Junior, Middle, Senior.
 * 
 * Syarat :
 * Junior : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 3.000.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 4.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 5.000.000
 * 
 * Middle : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 5.500.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 6.500.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 7.500.000
 * 
 * Senior : 
 * - memiliki pengalaman kurang dari 2, maka gaji Rp. 7.500.000
 * - memiliki pengalaman antara 2 sampa 5, maka gaji Rp. 9.000.000
 * - memiliki pengalaman lebih dari 5, maka gaji Rp. 10.000.000
 * 
 * Buatlah algoritma, pseudocode dan codingnya.
 */

 /**
  * ALGORITMA
  * -----------
  * 1. siapkan variable position
  * 2. siapkan variable experience
  * 3. siapkan variable salary
  * 4. jika posisi junior :
  * - jika pengalaman kurang dari 2, maka salary 3000000
  * - jika pengalaman 2 sampai 5, maka salary 4000000
  * - jika pengalaman lebih dari 5, maka salary 5000000
  * 5. jika posisi middle :
  * - jika pengalaman kurang dari 2, maka salary 5500000
  * - jika pengalaman 2 sampai 5, maka salary 6500000
  * - jika pengalaman lebih dari 5, maka salary 7500000
  * 6. jika posisi senior :
  * - jika pengalaman kurang dari 2, maka salary 7500000
  * - jika pengalaman 2 sampai 5, maka salary 9000000
  * - jika pengalaman lebih dari 5, maka salary 10000000
  *  7. tampilkan hasil gajinya
  */

  /**
   * PSEUDOCODE
   * ------------
   * STORE position WITH ANY STRING
   * STORE experience WITH ANY NUMBER
   * STORE salary WITH ANY NUMBER
   * 
   * IF position EQUAL TO 'Junior' THEN
   *    IF experience LESS THAN 2 THEN
   *        SET salary WITH 3000000
   *    ELSE IF experience MORE THAN 2 AND LESS THAN 5 THEN
   *        SET salary WITH 4000000
   *    ELSE IF experience MORE THAN 5 THEN
   *        SET salary WITH 5000000
   *    ENDIF
   * ELSE IF position EQUAL TO 'Middle' THEN
   *    IF experience LESS THAN 2 THEN
   *        SET salary WITH 5500000
   *    ELSE IF experience MORE THAN 2 AND LESS THAN 5 THEN
   *        SET salary WITH 6500000
   *    ELSE IF experience MORE THAN 5 THEN
   *        SET salary WITH 7500000
   *    ENDIF
   * ELSE IF position EQUAL TO 'Senior' THEN
   *    IF experience LESS THAN 2 THEN
   *        SET salary WITH 7500000
   *    ELSE IF experience MORE THAN 2 AND LESS THAN 5 THEN
   *        SET salary WITH 9000000
   *    ELSE IF experience MORE THAN 5 THEN
   *        SET salary WITH 10000000
   *    ENDIF
   * ENDIF
   * 
   * DISPLAY salary
   */

    // Javascript

 var position = 'Senior';
 var experience = 10;
 var salary;

 switch(position){
     case 'Junior':
        if(experience < 2){
            salary = 3000000
        }else if(experience >= 2 && experience <= 5){
            salary = 4000000
        }else if(experience >5){
            salary = 5000000
        }
     break;
     case 'Middle':
        if(experience < 2){
            salary = 5500000
        }else if(experience >= 2 && experience <= 5){
            salary = 6500000
        }else if(experience >5){
            salary = 7500000
        }
     break;
     case 'Senior':
        if(experience < 2){
            salary = 7500000
        }else if(experience >= 2 && experience <= 5){
            salary = 9000000
        }else if(experience >5){
            salary = 10000000
        }
     break;
 }

 console.log('Salary anda adalah Rp. ' + salary );
