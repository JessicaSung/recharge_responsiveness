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
needs = [{
        'person'  : 'bob',
        'number' : 2
    },
         {
             'person'  : 'alice',
             'number' : 3
         }];

    
@app.route("/needs")
def list_all_ids():
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
 
