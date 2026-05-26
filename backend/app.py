from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)

# ⚠️ INSERISCI LE TUE CREDENZIALI REALI DI TIDB CLOUD
HOST = "gateway01.eu-central-1.prod.aws.tidbcloud.com"
PORT = 4000
USER = "25yXT27TJzSPnCJ.root"
PASSWORD = "lYsvBk8vWnsCs6gd"
TIDB_DB = "sys" 

def get_db_connection():
    return pymysql.connect(
        host=TIDB_HOST,
        port=TIDB_PORT,
        user=TIDB_USER,
        password=TIDB_PASSWORD,
        database=TIDB_DB,
        ssl_verify_cert=True,
        cursorclass=pymysql.cursors.DictCursor
    )

@app.route('/api/generi', methods=['GET'])
def get_generi():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Generi")
    generi = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(generi)

@app.route('/api/generi/<int:id_genere>/libri', methods=['GET'])
def get_libri_per_genere(id_genere):
    search_query = request.args.get('search', '')
    conn = get_db_connection()
    cursor = conn.cursor()
    
    if search_query:
        query = """
            SELECT Libri.*, Autori.Nome AS Autore_Nome, Autori.Cognome AS Autore_Cognome 
            FROM Libri 
            LEFT JOIN Autori ON Libri.id_autori_fk = Autori.id_autori
            WHERE Libri.id_generi_fk = %s AND Libri.Titolo LIKE %s
        """
        cursor.execute(query, (id_genere, f'%{search_query}%'))
    else:
        query = """
            SELECT Libri.*, Autori.Nome AS Autore_Nome, Autori.Cognome AS Autore_Cognome 
            FROM Libri 
            LEFT JOIN Autori ON Libri.id_autori_fk = Autori.id_autori
            WHERE Libri.id_generi_fk = %s
        """
        cursor.execute(query, (id_genere,))
        
    libri = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(libri)

@app.route('/api/libri/<int:id_libro>', methods=['GET'])
def get_dettaglio_libro(id_libro):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    query = """
        SELECT Libri.*, Generi.Nome AS Genere_Nome, Autori.Nome AS Autore_Nome, Autori.Cognome AS Autore_Cognome
        FROM Libri
        LEFT JOIN Generi ON Libri.id_generi_fk = Generi.id_generi
        LEFT JOIN Autori ON Libri.id_autori_fk = Autori.id_autori
        WHERE Libri.id_libri = %s
    """
    cursor.execute(query, (id_libro,))
    libro = cursor.fetchone()
    cursor.close()
    conn.close()
    
    if libro is None:
        return jsonify({"errore": "Libro non trovato"}), 404
        
    return jsonify(libro)

if __name__ == '__main__':
    print("--- STO ACCENDENDO IL SERVER FLASK ---") # 👈 Mettiamo questo per test!
    app.run(host='0.0.0.0', port=5000, debug=True)