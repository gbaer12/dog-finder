import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">🐾Helloz! We Have Dogz!🐾</h1>
          <h2>Click on their name for more infoz!</h2>
        </div>
      </div>

      <div className="row">
        {dogs.map((d) => (
          <div className="col-3 text-center" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.anme}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
