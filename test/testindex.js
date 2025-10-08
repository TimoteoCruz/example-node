const crypto = require('crypto');

function hash(mensaje) {
    const hash = crypto.createHash('sha512');
    hash.update(String(mensaje));
    return hash.digest('hex');
}

module.exports = hash;