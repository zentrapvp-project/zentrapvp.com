import crypto from "crypto"

export default function generateRandomToken(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    const charsetLength = charset.length;

    const randomBytes = crypto.randomBytes(length);
    const token = Array.from(randomBytes)
        .map(byte => charset[byte % charsetLength])
        .join('');

    return token;
}