from . import mysql
from flask import jsonify

def register_routes(app):
    @app.route('/')
    def index():
        return 'Hello, World!'

    @app.route('/donuts', methods=['GET'])
    def donuts():
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM donuts")
        rows = cursor.fetchall()
        cursor.close()

        return jsonify(donuts=rows)
