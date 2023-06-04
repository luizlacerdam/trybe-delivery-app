/* eslint-disable max-len */
const user = { 
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller', 
};

const newUser = {
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: 'fulana@123',
    role: 'seller', 
};

const newUserRes = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIn0sImlhdCI6MTY4NTU4MTMwMiwiZXhwIjoxNjg2MTg2MTAyfQ.ua0X-sARY-BvlpZnjmITADJViXDuOuBnzJN79m5-oEY',
    user: {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        role: 'seller', 
    },
};

module.exports = { 
    user,
    newUser, 
    newUserRes,
};