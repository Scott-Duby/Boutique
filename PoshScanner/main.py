from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.scrape_listings import scrape_poshmark_with_selenium
from flask_compress import Compress
import schedule

app = Flask(__name__)
CORS(app)
Compress(app)

app.config['COMPRESS_MIN_SIZE'] = 1000  # Compress responses larger than 1000 bytes
app.config['COMPRESS_ALGORITHM'] = 'gzip'  # Use gzip compression

@app.route('/')
def home():
    return jsonify(message="Hello World") # <- TODO: Express server sends a request here. Response should be 200 or server will throw a warning

@app.route('/scrape/<username>', methods=['GET'])
def scrape(username):
    getOnlyUnsold = request.args.get('unsoldOnly', 'false').lower() == 'true'

    try:
        data = scrape_poshmark_with_selenium(username, getOnlyUnsold)
        return jsonify({"success": True, "listings": data})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500  

@app.route("/scrape/<username>/metrics", methods=["GET"])
def scrape_metrics(username):
    return

def main(): 
    app.run()

if __name__ == '__main__':
    main()

