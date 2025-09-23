import "./styles.css";
import AutoSuggestion from "./components/AutoSuggestion";
import DebouncedInput from "./components/DebouncedInput";

export default function App() {
  return (
    <div className="App">
      <AutoSuggestion />
      <DebouncedInput />
    </div>
  );
}
