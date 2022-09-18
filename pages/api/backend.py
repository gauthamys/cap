from flask import Flask, request
# PORT 3080

app = Flask(__name__)

# def ask_model(input_mwp):
#     input_mwp = 

@app.route('/word-problem', methods=['GET'])
def hello_world():
    return {"msg":["HELLO WORLD!", "BYE WORLD"]}

if __name__ == '__main__':
    app.run(port=3080, debug=True)