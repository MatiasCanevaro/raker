const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const existingUrl = await prisma.url.findFirst();

  if (existingUrl) {
    console.log("URLs have already been seeded.");
    return;
  }

  await prisma.url.create({
    data: {
      short_url: "example",
      long_url: "https://exampleasdasdasdasd.com",
    },
  });

  console.log("Table 'url' is now populated.");
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
