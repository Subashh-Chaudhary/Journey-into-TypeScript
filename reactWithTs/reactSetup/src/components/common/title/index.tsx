import {ReactElement } from "react";




export const Heading1 = ({children, value}: {children:ReactElement, value?: string}) =>{
          return(
                    <>
                              <h1>{value} <br/>{children}</h1>
                    </>
          )
}

