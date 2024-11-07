from flask import Flask
from flask_cors import CORS
from flask_mysqldb import MySQL

from .config import get_config

mysql = MySQL()

def create_app(config_class=None):
    app = Flask(__name__)
    
    if config_class is None:
        config_class = get_config()

    app.config.from_object(config_class)
    
    CORS(app)

    # Initialize the MySQL connection
    mysql.init_app(app)

    with app.app_context():
        from .routes import register_routes
        register_routes(app)

    return app
