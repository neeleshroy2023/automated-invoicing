# Online Invoice Generator

An online invoice generator tool designed for freelancers and small businesses. This application allows users to create, manage, and download invoices in PDF format. It leverages Puppeteer for generating PDFs from HTML content.

## Features

- User registration and authentication
- Create and manage invoices
- Download invoices as PDF files
- Basic PDF styling and layout

## Technologies

- **Frontend**: React (not included in this backend repository)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **PDF Generation**: Puppeteer

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- MongoDB

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/invoice-generator-backend.git
   cd invoice-generator-backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the Application**

   Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST /api/auth/register**

  Register a new user.

  **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

- **POST /api/auth/login**

  Authenticate a user and get a JWT token.

  **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

  **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### Invoices

- **POST /api/invoices**

  Create a new invoice.

  **Request Headers:**
  ```http
  Authorization: Bearer your_jwt_token
  ```

  **Request Body:**
  ```json
  {
    "items": [
      {
        "description": "Service A",
        "quantity": 1,
        "price": 100
      },
      {
        "description": "Service B",
        "quantity": 2,
        "price": 50
      }
    ],
    "total": 200
  }
  ```

- **GET /api/invoices**

  Get a list of invoices for the authenticated user.

  **Request Headers:**
  ```http
  Authorization: Bearer your_jwt_token
  ```

- **GET /api/invoices/:invoiceId/pdf**

  Generate and download a PDF for a specific invoice.

  **Request Headers:**
  ```http
  Authorization: Bearer your_jwt_token
  ```

## Development

### Running Tests

Add your test cases and run them using:

```bash
npm test
```

### Linting

Ensure code quality with:

```bash
npm run lint
```

## Contributing

Feel free to fork the repository and submit pull requests. Please ensure that your contributions adhere to the project's coding standards and pass all tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact [your.email@example.com](mailto:your.email@example.com).

### Customization

Replace placeholders like `yourusername`, `your_mongodb_connection_string`, `your_jwt_secret_key`, and `your.email@example.com` with actual values relevant to your project. You may also want to expand the README with additional sections or instructions based on the specific needs of your project.