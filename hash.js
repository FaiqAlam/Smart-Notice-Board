const bcrypt = require('bcrypt');
const password = 'faiq'; // Replace with desired password
bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log('Hashed Password:', hash);
});