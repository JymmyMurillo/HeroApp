import React from "react";
import FiltersBar from "../Components/FiltersBar";
import HeroCard from "../Components/HeroCard";
import { useSelector } from "react-redux/";

/* A function that returns a component. */
export default function Heroes() {
  const { allHeroesList, isLoading } = useSelector(
    (state) => state.allHeroes
  );

  return (
    <div className="">
      <FiltersBar />
      {isLoading ? (
        <></>
      ) : (
        <div className="d-flex gap-3 p-3 container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-7 d-flex align-items-center">
            {allHeroesList?.map((heroe) => (
              <div className="col  my-2" key={heroe.id}>
                <HeroCard cardContent={heroe} url={heroe?.images["lg"]} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
