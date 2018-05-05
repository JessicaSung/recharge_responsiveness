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

# create need with timestamp
# cur.execute('''INSERT INTO Needs (colname) \
#             VALUES ( ?, ?, ?, ? )''',\
#             ( start_timestamp) )
# cur.execute('SELECT need_id FROM Needs \
#             WHERE Player_start_timestamp = ? ', (start_timestamp, ))
