import * as SQLite from "expo-sqlite";

export const db = await SQLite.openDatabaseAsync("flashForward");

export const createTable = async () => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      file_path TEXT NOT NULL,
      unlock_date TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
};
