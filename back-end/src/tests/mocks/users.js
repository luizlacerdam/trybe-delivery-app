/* eslint-disable max-len */
const USERNAME = 'Fulana Pereira';
const EMAIL = 'fulana@deliveryapp.com';

const user = { 
    id: 2,
    name: USERNAME,
    email: EMAIL,
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller', 
};

const newUser = {
    name: USERNAME,
    email: EMAIL,
    password: 'fulana@123',
    role: 'seller', 
};

const newUserRes = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIn0sImlhdCI6MTY4NTU4MTMwMiwiZXhwIjoxNjg2MTg2MTAyfQ.ua0X-sARY-BvlpZnjmITADJViXDuOuBnzJN79m5-oEY',
    user: {
        id: 2,
        name: USERNAME,
        email: EMAIL,
        role: 'seller', 
    },
};

const allUsers = {
    users: [
      {
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        role: 'customer',
      },
    ],
  };

const adminLogin = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJlbWFpbCI6ImFkbUBkZWxpdmVyeWFwcC5jb20ifSwiaWF0IjoxNjg2MDc1MjQ3LCJleHAiOjE2ODY2ODAwNDd9.5FRYyyhSXVnvStiKb1OVpSZDcAIVN2vzwslBEcnx0B0',
    user: {
      id: 1,
      name: 'Delivery App Admin',
      role: 'administrator',
      email: 'adm@deliveryapp.com',
    },
  };

module.exports = { 
    user,
    newUser, 
    newUserRes,
    allUsers,
    adminLogin,
};