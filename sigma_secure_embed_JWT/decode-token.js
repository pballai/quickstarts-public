const jwt = require('jsonwebtoken');

// Your JWT token
const token = 'REDACTED';

// Decode the JWT without verifying the signature
const decoded = jwt.decode(token, { complete: true });

console.log(decoded);