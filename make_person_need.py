from datetime import datetime

start_time = datetime.now()
start_timestamp = str(start_time)

# create person & fetch person # id
# create status: OK or HELP

# create need with timestamp
cur.execute('''INSERT INTO Needs (colname) \
            VALUES ( ?, ?, ?, ? )''',\
            ( start_timestamp) )
cur.execute('SELECT need_id FROM Needs \
            WHERE Player_start_timestamp = ? ', (start_timestamp, ))
