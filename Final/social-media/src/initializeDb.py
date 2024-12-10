from app import db, Person, app

new_person1 = Person(p_email='jason@example.com', p_user_id='jelc', p_name='Jason', p_password='123' )

with app.app_context():
    db.session.add(new_person1)
    db.session.commit()

print('completed')