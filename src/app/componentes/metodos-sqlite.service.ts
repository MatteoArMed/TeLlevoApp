import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';


const DB_USERS = 'myuserdb';

export interface User {
  id: number;
  name: string;
  active: number;
}

export interface Datos{
  id: number;
  usuario_id: number;
  nombres: string;
  apellidos: string;
  carrera: string;
  horarios: string;
  sede: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetodosSqliteService {
  
  private sqlite:  SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private users: WritableSignal<User[]> = signal<User[]>([]);
  
  constructor() { }

  async inicioPlugin(){
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );

    const schema = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      active INTEGER DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS Usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT NOT NULL,
      contrasenna TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Datos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      nombres TEXT NOT NULL,
      apellidos TEXT NOT NULL,
      carrera TEXT NOT NULL,
      horarios TEXT,
      sede TEXT,
      FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
    );
  `;
    // const schema = 'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY INCREMENT, name TEXT NOT NULL, active INTEGER DEFAULT 1); CREATE TABLE Usuario (id INTEGER PRIMARY KEY AUTOINCREMENT,usuario TEXT NOT NULL,contrasenna TEXT NOT NULL); CREATE TABLE Datos (id INTEGER PRIMARY KEY AUTOINCREMENT,usuario_id INTEGER NOT NULL,nombres TEXT NOT NULL,apellidos TEXT NOT NULL,carrera TEXT NOT NULL,horarios TEXT,sede TEXT,FOREIGN KEY (usuario_id) REFERENCES (id));';

      await this.db.execute(schema);
      return true;
    }

    async cargaUsuarios(){
      const users = await this.db.query('SELECT * FROM users;');
      this.users.set(users.values || []);
    }

    getUsers(){
      return this.users;
    }

    //CRUD Agregar usuario
    async AgregarUsuario(name: string) {
      const query = `INSERT INTO users (name) VALUES('${name}')`;
      const result = await this.db.query(query);
    
      this.cargaUsuarios();

      return result;
    }

    //CRUD ingresar Datos
    async IngresarDatos(id: number, usuario_id: number, nombres: string, apellidos: string, carrera: string, horarios: string, sede: string){
      const query = `INSERT INTO Datos (id, usuario_id, nombres, apellidos, carrera, horarios, sede) VALUES('${id}','${usuario_id}','${nombres}','${apellidos}','${carrera}','${horarios}','${sede}')`;
      const resultado = this.db.execute(query);

      return resultado;
    }



    //CRUD Eliminar usuario
    async EliminarUsuario(id: number){
      const query = `DELETE FROM user WHERE id = '${id}'`;
      const result = await this.db.query(query);

      this.cargaUsuarios();

      return result;
    }

    //CRUD Modificar Nombre Usuario
    async ModificarUsuario(name: string, id: number){
      const query = `UPDATE name SET = '${name}' WHERE id = '${id}'`;
      const result = await this.db.query(query);

      this.cargaUsuarios();

      return result;
    }



}
