import React, { createContext, useReducer } from "react";

const CounterContext = createContext()

export function ContextProvider({children}) {
  
  const reducer = (state, action) => {

    switch (action.type) {

      case 'on':
        return state = 'on'
      
      case 'off':
        return

      case 'accelerate':
          return
      case 'break':
            return
      default:
              return 0

    }
  }

const [state, dispatchState] = useReducer(reducer, 0)

return <CounterContext.Provider value={{state, dispatchState}}>
  {children}
</CounterContext.Provider>

}




export default function Car() {
  return <div className="car">Make your instrument cluster here</div>;
}
