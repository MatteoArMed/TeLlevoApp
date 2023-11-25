import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

// import * as mysql from 'mysql2/promise';

const DB_USERS = 'myuserdb';

export interface Usuarios{
  id: number;
  Contrasenna: number;
  Nombre: string;
  Apellido: string;
  Carrera: string;
  Sede: string;
}

@Injectable({
  providedIn: 'root'
})

export class MetodosSqliteService {
  
  private sqlite:  SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private Usuarios: WritableSignal<Usuarios[]> = signal<Usuarios[]>([]);
  
  constructor() { }

  // Configuración de la conexión a MySQL
  // const connectionConfig = {
  //   host: 'mysql-bd.cnebgscyavax.us-east-1.rds.amazonaws.com:3306',
  //   user: 'IonicAdmin>',
  //   password: 'adminadmin',
  //   database: 'BD_Ionic',
  // };
  
  // // Función para ejecutar una consulta
  // async function executeQuery() {
  //   // Crear una conexión
  //   const connection = await mysql.createConnection(connectionConfig);
  
  //   try {
  //     // Ejecutar una consulta
  //     const [rows, fields] = await connection.execute('SELECT * FROM Usuario');
  
  //     // Procesar los resultados
  //     console.log('Filas seleccionadas:', rows);
  //   } catch (error) {
  //     console.error('Error al ejecutar la consulta:', error);
  //   } finally {
  //     // Cerrar la conexión
  //     await connection.end();
    // }
  //dbappionic.cnebgscyavax.us-east-1.rds.amazonaws.com

  async initializePlugin() {
    try {
      this.db = await this.sqlite.createConnection(DB_USERS, false, 'no-encryption', 1, false);
      await this.db.open();
  
      const userSchema = `CREATE TABLE IF NOT EXISTS Usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Contrasenna TEXT NOT NULL,
        Nombre TEXT NOT NULL,
        Apellido TEXT NOT NULL,
        Carrera TEXT NOT NULL,
        Sede TEXT NOT NULL
      );`;
      await this.db.execute(userSchema);
      
      const existingUsers = await this.loadUsers();
    
      if (existingUsers.length === 0) {
        // Si no hay usuarios en la base de datos, crea usuarios de prueba
        await this.CrearUsuario('1234','Matteo','Araneda','Ingeniero', 'Antonio Varas');
        await this.CrearUsuario('1234','Tais','Socias','Ingeniera', 'Antonio Varas');
      }
    } catch (error) {
      console.error('Error al inicializar el plugin:', error);
      throw error;
    }
  }

  async validar(Nombre: string, Contrasenna: string){
    try{
      const query = `SELECT * FROM Usuario WHERE Nombre = ? AND Contrasenna = ?;`;
      const resultado = await this.db.query(query, [Nombre,Contrasenna]);
      return resultado;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }  

  //CRUD ingresar Datos
  async CrearUsuario(Contrasenna: string, Nombre: string,Apellido: string,Carrera: string,Sede: string,) {
    try {
      const query = `INSERT INTO Usuario (Contrasenna,Nombre,Apellido,Carrera,Sede) VALUES (?, ?, ?, ?, ?);`;
      const result = await this.db.query(query, [Contrasenna, Nombre,Apellido,Carrera,Sede]);
      await this.loadUsers();
      return result;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  async EliminarUsuario(id: number){
    try {
      const query = `DELETE FROM Usuario WHERE id = ?;`;
      const result = await this.db.query(query, [id]);
      return result;
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }

  
  async loadUsers(): Promise<Usuarios[]> {
    try {
      const result = await this.db.query('SELECT * FROM Usuario;');
    
      if (result && result.values) {
        return result.values.map((row) => ({
          id: row.id || 0,
          Contrasenna: row.Contrasenna || '',
          Nombre: row.Nombre || '',
          Apellido: row.Apellido || '',
          Carrera: row.Carrera || '',
          Sede: row.Sede || ''
        }));
      } else {
        console.error('El resultado de la consulta está vacío o no tiene la propiedad "values".');
        return []; // Devuelve un arreglo vacío en caso de que result.values sea undefined o null
      }
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
      throw error;
    }
  }
  
  async validarYAutenticarUsuario(Nombre: string, Contrasenna: string): Promise<number | null> {
    const query = `SELECT id FROM Usuario WHERE Nombre = ? AND Contrasenna = ?;`;
  
    try {
      const result = await this.db.query(query, [Nombre, Contrasenna]);
  
      if (result && result.values && result.values.length > 0) {
        const user = result.values[0];
        return user.id;
      } else {
        // Usuario no encontrado en la tabla 'Usuario'
        return null;
      }
    } catch (error) {
      console.error('Error al validar y autenticar usuario:', error);
      throw error;
    }
  }
  

}