import { GlobalStyle } from "./GlobalStyle.styled"
import Router from "./routes/Router"
import GlobalState from "./contexts/GlobalState"
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const context = GlobalState();
  
  return (
    <GlobalContext.Provider value={context}> 
      <Router/>
      <GlobalStyle/>
    </GlobalContext.Provider>
  )
}

export default App