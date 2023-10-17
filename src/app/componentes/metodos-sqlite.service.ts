import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';


const DB_USERS = 'myuserdb';

export interface User {
  id: number;
  name: string;
  active: number;
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

    const schema = 'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY INCREMENT, name TEXT NOT NULL, active INTEGER DEFAULT 1)';

      await this.db.execute(schema);
      this.cargaUsuarios();
      return true;
    }

    async cargaUsuarios(){
      const users = await this.db.query('SELECT * FROM users;');
      this.users.set(users.values || []);
    }

    getUsers(){
      return this.users();
    }

    async AgregarUsuario(name: string) {
      const query = 'INSERT INTO users (name) VALUES(mateo)';
      const result = await this.db.query(query);
    
      this.cargaUsuarios();

      return result;
    }

}
