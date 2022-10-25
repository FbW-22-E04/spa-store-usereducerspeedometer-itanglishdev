import React, { createContext, useContext, useReducer } from "react";

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


  const {state,dispatchState} = useContext(CounterContext)


  return (
    <div className="car">
    Make your instrument cluster here
    <div>
      <button onClick={()=> dispatchState({type: 'on'})}>Aschalten</button>
      <button onClick={()=> dispatchState({type:'accelerate'})}>Gas Geben</button>
      <button onClick={() => dispatchState({type: 'break'})}>Bremsen</button>
    </div>
    </div>
  )
}
