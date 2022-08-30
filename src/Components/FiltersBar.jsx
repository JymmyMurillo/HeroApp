export default function FiltersBar() {
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
            <form class="d-flex w-100" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Buscar por nombre"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-warning fs-3" type="submit">
                Buscar
              </button>
            </form>
            <ul className="navbar-nav w-auto justify-content-around">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="0"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ordenar:
                </a>
                <ul className="dropdown-menu w-25">
                  <li>
                    <a className="dropdown-item" href="0">
                      Nombre A-Z
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="0">
                      Nombre Z-A
                    </a>
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
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li className="">
                      <span className="px-3">Fuerza:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li className="">
                      <span className="px-3">Velocidad:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li className="">
                      <span className="px-3">Durabilidad:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li className="">
                      <span className="px-3">Poder:</span>

                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li className="">
                      <span className="px-3">Combate:</span>
                      <input type="text" className="w-50 ms-5" />
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
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li>
                      <span className="px-3">Raza:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li>
                      <span className="px-3">Altura:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li>
                      <span className="px-3">Peso:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li>
                      <span className="px-3">Color de ojos:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                    <li>
                      <span className="px-3">Color de cabello:</span>
                      <input type="text" className="w-50 ms-5" />
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center bg-dark text-light p-2">
        <span>Busqueda aplicada ={">"} </span>
        <span>Nombre: N/A</span>
        <span>Poder: N/A</span>
        <span>Apariencia: N/A</span>
        <button type="button" class="btn btn-danger border ">
          Eliminar Busqueda
        </button>
      </div>
    </>
  );
}
