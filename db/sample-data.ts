// prisma/sample-data.ts

export const sampleData = {
    products: [
      {
        id: 1,
        name: 'Tomatoes',
        price: 25,

      },
      {
        id: 2,
        name: 'Potatoes',
        price: 18,
      },
      {
        id: 3,
        name: 'Carrots',
        price: 30,
      },
      {
        id: 4,
        name: 'Spinach',
        price: 12,
        
      },
      {
        id: 5,
        name: 'Cucumbers',
        price: 22,
        
      },
      {
        id: 6,
        name: 'Bell Peppers',
        price: 35,
        
      },
      {
        id: 7,
        name: 'Onions',
        price: 15,
        
      }
    ],
  
    orders: [
      {
        id: 1,
        item_name: 'Tomatoes',
        quantity: 10,
        buyer_name: 'Meena',
        contact: '9876543210',
        address: 'Green Street, Pune',
        status: 'Pending'
      },
      {
        id: 2,
        item_name: 'Potatoes',
        quantity: 25,
        buyer_name: 'Raj',
        contact: '9123456780',
        address: 'Baner Road, Pune',
        status: 'In Progress'
      },
      {
        id: 3,
        item_name: 'Spinach',
        quantity: 5,
        buyer_name: 'Asha',
        contact: '9001122334',
        address: 'Hadapsar, Pune',
        status: 'Delivered'
      }
    ]
  };
  