  const books = [
    {
    title: 'The Awakening',
    author: 'Kate Chopin',
    },
    {
    title: 'City of Glass',
    author: 'Paul Auster',
    },
];

const owls = [
    {
        name: "Alexis",
        college: "Jones"
    },
    {
        name: "Gabby",
        college: "Brown"
    }
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
      books: () => books,
      owls: () => owls
    },
  };