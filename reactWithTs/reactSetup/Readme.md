## Life cycle of component

          1. Mounting
                    Loading of component
          2. Updating
                    change in state(datas within the components), props(incomming datas)
          3. Unmounting
                    save the change and eject the componet
          if there is any change in props, states the components will rerendered for sure.

## Way of passing datas

          1. props
                    supports all value except react elements
          2. children
                    supports all value with react elements

## Tailwind css breakpoint

          Breakpoint prefix	Minimum width	CSS
          sm	          640px	          @media (min-width: 640px) { ... }
          md	          768px	          @media (min-width: 768px) { ... }
          lg	          1024px	          @media (min-width: 1024px) { ... }
          xl	          1280px	          @media (min-width: 1280px) { ... }
          2xl	          1536px	          @media (min-width: 1536px) { ... }

## Hooks 
          hooks is predefined function which can be called at any time.
          (something that link)

          useState[name, setName] = useState("");
          where,    name => state variable
                    setName => function (which handle change in variable)
                    useState(0) => value set to empty.