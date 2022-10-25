import React, { createContext, useContext, useReducer } from "react";

const CounterContext = createContext()

export function ContextProvider({children}) {
  
  const reducer = (state, action) => {

    switch (action.type) {

      case 'on':
        
        return state = 0
      
      case 'off':
        return 'Ausgeschaltet'

      case 'accelerate':
          return state +10

      case 'break':
        
            return state <= 0? 0 : state - 10

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
      <div style={
        {textAlign: 'center',
        height:'50px',
        marginTop:'20px'}}>
      {state}
      </div>
   
      <button onClick={()=> dispatchState({type: 'on'})}>ON</button>
      <button onClick={()=> dispatchState({type: 'off'})}>OFF</button>
      <button onClick={()=> dispatchState({type:'accelerate'})}>Gas Geben</button>
      <button onClick={() => dispatchState({type: 'break'})}>Bremsen</button>
    </div>
  )
}
