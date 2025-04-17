import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../sanity.client";
import "./forside.css";

function Forside() {
  const [medlemmer, settMedlemmer] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "medlem"]{
        _id,
        name,
        email,
        image {
          asset -> {
            url
          }
        },
        logg[] {
          text,
          dato
        }
      }`)
      .then((data) => settMedlemmer(data))
      .catch(console.error);
  }, []);

  return (
    <div className="forside">
      <h1>Gruppehjemmeside</h1>

      <div className="kort-container">
        {medlemmer.map((person) => (
          <Link to={`/medlem/${person._id}`} key={person._id} className="profilkort">
            {person.image?.asset?.url && (
              <img src={person.image.asset.url} alt={person.name} />
            )}
            <h2>{person.name}</h2>
            <p>{person.email}</p>
          </Link>
        ))}
      </div>

      <div className="logg-container">
        <h2>Arbeidslogg</h2>
        {medlemmer.map((person) =>
          person.logg?.map((logg, index) => (
            <div key={`${person._id}-${index}`} className="logg-post">
              <strong>{person.name}</strong>: {logg.text} <br />
              <em>{new Date(logg.dato).toLocaleDateString()}</em>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Forside;
