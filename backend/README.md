# Backend (Flask API)

This folder contains the backend logic for your portfolio project, powered by [Flask](https://flask.palletsprojects.com/).

## Structure

- `app.py` — Main Flask application file.
- `test_app.py` — Example/test script for the app.
- `tests/` — Unit tests for backend functionality.


## Requirements

- Python 3.12+
- Flask
- Flask-CORS (if you need CORS for frontend integration)
- Other dependencies (see below)

### Quickstart

#### 1. Create a virtual environment (recommended)

```sh
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

#### 2. Install dependencies

```sh
pip install -r requirements.txt
```
If you don’t have a `requirements.txt`, install manually:
```sh
pip install flask flask-cors
```

#### 3. Run the server

```sh
python app.py
```
By default, the server will start on `http://127.0.0.1:5000/`.

## API Endpoints

Add a description of your API endpoints here, for example:
- `/` — Home or status endpoint
- `/api/projects` — Returns portfolio projects

*(See `app.py` for details.)*

## Testing

Tests are located in the `tests/` directory.

To run all tests:
```sh
pytest
```

## Environment Variables

If your app needs any environment variables, list them here, e.g.:
- `FLASK_ENV=development`
- `SECRET_KEY=...`

## Notes

- This backend is designed to work with your Vue.js frontend (see `/frontend`).
- For deployment, consider [Gunicorn](https://gunicorn.org/) or [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) for production.

## Contributing

Feel free to open issues or submit pull requests with improvements or bug fixes!

---

**Author:** [emma-ninova](https://github.com/emma-ninova)

