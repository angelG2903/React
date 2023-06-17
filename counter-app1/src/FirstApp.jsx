// Maneras de exportar un componente
/* export function App() {
    return (<h1>Hola Mundo!!</h1>);
} */


// ---------------------------------------------------------------------------
// import { Fragment } from "react"
// Importamos fragment para colocar mas de un elemento en el componente

/* export const App = () => {
    return (
        <Fragment>
            <h1>Hello World App</h1>
            <p>parrafo</p>
        </Fragment>
    )
} */

// Aqui otra manera de ocupar un fragment sin la necesidad de exportarlo <> </>

// Las propTypes son para definir el tipo a las props
import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola Mundo',
    title: 'Angel'
}

const getSaludo = () => {
    return "Hola compis"
}




export const App = ({ title }) => {
    return (
        <>
            <h1> { JSON.stringify( newMessage ) } </h1>
            <h2> { getSaludo() } </h2>
            <h1> { title } </h1>
            {/* <h1>Hello World App</h1> */}
            <p>parrafo</p>
        </>
    )
}

// Aqui ocupamos el prop-types que son para dar como una validacion nos mandara un error en consola
// sino cumple con las validaciones por ejemplo debe ser string y obligatorio
App.propTypes = {
    title:PropTypes.string.isRequired
}

// Valores por defecto de una prop
App.defaultProps = {
    title: 'No hay titulo'
}