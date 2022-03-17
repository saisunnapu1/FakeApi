import { Provider } from "react-redux";
import Header from "./Header";
import "./styles.css";
import store from "./redux/store";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}
