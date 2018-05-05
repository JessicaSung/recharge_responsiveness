from flask import Flask
from flask import Response
import json

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"


# Ideas:
# We REST endpoints for basic objects:
# needs
# persons
# resources

@app.route("/needs")
def list_all_ids():
    needs = [{
        'person'  : 'bob',
        'number' : 2
    },
             {
                 'person'  : 'alice',
                 'number' : 3
                 }];
    js = json.dumps(needs)

    resp = Response(js, status=200, mimetype='application/json')
    return resp


@app.route("/needs/<int:need_id>",methods=[ 'GET'])
def get_need_by_id():
     return 'Get Need %d' % need_id 

@app.route("/needs/<int:need_id>",methods=[ 'POST'])
def create_need_by_id():
     return 'Create Need %d' % need_id 
 
