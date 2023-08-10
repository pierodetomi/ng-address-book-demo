import sqlite3
from config.config import Config

if __name__ == '__main__':
  conn = sqlite3.connect(Config.database_path)
  cursor = conn.cursor()
  cursor.execute('''
      CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT NOT NULL
      )
  ''')
  conn.commit()
  conn.close()