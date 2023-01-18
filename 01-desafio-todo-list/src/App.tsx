import Input from "./shared/input/Input";
import Task from "./components/task/Task";
import Button from "./shared/button/Button";

function App() {
    return <>
        <center><Input></Input></center>
        <center><Task id='id' description='texto'></Task></center>
        <center><Button value={`Texto`}></Button></center>
    </>;
}

export default App
