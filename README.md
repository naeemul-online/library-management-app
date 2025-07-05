# Library Management API

This is a RESTful API for managing books in a library, built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**. It includes features like borrowing logic, book inventory management, and summary reporting using MongoDB aggregation.


---

## Live Link
https://library-management-app-delta.vercel.app/

---

## Features

- Create, read, update, and delete books
- Borrow books with real-time inventory tracking
- Summary of total borrowed books using aggregation pipeline
- Schema validation using Mongoose
- Centralized error handling for clean API responses
- Use of static methods and middleware for business logic

---

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Aggregation Pipeline
- Mongoose middleware and statics

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/library-management-api.git
cd library-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your MongoDB URI

Edit the `server.ts` file or use environment variables:

```typescript
const uri = "your-mongodb-uri";
```

### 4. Run the development server

```bash
npm run dev
```

---

## API Endpoints

### Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/books` | Add a new book |
| GET | `/api/books` | Get all books |
| GET | `/api/books/:bookId` | Get book by ID |
| PUT | `/api/books/:bookId` | Update book info |
| DELETE | `/api/books/:bookId` | Delete a book |

Supports filtering, sorting, and limiting results:

**Example:**
```
GET /api/books?filter=FICTION&sortBy=createdAt&sort=desc&limit=5
```

### Borrow

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/borrow` | Borrow a book |
| GET | `/api/borrow` | Summary of borrowed books |

---

## Sample Request

### Create a Book

```http
POST /api/books
```

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
```

### Sample Error Response

```json
{
  "success": false,
  "message": "Validation failed",
  "error": {
    "copies": "Copies must be a positive number"
  }
}
```

---

## Project Structure

```
src/
├── app/
│   ├── controllers/
│   ├── interfaces/
│   ├── models/
│   ├── routes/
├── errors/
├── app.ts
├── server.ts
```

---

## Notes

- Includes use of Mongoose static methods for business logic
- Mongoose middleware (pre, post) used for field formatting and logging
- Aggregation pipeline is used for generating summary reports
- Global error handler ensures consistent error responses across the app

---

## Author

**Naeemul Islam**  
Student, Web Developer & Backend Enthusiast

[LinkedIn](https://linkedin.com/in/your-profile) | [Portfolio](https://your-portfolio.com)

---

## License

This project is for educational purposes and open for personal or academic use.
