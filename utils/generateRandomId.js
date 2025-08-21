import crypto from "crypto"

export default function generateRandomId(length) {
    const randomBytes = crypto.randomBytes(length);
    const randomDigits = Array.from(randomBytes)
        .map(byte => byte % 10)
        .join('');
    return randomDigits.slice(0, length);
}
