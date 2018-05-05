from flask import Flask
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
    return "List all Needs!"


@app.route("/needs/<int:need_id>",methods=[ 'GET'])
def get_need_by_id():
     return 'Get Need %d' % need_id 

@app.route("/needs/<int:need_id>",methods=[ 'POST'])
def create_need_by_id():
     return 'Create Need %d' % need_id 
 
