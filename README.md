# React Books Library

A React-based book management application that allows users to organize their reading list into three customizable shelves. Built with TypeScript, React Router, and integrated with the Udacity Books API.

## Features

### 📚 Library Page (Main Page)
- **Three Book Shelves**: Organize books into three categories:
  - Currently Reading
  - Want to Read
  - Read
- **Book Display**: Each book shows its cover image, title, and authors
- **Shelf Management**: Move books between shelves using dropdown controls
- **Persistent State**: Book shelf assignments are saved and persist across browser refreshes
- **Navigation**: Quick access to search page via "Add a book" button

### 🔍 Search Page
- **Real-time Search**: Search for books by title, author, or ISBN
- **Debounced Input**: Optimized search with 400ms debounce delay
- **Shelf Assignment**: Assign search results directly to shelves (Currently Reading, Want to Read, or Read)
- **Smart Book Matching**: Search results automatically reflect existing shelf assignments
- **Error Handling**: Displays appropriate messages for empty queries and no results

### 📖 Details Page
- **Book Information**: View detailed information about any book including:
  - Title
  - Description
  - Page Count
  - Publisher
  - Published Date

### 🎨 Additional Features
- **React Router**: Client-side routing with lazy loading for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Modern, clean UI with CSS styling
- **404 Page**: Custom not found page for invalid routes

## Technology Stack

- **React 18.2.0**: UI library
- **TypeScript 4.7.4**: Type-safe JavaScript
- **React Router DOM 6.3.0**: Client-side routing
- **Lodash Debounce**: Search input optimization
- **Udacity Books API**: Backend API for book data

## Project Structure

```
src/
├── App.tsx                 # Main app component with routing
├── BooksAPI.ts            # API integration layer
├── models.ts              # TypeScript interfaces
├── components/
│   ├── book/             # Individual book component
│   └── bookShelf/        # Reusable bookshelf component
└── Pages/
    ├── library/          # Main library page
    ├── searchPage/       # Search functionality
    ├── details/          # Book details page
    └── notFound/         # 404 error page
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd React-BooksLibrary
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (irreversible)

## API Integration

The application uses the Udacity Books API:
- **Endpoint**: `https://reactnd-books-api.udacity.com`
- **Authentication**: Token-based authentication stored in localStorage
- **Operations**:
  - `getAll()`: Fetch all books with their shelf assignments
  - `search(query, maxResults)`: Search for books
  - `update(book, shelf)`: Update a book's shelf assignment
  - `get(bookId)`: Fetch detailed information about a specific book

## Evidence

Screenshots and evidence of the application's functionality can be found in the `evidence/` folder, including:
- Main page with book shelves
- Search page with results
- Book details page
- Various interaction states

## License

This project is private and for educational purposes.
