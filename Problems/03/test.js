const rawData = [
  { id: 1, title: 'Home', parentId: 0 },
  { id: 2, title: 'Products', parentId: 0 },
  { id: 3, title: 'Laptops', parentId: 2 },
  { id: 4, title: 'Gaming Laptops', parentId: 3 },
  { id: 5, title: 'Business Laptops', parentId: 3 },
  { id: 6, title: 'Phones', parentId: 2 },
  { id: 7, title: 'Android', parentId: 6 },
  { id: 8, title: 'iPhone', parentId: 6 },
  { id: 9, title: 'About', parentId: 0 },
  { id: 10, title: 'Support', parentId: 0 },
  { id: 11, title: 'Contact Us', parentId: 10 },
  { id: 12, title: 'FAQ', parentId: 10 },
  { id: 13, title: 'Shipping', parentId: 12 },
  { id: 14, title: 'Returns', parentId: 12 }
]

const buildTree=(data, parentId = 0) => {
  return data
    .filter(item => item.parentId === parentId)
    .map(item => {
      const children = buildTree(data, item.id);
      return children.length > 0
        ? { title: item.title, children }
        : { title: item.title };
    });
}

const nestedData = buildTree(rawData);
console.log(nestedData)