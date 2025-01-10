const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkIfTableExists() {
  try {
    // Execute a query to check if the `url` table exists in the database and cast the result to a string
    const result = await prisma.$queryRaw`SELECT to_regclass('public.url')::text`;

    if (!result || !result[0] || !result[0].to_regclass) {
      console.log("The `url` table does not exist. Creating the table...");

      // Create the table manually if it does not exist
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
  await checkIfTableExists();
  await prisma.$disconnect();
}

main()
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
