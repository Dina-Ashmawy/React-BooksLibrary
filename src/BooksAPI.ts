import { IBook } from "./models";

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_BOOKS_API_URL;
console.log(REACT_APP_API_ENDPOINT)
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (bookId: string) =>
  fetch(`${REACT_APP_API_ENDPOINT}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = () =>
  fetch(`${REACT_APP_API_ENDPOINT}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

export const update = (book: IBook, shelf: string) =>

  fetch(`${REACT_APP_API_ENDPOINT}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json()).then(data => console.log(data));

export const search = (query: string, maxResults: number) =>
  fetch(`${REACT_APP_API_ENDPOINT}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
