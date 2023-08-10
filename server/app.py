from flask import Flask, request, jsonify
from flask_cors import CORS
from services.address_book import AddressBookService
import time

app = Flask(__name__)
CORS(app)
service = AddressBookService()

# Add a new contact
@app.route('/contacts', methods=['POST'])
def add_contact():
  data = request.get_json()
  contact = service.add(data)

  return jsonify(contact), 201

# Get the list of existing contacts
@app.route('/contacts', methods=['GET'])
def get_contacts():
  contact_list = service.get_all()
  # time.sleep(2)
  return jsonify(contact_list)

# Get the details of a specific contact by id
@app.route('/contacts/<int:id>', methods=['GET'])
def get_contact_details(id):
  contact = service.get_by_id(id)
  
  if contact:
    return jsonify(contact)
  else:
    return jsonify({"message": "Contact not found"}), 404

# Delete a specific contact by id
@app.route('/contacts/<int:id>', methods=['DELETE'])
def delete_contact(id):
    is_deleted = service.delete(id)
    
    if is_deleted:
      return jsonify({"message": f"Contact with id {id} deleted successfully"}), 200
    else:
      return jsonify({"message": "Contact not found"}), 404
    
if __name__ == '__main__':
    app.run(host='localhost', port=3000)