const CryptoJs = require('crypto-js');


const encryptor = (pass) => {
    const secret = 'brix2150coco';
    const ciphertext = CryptoJs.AES.encrypt(pass, secret).toString();
    return ciphertext;
}


//...we export the encrypted data...
export default encryptor;