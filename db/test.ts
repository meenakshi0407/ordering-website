import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  console.log('Prisma Client initialized successfully!');
  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    //
  });