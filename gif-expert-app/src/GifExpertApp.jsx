import { useState } from "react"
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch','Dragon ball'])

    // Agregamos una nueva categoria 2 formas
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return

        setCategories([newCategory, ...categories] )
        // setCategories( cat => [...cat, 'Valorant'] )
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
            // Masomenos
                // setCategories={ setCategories } 

            // Mejor 2 maneras de hacerlo
                onNewCategory={ (value) => onAddCategory(value) }
                // onNewCategory={ onAddCategory }
            />

            {/* <button onClick={ onAddCategory }>Agregar</button> */}

            <ol>
                {
                    categories.map(category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>

        </>
    )
}