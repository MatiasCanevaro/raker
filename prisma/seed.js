const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTableURL() {
  try {
    const result = await prisma.$queryRaw`SELECT to_regclass('public.url')`;
    if (!result[0].to_regclass) {
      console.log("The `url` table does not exist. Creating the table...");

      await prisma.$executeRaw`
        CREATE TABLE public.url (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          createdAt TIMESTAMPTZ DEFAULT now(),
          updatedAt TIMESTAMPTZ DEFAULT now(),
          short_url VARCHAR(255),
          long_url VARCHAR(255)
        )
      `;
      console.log("The `url` table has been created.");
    } else {
      console.log("The `url` table already exists.");
    }
  } catch (error) {
    console.error("Error while checking the existence of the table:", error);
  }
}

async function main() {
  await createTableURL();
  await prisma.$disconnect();
}

main()
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
