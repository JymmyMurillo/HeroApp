import "./App.css";
import { useEffect } from "react";
import Heroes from "./Pages/Heroes";
import { fetchAllHeroes } from "./redux/slices/allHeroes";
import { useDispatch } from "react-redux";

/**
 * We're using the useEffect hook to dispatch the fetchAllHeroes action creator when the component
 * mounts
 * @returns The Heroes component is being returned.
 */
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHeroes());
  }, []);

  return <Heroes />;
}

export default App;
