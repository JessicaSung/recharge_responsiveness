import sqlite3

conn = sqlite3.connect('disaster_db.sqlite')
cur = conn.cursor()

cur.execute('''
DROP TABLE IF EXISTS 'Persons'
''')

cur.execute('''
CREATE TABLE `Persons` (
`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
`name`	TEXT,
`location`	TEXT,
`age`	TEXT)
''')

cur.execute('''
DROP TABLE IF EXISTS 'Needs'
''')

cur.execute('''
CREATE TABLE `Needs` (
`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
`time_logged`	TEXT,
`person_id`	INTEGER,
`needed`	TEXT,
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
`location`	TEXT,
`description`	TEXT)
''')

conn.commit()
cur.close()
