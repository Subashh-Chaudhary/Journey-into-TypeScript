import React, {ReactElement } from "react";

export const Heading1 = ({
  children,
  value,
}: {
  children: ReactElement;
  value?: string;
}) => {
  return (
    <>
      <h1 className="text-slate-800 text-4xl font-extrabold">
        {value} <br />
        {children}
      </h1>
    </>
  );
};

export const Heading2 = ({
  children,
  value,
}: {
  children: ReactElement;
  value?: string;
}) => {
          const [loading, setLoading] = React.useState(true);

          React.useEffect(() =>{
                    console.log("Any change in state/props this hook calls")
          })

          React.useEffect(() =>{
                    console.log("At first rendered of component this hook calls");
                    setTimeout(()=>{
                              setLoading(false);
                    }, 5000)
          }, [])

          React.useEffect(() =>{
                    console.log("Any change in state/props in dependeny array component this hook calls")
          }, [loading])
  return (
    <>
      <h1 className="text-cyan-800 text-2xl font-extrabold">
        {value} <br />
        {children}
      </h1>
    </>
  );
};
