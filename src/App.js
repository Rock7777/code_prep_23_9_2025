import "./styles.css";
import AutoSuggestion from "./components/AutoSuggestion";
import DebouncedInput from "./components/DebouncedInput";
import ThrottlingExample from "./components/ThrottlingExample";

export default function App() {
  return (
    <div className="App">
      <AutoSuggestion />
      <DebouncedInput />
      <ThrottlingExample />
    </div>
  );
}
