import { GlobalStyle } from "./GlobalStyled"
import Router from "./router/Router"
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