import "./App.css";
import { useEffect } from "react";
import Heroes from "./Pages/Heroes";
import { setAllHeroesList } from "./redux/slices/allHeroes";
import { useDispatch } from "react-redux";

function App() {
  const dispath = useDispatch();

  const fetchInfo = async () => {
    const res = await fetch(process.env.React_App_URL_API_ALL);
    try {
      const data = await res.json();

      dispath(setAllHeroesList(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return <Heroes />;
}

export default App;
