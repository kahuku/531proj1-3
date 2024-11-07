class ProdConfig:
    MYSQL_HOST = 'myrdsinstance.cjuumwk6mcok.us-east-2.rds.amazonaws.com'
    MYSQL_USER = 'admin'
    MYSQL_PASSWORD = 'donutsaregood'
    MYSQL_DB = '531projectdb'
    MYSQL_PORT = 3306
    MYSQL_CURSORCLASS = 'DictCursor'

def get_config():
    return ProdConfig()