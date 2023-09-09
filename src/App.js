import Dashbord from "./pages/admin dashbord/Dashbord";
import { LogIn } from "./pages/log in/LogIn";
import { useContext } from "react";
import {AuthContext} from "./Contexts/AuthContext"
;
function App() {
  const Auth=useContext(AuthContext)
  return (
    <div className="App">
      {!Auth.isLoggedIn && <LogIn/>}
      {Auth.isLoggedIn &&  <Dashbord/>}
    
    </div>
  );
}

export default App;
