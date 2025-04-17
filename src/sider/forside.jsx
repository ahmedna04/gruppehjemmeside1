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
        }
      }`)
      .then(data => settMedlemmer(data))
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
    </div>
  );
}

export default Forside;
