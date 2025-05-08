import sys  # ✅ Ensure this is imported
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return {"message": "Welcome to My Portfolio"}

@app.route('/projects')
def projects():
    return [
        {"id": 1, "name": "Portfolio Website", "description": "A personal website showcasing my work.", "image": "https://via.placeholder.com/150", "link": "https://myportfolio.com"},
        {"id": 2, "name": "E-commerce App", "description": "An online store built with Flask and Vue.", "image": "https://via.placeholder.com/150", "link": "https://myecommerce.com"},
        {"id": 3, "name": "Task Manager", "description": "A productivity app to manage tasks.", "image": "https://via.placeholder.com/150", "link": "https://mytasks.com"}
    ]

@app.route('/contact', methods=['POST'])
def contact():
    print("✅ Received a request at /contact", flush=True)  # ✅ Print when the route is hit
    print("Request method:", request.method, flush=True)  # ✅ Check if it's actually POST

    # Try to extract JSON data safely
    try:
        data = request.get_json()  # ✅ Get JSON data safely
        print(f"New message from {data['name']} ({data['email']}): {data['message']}", flush=True)
        return {"message": "Message received!"}
    except Exception as e:
        print("❌ Error processing request:", str(e), flush=True)
        return {"error": "Invalid data format"}, 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
