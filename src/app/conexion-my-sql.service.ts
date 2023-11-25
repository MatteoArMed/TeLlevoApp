import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ConexionMySqlService {
  
  constructor() {}
  
  
  
  
  async prueba(){
    var mysql = require('mysql');
    
    var connection = mysql.createConnection({
      host: 'mysql-bd.cnebgscyavax.us-east-1.rds.amazonaws.com',
      user: 'IonicAdmin',
      port: 3306,
      password: 'adminadmin',
      database: 'BD_Ionic',
    });
    connection.connect();
    
    connection.query('SELECT * from prueba', function (error: any, results: { solution: any; }[], fields: any) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    connection.end();
  }


};