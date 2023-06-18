import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de dar retornar "hola angel" ', () => {
        
        const name = 'Angel';

        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);


    })
    


})
