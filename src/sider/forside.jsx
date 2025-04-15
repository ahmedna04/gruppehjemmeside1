import { useEffect, useState } from "react";
import { client } from "../sanity-client";
import "./forside.css";

function forside() {
  const [medlemmer, settMedlemmer] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "gruppemedlem"]{
        _id,
        navn,
        epost,
        bilde {
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
          <div key={person._id} className="profilkort">
            {person.bilde?.asset?.url && (
              <img src={person.bilde.asset.url} alt={person.navn} />
            )}
            <h2>{person.navn}</h2>
            <p>{person.epost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default forside;
