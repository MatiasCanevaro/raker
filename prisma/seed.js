const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const existingCategory = await prisma.category.findFirst();
  if (existingCategory) {
    console.log("Categories and items have already been seeded.");
    return;
  }

  await prisma.category.createMany({
    data: [
      { name: "Electronics" },
      { name: "Clothing" },
      { name: "Books" },
      { name: "Furniture" },
      { name: "Toys" },
    ],
    skipDuplicates: true,
  });

  const itemsData = [
    { name: "Laptop", category: "Electronics" },
    { name: "Smartphone", category: "Electronics" },
    { name: "Tablet", category: "Electronics" },
    { name: "Smartwatch", category: "Electronics" },
    { name: "Headphones", category: "Electronics" },
    { name: "T-Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Jacket", category: "Clothing" },
    { name: "Shoes", category: "Clothing" },
    { name: "Socks", category: "Clothing" },
    { name: "Novel", category: "Books" },
    { name: "Science Book", category: "Books" },
    { name: "History Book", category: "Books" },
    { name: "Art Book", category: "Books" },
    { name: "Cookbook", category: "Books" },
    { name: "Chair", category: "Furniture" },
    { name: "Table", category: "Furniture" },
    { name: "Couch", category: "Furniture" },
    { name: "Desk", category: "Furniture" },
    { name: "Bookshelf", category: "Furniture" },
    { name: "Action Figure", category: "Toys" },
    { name: "Doll", category: "Toys" },
    { name: "Puzzle", category: "Toys" },
    { name: "Board Game", category: "Toys" },
    { name: "RC Car", category: "Toys" },
  ];

  for (const item of itemsData) {
    const category = await prisma.category.findFirst({
      where: { name: item.category },
    });

    if (category) {
      await prisma.item.create({
        data: {
          name: item.name,
          category_id: category.id,
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
