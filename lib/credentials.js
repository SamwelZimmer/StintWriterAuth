import CryptoJS from 'crypto-js';

const SHARED_SECRET = 'SHARED_SECRET_BETWEEN_APP_A_AND_APP_B';

export const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SHARED_SECRET).toString();
    return ciphertext;
}