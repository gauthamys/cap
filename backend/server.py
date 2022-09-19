from flask import Flask, request
from flask_cors import cross_origin, CORS

# Initializing flask app
app = Flask(__name__)

cors = CORS(app)

# Route for seeing a data
@app.route('/mwp', methods = ['GET'])
@cross_origin()
def getEquation():
    # Returning an api for showing in  reactjs
    data = "hello world"
    return {'data': data}
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)