from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import func
import sqlite3
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///BobCat.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Person(db.Model):
    p_status = db.Column(db.String(100), nullable=True)
    p_email = db.Column(db.String(100), nullable=False)
    p_user_id = db.Column(db.String(100), primary_key=True)
    p_name = db.Column(db.String(100), nullable=False)
    p_password = db.Column(db.String(100), nullable=False)

class Friends(db.Model):
    f_user_id = db.Column(db.String(100), primary_key=True)
    f_friend_id = db.Column(db.String(100), primary_key=True)

class Comments(db.Model):
    p_comment_id = db.Column(db.String(100), primary_key=True)
    p_user_id = db.Column(db.String(100), nullable=False)
    p_post_id = db.Column(db.String(100), nullable = False)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400
    user = Person.query.filter_by(p_user_id=username, p_password=password).first()
    if user:
        return jsonify({"message": "Login successful", "userID": user.p_user_id}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
