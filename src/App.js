import "./App.css";
//import DemoAntd2 from "./components/DemoAntd2";
//import DemoAnt from "./components/DemoAntd";
import TodoList from "./CRUDTodoList/TodoList";
 //import DemoBootstrap from "./components/DemoBootstrap";
 

function App() {
  return (
    <div className='App'>
      { /*<DemoBootstrap />*/}
      {<TodoList />}
     { /*<DemoAnt />*/}
     {/*<DemoAntd2/>*/}
    </div>
  );
}

export default App;