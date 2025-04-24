# Vue 3 + Vite Project

## Project Overview
This project integrates a **Vue 3** frontend with a **Flask backend**, providing a seamless user experience. It is designed to showcase a portfolio, manage tasks, and handle contact form submissions. Comprehensive testing has been implemented for both the backend and frontend to ensure reliability.

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [Requirements](#requirements)
3. [Setup Instructions](#setup-instructions)
4. [Running the Project](#running-the-project)
5. [API Documentation](#api-documentation)
6. [Testing](#testing)
7. [Contributing](#contributing)
8. [License](#license)

---

## Project Structure

### Backend
```
backend/
├── app.py               # Main backend application
├── test_app.py          # Backend test file
├── .pytest_cache/       # Cache for pytest
├── tests/               # Additional backend tests
└── __pycache__/         # Compiled Python files
```
### Frontend
```
frontend/
├── .gitignore           # Ignored files configuration
├── index.html           # Main HTML file
├── src/                 # Source code for the Vue app
│   ├── App.vue          # Root Vue component
│   ├── components/      # Reusable Vue components
│   ├── views/           # Vue views for pages
│   └── assets/          # Styles and images
├── tests/               # Frontend test files
└── dist/                # Compiled production files
```

## Requirements

- Python 3.10
- Node.js (installed via Anaconda or standalone)
- **Vue CLI** (optional)

## Setup Instructions:

### Backend
1. Set up a Python virtual environment:

```
python -m venv venv
source venv/bin/activate      # macOS/Linux
venv\Scripts\activate         # Windows
```
2. Install required dependencies:

```
pip install -r requirements.txt
```

### Frontend
1. Navigate to the frontend directory:
```
cd frontend
```

2. Install ***Node.js*** dependencies:
```
npm install
```
## Running the Project

### Backend
Start the backend server:
```
python app.py
```

### Frontend
Run the development server:
```
npm run dev
```
The application will be available at http://localhost:3000.

## API Documentation
Base URL

```
http://localhost:5000
```
## Endpoints
### GET /
Description: Returns a welcome message.

Response Example:
```
{
  "message": "Welcome to My Portfolio"
}
```
## GET /projects
Description: Retrieves a list of all projects.

Response Example:

```
[
  {
    "id": 1,
    "name": "Portfolio Website",
    "description": "A personal website showcasing my work.",
    "image": "https://via.placeholder.com/150",
    "link": "https://myportfolio.com"
  },
  {
    "id": 2,
    "name": "E-commerce App",
    "description": "An online store built with Flask and Vue.",
    "image": "https://via.placeholder.com/150",
    "link": "https://myecommerce.com"
  }
]
```
## POST /contact
Description: Accepts contact form submissions.

Request Body Example:

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

Response Example:

```
{
  "message": "Message received!"
}
```

## Testing
Backend Tests
Run Python tests:

```
pytest
```

## Frontend Testing (Vitest)
We use Vitest for unit testing in the frontend.

How to Run Tests
1. Ensure dependencies are installed:
```
npm install
```

2. Run the tests using the following command:
```
npm run test
```

## Test Files
Frontend tests are located in the tests directory:

```
tests/
├── test-projects.spec.js      # Tests for the Projects view
└── unit/
    └── ContactForm.spec.js    # Tests for the ContactForm component
```
Example Test: ***ContactForm.vue***

Below is an example of how we validate the form and handle submissions in the ***ContactForm.vue*** component:

```
describe("ContactForm.vue", () => {
  it("displays success message after form submission", async () => {
    await wrapper.find("[data-test='email']").setValue("john@example.com");
    await wrapper.find("[data-test='message']").setValue("Hello!");
    await wrapper.find("form").trigger("submit.prevent");

    const successMessage = wrapper.find("[data-test='success-message']");
    expect(successMessage.exists()).toBe(true);
  });
});
```
## Contributing
Feel free to contribute to this project. Please submit a pull request or raise an issue if you encounter any bugs or have suggestions.

## License
This project is licensed under MIT License.
