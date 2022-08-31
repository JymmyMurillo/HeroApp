import FiltersBar from "../Components/FiltersBar";
import HeroCard from "../Components/HeroCard";
import { useSelector } from "react-redux/";

export default function Heroes() {
  const { allHeroesList, searchResult } = useSelector(
    (state) => state.allHeroes
  );

  console.log(searchResult)
  console.log(allHeroesList)

  return (
    <div className="">
      <FiltersBar />
      <div className="d-flex gap-3 p-3 container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-7 d-flex align-items-center">
          {searchResult
            ? searchResult?.map((heroe) => (
                <div className="col  my-2" key={heroe.id}>
                  <HeroCard cardContent={heroe} url={heroe?.image?.url} />
                </div>
              ))
            : allHeroesList?.map((heroe) => (
                <div className="col  my-2" key={heroe.id}>
                  <HeroCard cardContent={heroe} url={heroe?.images?.lg} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
