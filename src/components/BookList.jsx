import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import Book from "./Book";

const BookList = ({ books, changeBook, bookSelected }) => {
  const hasFetchError = useSelector(state => state.books.hasError);

  return (
    <div className="mb-3">
      {hasFetchError && <Alert variant="danger">Something went wrong with your fetch</Alert>}
      {books.map(book => (
        <Book key={book.id} book={book} changeBook={changeBook} bookSelected={bookSelected} />
      ))}
    </div>
  );
};

export default BookList;
