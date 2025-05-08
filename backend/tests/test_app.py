import pytest
from app import app

@pytest.fixture
def client():
    app.testing = True
    with app.test_client() as client:
        yield client

def test_home(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json == {"message": "Welcome to My Portfolio"}

def test_projects(client):
    response = client.get("/projects")
    assert response.status_code == 200
    assert isinstance(response.json, list)
