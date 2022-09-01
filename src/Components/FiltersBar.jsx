import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAllHeroesList,
  setToSearch,
} from "../redux/slices/allHeroes";
import { fetchAllHeroes } from "../redux/slices/allHeroes";
import { useSelector } from "react-redux/";

/**
 * "When the input changes, set the search state to the value of the input, and if the input is empty,
 * fetch all the heroes and set the state to search."
 * 
 * The handleInputChange function is an event handler
 * @returns The return statement is returning a React element.
 */
export default function FiltersBar() {
  const dispatch = useDispatch();
  const { allHeroesList } = useSelector((state) => state.allHeroes);

  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");

/**
 * When the input changes, set the search state to the value of the input, and if the input is empty,
 * fetch all the heroes and set the state to search.
 */
  const handleInputChange = ({ target }) => {
    setSearch(target.value);
    if (target.value.length === 0) {
      setSearch("");
      dispatch(fetchAllHeroes());
      dispatch(setToSearch);
    }
  };

/**
 * It takes the search value from the input field and filters the allHeroesList array to only include
 * the heroes that match the search value.
 */
  const handleToSearch = () => {
    const tmp = allHeroesList.filter((heroe) =>
      heroe.name.toLowerCase().includes(search)
    );
    dispatch(setToSearch(search));
    dispatch(setAllHeroesList(tmp));
  };


/**
 * "If the filterBy string is greater than 0, then set the allHeroesList to the filtered list."
 * 
 * The filterBy string is set by the user in the input field.
 * 
 * The filtered list is the result of the filter function.
 * 
 * The filter function is a function that takes a function as an argument.
 * 
 * The function that is passed to the filter function is an anonymous function.
 * 
 * The anonymous function takes a hero as an argument.
 * 
 * The anonymous function returns a boolean value.
 * 
 * The boolean value is the result of the comparison of the hero's label and field to the filterBy
 * string.
 * 
 * The comparison is done by the ternary operator.
 * 
 * The ternary operator is a conditional operator.
 * 
 * The conditional operator is a comparison operator.
 * 
 * The comparison operator compares the hero
 */
  const handleFilter = (label, field) => {
    const tmp = allHeroesList.filter((hero) =>
      label === "powerstats"
        ? parseInt(hero[label][field]) === parseInt(filterBy.trim())
        : hero[label][field].toLowerCase() === filterBy.trim().toLowerCase()
    );
    if (filterBy.length > 0) dispatch(setAllHeroesList(tmp));
  };

/**
 * When the user clicks the reset button, the search and filterBy state variables are reset to their
 * default values, and the fetchAllHeroes action is dispatched.
 */
  const handleReset = () => {
    setSearch("");
    setFilterBy("");

    dispatch(fetchAllHeroes());
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-danger bg-gradient">
        <div className="container-fluid w-100">
          <span className="navbar-brand fs-1 text-decoration-underline border rounded border-dark">
            Heroes App
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around m-2 gap-5"
            id="navbarNavDropdown"
          >
            <form className="d-flex w-100" role="search">
              <input
                id="InputSearch"
                className="form-control me-2"
                type="search"
                placeholder="Buscar por nombre"
                aria-label="Search"
                value={search}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-warning fs-3"
                type="button"
                onClick={() => handleToSearch()}
              >
                Buscar
              </button>
            </form>
            <ul className="navbar-nav w-auto justify-content-around">
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="btn btn-danger border "
                  onClick={handleReset}
                >
                  Eliminar Busqueda
                </button>
                <ul className="dropdown-menu w-25">
                  <li>
                    <button className="dropdown-item">Nombre A-Z</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Nombre Z-A</button>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="navbar-nav w-100 align-items-center flex-column border rounded border-info">
              <span className="text-decoration-none text-dark fs-4">
                Filtrar por :
              </span>
              <ul className="navbar-nav w-100 justify-content-evenly flex-row">
                <li className="nav-item dropdown justify-content-between w-50">
                  <a
                    className="nav-link active dropdown-toggle d-flex justify-content-center align-items-center"
                    href="0"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Poderes:
                  </a>
                  <ul className="dropdown-menu p-1  w-25 position-absolute bg-warning bg-gradient  start-50 top-100 translate-middle-x">
                    <li className="">
                      <span className="px-3">Inteligencia:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() =>
                          handleFilter("powerstats", "intelligence")
                        }
                      >
                        ok
                      </button>
                    </li>
                    <li className="">
                      <span className="px-3">Fuerza:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("powerstats", "strength")}
                      >
                        ok
                      </button>
                    </li>
                    <li className="">
                      <span className="px-3">Velocidad:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("powerstats", "speed")}
                      >
                        ok
                      </button>
                    </li>
                    <li className="">
                      <span className="px-3">Durabilidad:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("powerstats", "durability")}
                      >
                        ok
                      </button>
                    </li>
                    <li className="">
                      <span className="px-3">Poder:</span>

                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("powerstats", "power")}
                      >
                        ok
                      </button>
                    </li>
                    <li className="">
                      <span className="px-3">Combate:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("powerstats", "combat")}
                      >
                        ok
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown w-50">
                  <a
                    className="nav-link active dropdown-toggle d-flex justify-content-center align-items-center"
                    href="0"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Apariencia:
                  </a>
                  <ul className="dropdown-menu me-5 w-25 position-absolute bg-warning bg-gradient start-50 top-100 translate-middle-x">
                    <li>
                      <span className="px-3">Genero:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("appearance", "gender")}
                      >
                        ok
                      </button>
                    </li>
                    <li>
                      <span className="px-3">Raza:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("appearance", "race")}
                      >
                        ok
                      </button>
                    </li>
                    <li>
                      <span className="px-3">Altura:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("appearance", "height")}
                      >
                        ok
                      </button>
                    </li>
                    <li>
                      <span className="px-3">Peso:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("appearance", "weight")}
                      >
                        ok
                      </button>
                    </li>
                    <li>
                      <span className="px-3">Color de ojos:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("appearance", "eyeColor")}
                      >
                        ok
                      </button>
                    </li>
                    <li>
                      <span className="px-3">Color de cabello:</span>
                      <input
                        type="text"
                        className="w-50 ms-5"
                        onChange={(e) => setFilterBy(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-warning fs-6 bg-danger ms-5 text-light"
                        type="button"
                        onClick={() => handleFilter("appearance", "hairColor")}
                      >
                        ok
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
