import { Container } from "react-bootstrap";
import "./App.css";

import Contacts from "./components/Contacts";
import NavBarCom from "./components/NavBarCom";

function App() {
  return (
    <div className='App'>
      <NavBarCom />
      <Container>
        <Contacts />
      </Container>
    </div>
  );
}

export default App;
