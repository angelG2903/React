import { render } from "@testing-library/react"
import { App } from "../src/FirstApp"


describe('Prueba primer componente', () => {

  test('Debe de hacer match con el snapshot ', () => {

        render( <App />)

  })
  
})
