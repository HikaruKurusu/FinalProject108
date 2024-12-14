from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import uuid

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

class Follows(db.Model):
    f_user_id = db.Column(db.String(100), primary_key=True)
    f_friend_id = db.Column(db.String(100), primary_key=True)

class Comments(db.Model):
    p_comment_id = db.Column(db.String(100), primary_key=True)
    p_user_id = db.Column(db.String(100), nullable=False)
    p_post_id = db.Column(db.String(100), nullable=False)

class Post(db.Model):
    p_post_id = db.Column(db.String(100), nullable=False, primary_key=True)
    p_user_id = db.Column(db.String(100), nullable=False)
    p_content = db.Column(db.String(500), nullable=False)
    p_image = db.Column(db.LargeBinary)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400
    user = Person.query.filter_by(p_email=username, p_password=password).first()
    if user:
        return jsonify({"message": "Login successful", "userID": user.p_user_id}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        file_data = file.read()  # Read file as binary
        new_post = Post(
            p_post_id=str(uuid.uuid4()),  # Generate a unique UUID
            p_user_id='user_1',           # Replace 'user_1' with actual user ID
            p_content='Description of post',  # Replace with actual description
            p_image=file_data
        )
        db.session.add(new_post)
        db.session.commit()

        return jsonify({"message": "File uploaded successfully"}), 201

    return jsonify({"error": "Invalid file type"}), 400

def allowed_file(filename):
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
