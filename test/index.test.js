const hash = require('../test/testindex');

test('Verificar Hash', () => { 
    const message = "contraseña"; 
    const hashtest = hash(message); 
    
expect(hashtest).toEqual('559a0612917c8c516c7980c38b376cf2bb2387ae1b6944b3b32245ff4f2bad4d5db3811f02cff394fb62fa3feefd03e2eb83ba7bcca72a912bb87ea609c424da');
});