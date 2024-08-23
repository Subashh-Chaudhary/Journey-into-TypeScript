import {ReactElement } from "react";




export const Heading1 = ({children, value}: {children:ReactElement, value?: string}) =>{
          return(
                    <>
                              <h1
                              className="text-slate-800 text-4xl font-extrabold">{value} <br/>{children}</h1>
                    </>
          )
}

