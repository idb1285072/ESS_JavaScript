const posts = [
  { id: 1, title: "Intro to JS", author: "Alice", createdAt: "2024-01-01" },
  { id: 2, title: "Async Deep Dive", author: "Bob", createdAt: "2024-01-05" },
  { id: 3, title: "Promises & Await", author: "Eve", createdAt: "2024-01-10" },
  { id: 4, title: "Closures", author: "Dave", createdAt: "2024-01-12" },
  { id: 5, title: "JS Engines", author: "Alice", createdAt: "2024-01-15" },
  { id: 6, title: "Memory Leaks", author: "Bob", createdAt: "2024-01-18" },
  { id: 7, title: "Event Loop", author: "Eve", createdAt: "2024-01-20" },
  { id: 8, title: "Tail Call Opt.", author: "Dave", createdAt: "2024-01-25" },
  { id: 9, title: "Modules in JS", author: "Alice", createdAt: "2024-01-28" },
  { id: 10, title: "JS Tooling", author: "Eve", createdAt: "2024-02-01" },
  { id: 11, title: "Transpilers", author: "Bob", createdAt: "2024-02-04" },
  { id: 12, title: "Hoisting Tricks", author: "Dave", createdAt: "2024-02-07" },
  { id: 13, title: "Prototypes", author: "Alice", createdAt: "2024-02-10" },
  { id: 14, title: "Event Delegation", author: "Bob", createdAt: "2024-02-13" },
  { id: 15, title: "Garbage", author: "Eve", createdAt: "2024-02-17" },
];

const paginate = (data, page = 1, pageSize) => {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  if (page < 1 || page > totalPages) {
    return {
      data: [],
      page,
      pageSize,
      totalPages,
      totalItems,
      hasNext: false,
      hasPrev: false,
    };
  }

  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  return {
    data: data.slice(start, end),
    page,
    pageSize,
    totalPages,
    totalItems,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
};

console.log(paginate(posts, 2, 5));
