import sqlite3
from config.config import Config

class AddressBookService:
  def add(self, data):
    name = data['name']
    email = data['email']
    phone = data['phone']

    conn = sqlite3.connect(Config.database_path)
    cursor = conn.cursor()
    cursor.execute('INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)', (name, email, phone))
    conn.commit()
    
    # Fetch the details of the newly created contact
    cursor.execute('SELECT id, name, email, phone FROM contacts WHERE id = ?', (cursor.lastrowid,))
    new_contact = cursor.fetchone()
    conn.close()

    return {
      "id": new_contact[0],
      "name": new_contact[1],
      "email": new_contact[2],
      "phone": new_contact[3]
    }
  
  def get_all(self):
    conn = sqlite3.connect(Config.database_path)
    cursor = conn.cursor()
    cursor.execute('SELECT id, name, email, phone FROM contacts')
    contacts = cursor.fetchall()
    conn.close()

    contact_list = []

    for contact in contacts:
      contact_list.append({
        "id": contact[0],
        "name": contact[1],
        "email": contact[2],
        "phone": contact[3]
      })

    return contact_list
  
  def get_by_id(self, id):
    conn = sqlite3.connect(Config.database_path)
    cursor = conn.cursor()
    cursor.execute('SELECT id, name, email, phone FROM contacts WHERE id = ?', (id,))
    contact = cursor.fetchone()
    conn.close()

    return None if not contact else {
      "id": contact[0],
      "name": contact[1],
      "email": contact[2],
      "phone": contact[3]
    }
  
  def delete(self, id):
    conn = sqlite3.connect(Config.database_path)
    cursor = conn.cursor()

    # Check if the contact exists
    cursor.execute('SELECT id FROM contacts WHERE id = ?', (id,))
    existing_contact = cursor.fetchone()

    if existing_contact:
        cursor.execute('DELETE FROM contacts WHERE id = ?', (id,))
        conn.commit()
        conn.close()
        return True
    else:
        conn.close()
        return False