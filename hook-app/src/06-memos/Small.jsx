import { memo } from "react"
// Es para que no se redibuje por cualquien cosa que suceda en el padre
// solo se hace cuando es necesario
export const Small = memo(({ value }) => {
  return (
    <small>{ value }</small>
  )
})
