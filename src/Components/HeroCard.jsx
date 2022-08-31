export default function HeroCard() {
  return (
    <>
      {/*Button trigger modal */}
      <button
        type="button"
        class="btn bg-warning bg-gradient bg-opacity-75 w-100 d-flex flex-column align-items-center border rounded border-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          className="w-100"
          src="https://www.superherodb.com/pictures2/portraits/10/100/278.jpg"
          alt=""
        />
        <span className="fs-6 fw-semibold text-decoration-underline">
          Captain Hindsight lll
        </span>
        <span className="fs-6">Billy Batson</span>
      </button>

      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered w-auto">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">
                Captain Hindsight lll
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex flex-column flex-sm-row justify-content-evenly  align-items-center">
              <div className="w-25 d-flex flex-column justify-content-center">
                <h3 className="text-decoration-underline">Poderes</h3>
                <div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Inteligencia: </div>
                    <div className="fw-bold">35</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Fuerza: </div>
                    <div className="fw-bold">52</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Velocidad: </div>
                    <div className="fw-bold">86</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Durabilidad: </div>
                    <div className="fw-bold">42</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Poder: </div>
                    <div className="fw-bold">45</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Combate: </div>
                    <div className="fw-bold">52</div>
                  </div>
                </div>
              </div>
              <img
                className="w-25 h-25"
                src="https://www.superherodb.com/pictures2/portraits/10/100/278.jpg"
                alt=""
              />
              <div className="w-25 d-flex flex-column justify-content-center">
                <h3 className="text-decoration-underline">Apariencia</h3>
                <div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Genero: </div>
                    <div className="fw-bold">35</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Raza: </div>
                    <div className="fw-bold">52</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Altura: </div>
                    <div className="fw-bold">86</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Peso: </div>
                    <div className="fw-bold">42</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>Color ojos: </div>
                    <div className="fw-bold">Amarillo</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between  align-items-center">
                    <div>Color cabello: </div>
                    <div className="fw-bold">Blanco</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}