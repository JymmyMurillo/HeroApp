export default function HeroCard({ cardContent, url, fullName }) {
  return (
    <>
      {/*Button trigger modal */}
      <button
        type="button"
        className="btn bg-warning bg-gradient bg-opacity-75 w-100 d-flex flex-column align-items-center border rounded border-dark"
        data-bs-toggle="modal"
        data-bs-target={`#${cardContent.name.split(" ").join("")}`}
      >
        <img className="w-100" src={url} alt="" />
        <span className="fs-6 fw-semibold text-decoration-underline">
          {cardContent?.name}
        </span>
        <span className="fs-6">{fullName}</span>
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`${cardContent.name.split(" ").join("")}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered w-auto">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                {cardContent?.name}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex flex-column flex-sm-row justify-content-evenly  align-items-center">
              <div className="w-25 d-flex flex-column justify-content-center">
                <h3 className="text-decoration-underline">Poderes</h3>
                <div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Inteligencia: ${cardContent.powerstats.intelligence}`}</div>
                    <div className="fw-bold">35</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Fuerza: ${cardContent.powerstats.strength}`}</div>
                    <div className="fw-bold">52</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Velocidad: ${cardContent.powerstats.speed}`}</div>
                    <div className="fw-bold">86</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Durabilidad: ${cardContent.powerstats.durability} `}</div>
                    <div className="fw-bold">42</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Poder: ${cardContent.powerstats.power}`}</div>
                    <div className="fw-bold">45</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Combate: ${cardContent.powerstats.combat}`}</div>
                    <div className="fw-bold">52</div>
                  </div>
                </div>
              </div>
              <img className="w-25 h-25" src={url} alt="" />
              <div className="w-25 d-flex flex-column justify-content-center">
                <h3 className="text-decoration-underline">Apariencia</h3>
                <div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Genero: ${cardContent.appearance.gender} `}</div>
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
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
