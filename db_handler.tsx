import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'plantDex';

enablePromise(true);

export type Plant = {
  plantid: number;
  img_uri: string;
  health: number;
  name: String;
};

export const getDBConnection = async () => {
  return openDatabase({name: 'plant-dex.db', location: 'default'})
};


export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
      value TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export const getPlants = async (db: SQLiteDatabase): Promise<Plant[]> => {
  try {
    const plants: Plant[] = [];
    const results = await db.executeSql(`SELECT plantid as plantid,img_uri,health,name FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        plants.push(result.rows.item(index))
      }
    });
    return plants;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get plants');
  }
};

export const savePlants = async (db: SQLiteDatabase, plants: Plant[]) => {
  const insertQuery = `INSERT OR REPLACE INTO ${tableName}(plantid, img_uri, health, name) values` + plants.map(i => `(${i.id}, '${i.value}')`).join(',');
  return db.executeSql(insertQuery);
};

export const deletePlant = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE FROM ${tableName} where plantid=${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
};
