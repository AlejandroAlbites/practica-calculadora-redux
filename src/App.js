import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import Result from "./components/Result";
import { INCREMENT, DECREMENT, MULTIPLE, DIVIDER, RESET } from "./store";
import { connect } from "react-redux";

function App({ increment, decrement, multiple, divider, reset }) {
  return (
    <div className="App">
      <Result />
      <Button event={increment}>Incrementar</Button>
      <Button event={decrement}>Decrementar</Button>
      <Button event={multiple}>Multiplicar</Button>
      <Button event={divider}>Dividir</Button>
      <Button event={reset}>Resetear</Button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    multiple: () => dispatch({ type: MULTIPLE }),
    divider: () => dispatch({ type: DIVIDER }),
    reset: () => dispatch({ type: RESET }),
  };
}

export default connect(null, mapDispatchToProps)(App);
