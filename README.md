

### Library Management API
This is a RESTful API designed for managing books within a library system. It's built with Node.js, Express, TypeScript, and MongoDB (Mongoose), offering robust features for inventory management, borrowing logic, and comprehensive reporting.

## ✨ Features
Book Management: Perform full CRUD (Create, Read, Update, Delete) operations on books.
Borrowing Logic: Implement real-time inventory tracking for borrowing books.
Summary Reporting: Generate summaries of borrowed books using MongoDB aggregation pipelines.
Schema Validation: Ensure data integrity with Mongoose schema validation.
Centralized Error Handling: Provide clean and consistent API responses through centralized error handling.
Modular Business Logic: Utilize Mongoose static methods and middleware for organized business logic.
## 💻 Technologies Used
Node.js
Express.js
TypeScript
MongoDB (with Mongoose)
MongoDB Aggregation Pipeline
Mongoose Middleware and Statics
🚀 Getting Started
Follow these steps to get your project up and running:

# 1. Clone the repository
Bash

git clone https://github.com/yourusername/library-management-api.git
cd library-management-api
# 2. Install dependencies
Bash

npm install
# 3. Set up your MongoDB URI
You can either edit the server.ts file or use environment variables to set your MongoDB connection string.

TypeScript

const uri = "your-mongodb-uri"; // Replace with your MongoDB connection string
# 4. Run the development server
Bash

npm run dev

🔗 API Endpoints
Books
Method	Endpoint	Description
POST	/api/books	Add a new book
GET	/api/books	Get all books
GET	/api/books/:bookId	Get book by ID
PUT	/api/books/:bookId	Update book information
DELETE	/api/books/:bookId	Delete a book

Export to Sheets
Supports filtering, sorting, and limiting results:

Example:

GET /api/books?filter=FICTION&sortBy=createdAt&sort=desc&limit=5
Borrow
Method	Endpoint	Description
POST	/api/borrow	Borrow a book
GET	/api/borrow	Summary of borrowed books

Export to Sheets
💡 Sample Requests
Create a Book
Request:

HTTP

POST /api/books
Content-Type: application/json

{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
Sample Error Response
JSON

{
  "success": false,
  "message": "Validation failed",
  "error": {
    "copies": "Copies must be a positive number"
  }
}
📁 Project Structure
src/
├── app/
│   ├── controllers/
│   ├── interfaces/
│   ├── models/
│   └── routes/
├── errors/
├── app.ts
└── server.ts

📝 Notes
This project leverages Mongoose static methods for implementing business logic directly on schemas.
Mongoose middleware (pre, post) is used for tasks like field formatting and logging.
An aggregation pipeline is implemented for generating insightful summary reports.
A global error handler ensures consistent and predictable error responses across the API.
👤 Author
Naeemul Islam
Student, Web Developer & Backend Enthusiast

LinkedIn (Replace with actual LinkedIn profile link)
Portfolio (Replace with actual portfolio link)
⚖️ License
This project is intended for educational purposes and is open for personal or academic use.