import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cat_profile.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS patologias (
            id INTEGER PRIMARY KEY NOT NULL,
            patologia TEXT NOT NULL
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        );
      });
    });
  
    return promise;
  }
  
  export const insertPatologia = (
    patologia,
  ) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO patologias (patologia)
            VALUES (?)`,
          [patologia],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }
  
  export const fetchPatologias = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM patologias`,
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }

  export const deletePatologia = ( id ) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `DELETE FROM patologias WHERE id = ${id}`,
          (_, result) => resolve(result),
          (_, error) => reject(error),
        )
      })
    })
  }