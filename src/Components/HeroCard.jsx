import { useSelector } from "react-redux/";

/* The above code is a React component that is used to display a card with information about a
superhero. */
export default function HeroCard({ cardContent, url, }) {
  const { toSearch } = useSelector(
    (state) => state.allHeroes
  );
  return (
    <>
      {/*Button trigger modal */}
      <button
        type="button"
        className="btn bg-warning bg-gradient bg-opacity-75 w-100 d-flex flex-column align-items-center border rounded border-dark"
        data-bs-toggle="modal"
        data-bs-target={`#${cardContent.name.split(" ").join("")}`}
      >
        <img
          className="w-100"
          src={url}
          alt=""
        />
        <span className="fs-6 fw-semibold text-decoration-underline">
          {cardContent?.name}
        </span>
        <span className="fs-6">
          {cardContent.biography["fullName"]}
        </span>
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
                    <div>{`Inteligencia:`}</div>
                    <div className="fw-bold">
                      {cardContent.powerstats.intelligence}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Fuerza: `}</div>
                    <div className="fw-bold">
                      {cardContent.powerstats.strength}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Velocidad: `}</div>
                    <div className="fw-bold">
                      {cardContent.powerstats.speed}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Durabilidad: `}</div>
                    <div className="fw-bold">
                      {cardContent.powerstats.durability}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Poder: `}</div>
                    <div className="fw-bold">
                      {cardContent.powerstats.power}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Combate: `}</div>
                    <div className="fw-bold">
                      {cardContent.powerstats.combat}
                    </div>
                  </div>
                </div>
              </div>
              <img className="w-25 h-25" src={url} alt="" />
              <div className="w-25 d-flex flex-column justify-content-center">
                <h3 className="text-decoration-underline">Apariencia</h3>
                <div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>{`Genero: `}</div>
                    <div className="fw-bold">
                      {cardContent.appearance.gender}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Raza: </div>
                    <div className="fw-bold">{cardContent.appearance.race}</div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Altura: </div>
                    <div className="fw-bold">
                      {cardContent.appearance.height[1]}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Peso: </div>
                    <div className="fw-bold">
                      {cardContent.appearance.weight[1]}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>Color ojos: </div>
                    <div className="fw-bold">
                      {
                        cardContent.appearance[
                          toSearch ? "eye-color" : "eyeColor"
                        ]
                      }
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between  align-items-center">
                    <div>Color cabello: </div>
                    <div className="fw-bold">
                      {
                        cardContent.appearance[
                          toSearch ? "hair-color" : "hairColor"
                        ]
                      }
                    </div>
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
