import { PrismaClient } from '@prisma/client';
import { sampleData } from './sample-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.order.createMany({ data: sampleData.orders });

  console.log('Seeding complete!');
}

main();
 