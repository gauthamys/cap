from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS
import pickle

# Initializing flask app
app = Flask(__name__)

cors = CORS(app)

# Load the model
# model = "blahblah"

# Route for seeing a data
@app.route('/mwp', methods = ['POST'])
@cross_origin()
def predict():
    # Get the data from the POST request.
    # data = request.get_json(force=True)
    
    # # Make prediction using model loaded from disk as per the data.
    # prediction = model.predict([[np.array(data['exp'])]])
    
    # # Take the first value of prediction
    # output = prediction[0]
    # return jsonify(output)
    return {"equation": "10y + 6 = 46"}
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)