import sqlite3

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
