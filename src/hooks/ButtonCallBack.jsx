import React from "react"

export const ButtonCallBack = React.memo(({increment}) => {
    console.log("Hasta aqui")
  return (
    <button className="btn btn-primary" onClick={()=>increment()}> Incrementar</button >
  )
})