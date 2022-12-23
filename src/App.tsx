import styled from "styled-components";
import "./App.css";
import Sidebar from "./components/Sidebar";

const MainWrapper = styled.div`
  min-height: 100vh;
  border: 2px solid green;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <MainWrapper>
      <Sidebar />
    </MainWrapper>
  );
}

export default App;
