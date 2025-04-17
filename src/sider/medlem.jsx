import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../sanity.client";
import "./medlem.css"; 

function Medlem() {
  const { id } = useParams(); 
  const [medlem, settMedlem] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "gruppemedlem" && _id == $id][0]{
        navn,
        epost,
        bilde {
          asset -> {
            url
          }
        },
        biografi,
        interesser[],
        logg[] {
          _key,
          dato,
          tekst
        }
      }`, { id })
      .then(data => settMedlem(data))
      .catch(console.error);
  }, [id]);

  if (!medlem) return <p>Laster...</p>;

  return (
    <div className="medlem">
      <h1>{medlem.navn}</h1>
      <img src={medlem.bilde?.asset?.url} alt={medlem.navn} />
      <p><strong>E-post:</strong> {medlem.epost}</p>
      <p><strong>Biografi:</strong> {medlem.biografi}</p>

      <h3>Interesser</h3>
      <ul>
        {medlem.interesser?.map((interesse, index) => (
          <li key={index}>{interesse}</li>
        ))}
      </ul>

      <h3>Logg</h3>
      <ul>
        {medlem.logg?.map((innslag) => (
          <li key={innslag._key}>
            <strong>{innslag.dato}:</strong> {innslag.tekst}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Medlem;
