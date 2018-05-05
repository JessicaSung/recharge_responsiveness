from datetime import datetime
import sqlite3

# Sample data
person = 'Maria Garcia'
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
            VALUES ( ?, )',
            (person, ))
cur.execute('SELECT id FROM Parties \
            WHERE name = ? ', (person, ))
gotid = cur.fetchone()
print(gotid)

# create status: OK or HELP

# create need with timestamp
# cur.execute('''INSERT INTO Needs (colname) \
#             VALUES ( ?, ?, ?, ? )''',\
#             ( start_timestamp) )
# cur.execute('SELECT need_id FROM Needs \
#             WHERE Player_start_timestamp = ? ', (start_timestamp, ))
