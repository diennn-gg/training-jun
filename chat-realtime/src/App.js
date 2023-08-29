import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import HomePage from "./components/HomePage";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      { !user ? 
        ( <HomePage/> ) 
        :
        ( <ChatBox/> )
      }
    </div>
  );
}

export default App;
