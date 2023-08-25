import { useState, createContext, useContext } from 'react'

const CyclesContext = createContext({} as any)

function NewCyCleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button onClick={() => setActiveCycle(2)}>Alterar ciclo</button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown: {activeCycle}</h1>
}

export function ExampleContextAPI() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <>
        <NewCyCleForm />
        <Countdown />
      </>
    </CyclesContext.Provider>
  )
}
