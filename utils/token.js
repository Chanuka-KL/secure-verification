import jwt from 'jsonwebtoken';
const SECRET = 'chanuka-secret-key';

export function createToken() {
  return jwt.sign({ verified: true }, SECRET, { expiresIn: '5m' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
