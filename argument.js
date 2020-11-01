type Book {
    id: ID
    title: String
    published: Date
    price: String
    author: Author
}type Author {
    id: ID
    firstName: String
    lastName: String
    books: [Book]
}