from flask import Flask, request

app = Flask(__name__)

@app.route('/word-problem', methods=['GET'])
def hello_world():
    return {"msg":["HELLO WORLD!", "BYE WORLD"]}

if __name__ == '__main__':
    app.run(debug=True)