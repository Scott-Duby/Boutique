from flask import Flask, request, jsonify
from flask_cors import CORS
from scrape import scrape_poshmark_with_selenium

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify(message="Welcome to the API")

@app.route('/scrape/<username>', methods=['GET'])
def scrape(username):
    getOnlyUnsold = request.args.get('unsoldOnly', 'false').lower() == 'true'

    try:
        data = scrape_poshmark_with_selenium(username, getOnlyUnsold)
        return jsonify({"success": True, "listings": data})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500  

if __name__ == '__main__':
    app.run()
