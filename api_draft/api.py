import sys
from flask import Flask
from flask import Response
from flask import request, url_for
import json
import sqlite3
from datetime import datetime
# import make_disaster_db.py



app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"


# Ideas:
# We REST endpoints for basic objects:
# needs
# persons
# resources
needs = [{
        'person'  : 'bob',
        'number' : 2
    },
         {
             'person'  : 'alice',
             'number' : 3
         }];

@app.route("/initdb",methods=[ 'POST'])
def test_sqllite3():
    conn = sqlite3.connect('disaster_db.sqlite')
    cur = conn.cursor()

    cur.execute('''
    DROP TABLE IF EXISTS 'Parties'
    ''')

    cur.execute('''
    CREATE TABLE `Parties` (
    `id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    `name`	TEXT,
    `time_logged`	TEXT,
    `location`	TEXT,
    `status`	TEXT,
    `ppl_count`	INTEGER,
    `is_vulnerable`	INTEGER,
    `vuln_description`	TEXT)
    ''')

    cur.execute('''
    DROP TABLE IF EXISTS 'Needs'
    ''')

    cur.execute('''
    CREATE TABLE `Needs` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    `time_logged`	TEXT,
    `person_id`	INTEGER,
    `need_description`	TEXT,
    `is_injured`	INTEGER,
    `injury_description`	TEXT
    `priority`	INTEGER,
    `need_type`	INTEGER)
    ''')

    cur.execute('''
    DROP TABLE IF EXISTS 'Resources'
    ''')

    cur.execute('''
    CREATE TABLE `Resources` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    `owner`	TEXT,
    `time_logged`	TEXT,
    `location`	TEXT,
    `description`	TEXT)
    ''')

    conn.commit()
    cur.close()
    return "Yeppers, the db is inited."
    
@app.route("/needs")
def list_all_ids():
    conn = sqlite3.connect('example.db')
    js = json.dumps(needs)
    resp = Response(js, status=200, mimetype='application/json')
    return resp


@app.route("/needs/<int:need_id>",methods=[ 'GET'])
def get_need_by_id(need_id):
    individual_need = [x for x in needs if x['number'] == need_id][0]
    js = json.dumps(individual_need)
    resp = Response(js, status=200, mimetype='application/json')
    return resp

# This should take the json, turn it into a python object,
# then add it to the needs object in memory
@app.route("/needs/<int:need_id>",methods=[ 'POST'])
def create_need_by_id(need_id):
    return 'Create Need %d' % need_id 

@app.route("/persons")
def list_all_person_ids():
    conn = sqlite3.connect('disaster_db.sqlite')
    cur = conn.cursor()
    data = [];
    for row in conn.execute('SELECT * FROM Parties'):
        data.append(row);
    js = json.dumps(data)
    cur.close()
    resp = Response(js, status=200, mimetype='application/json')
    return resp


@app.route("/persons/<int:person_id>",methods=[ 'GET'])
def get_person_by_id(person_id):
    conn = sqlite3.connect('disaster_db.sqlite')
    cur = conn.cursor()
    data = [];
    for row in conn.execute('SELECT * FROM Parties where id=?',(person_id,)):
        data.append(row);
    js = json.dumps(data)
    cur.close()
    resp = Response(js, status=200, mimetype='application/json')
    return resp

# This should take the json, turn it into a python object,
# then add it to the needs object in memory
@app.route("/persons",methods=[ 'POST'])
def create_person_by_id():
    print >> sys.stderr,'GOT IN\n'
    # Sample data
    print >> sys.stderr, request
    person = request.get_json()['person']
    print >> sys.stderr,'AFTER PERSON'        
    print >> sys.stderr,person

    location = 'Onion Creek'
    status = 'OK'
    ppl_count = 4
    is_vulnerable = 0
    
    start_time = datetime.now()
    start_timestamp = str(start_time)

    # connect to database
    conn = sqlite3.connect('disaster_db.sqlite')
    cur = conn.cursor()

    # create party & fetch party # id
    cur.execute('INSERT INTO Parties (name) \
    VALUES ( ? )', (person, ))
    cur.execute('SELECT id FROM Parties \
    WHERE name = ? ', (person, ))
    gotid = cur.fetchone()[0]
    cur.execute('UPDATE Parties SET time_logged = ? WHERE id = ?',\
                (start_timestamp,gotid) )
    cur.execute('UPDATE Parties SET location = ? WHERE id = ?',\
                (location,gotid) )
    cur.execute('UPDATE Parties SET status = ? WHERE id = ?',\
                (status,gotid) )
    cur.execute('UPDATE Parties SET ppl_count = ? WHERE id = ?',\
                (ppl_count,gotid) )
    cur.execute('UPDATE Parties SET is_vulnerable = ? WHERE id = ?',\
                (is_vulnerable,gotid) )
    conn.commit()
    cur.close()
    return 'Created Person %d'

