import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes?id=1')

    console.log({ data, isLoading, hasError })


  return (
    <>
        <h1>MultipleCustomHooks</h1>
        <hr />
    </>
  )
}
