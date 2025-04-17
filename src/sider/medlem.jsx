import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import client from "../sanity.client";
import "./medlem.css";

function Medlem() {
  const { id } = useParams();
  const [medlem, settMedlem] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "medlem" && _id == $id][0]{
          name,
          email,
          image {
            asset -> {
              url
            }
          },
          bio,
          interests,
          logg[] {
            text,
            dato
          }
        }`,
        { id }
      )
      .then((data) => settMedlem(data))
      .catch(console.error);
  }, [id]);

  if (!medlem) {
    return <div>Laster...</div>;
  }

  return (
    <div className="medlem-side">
      <Link to="/">Hjem</Link>
      <div className="medlem-info">
        {medlem.image?.asset?.url && (
          <img src={medlem.image.asset.url} alt={medlem.name} />
        )}
        <h2>{medlem.name}</h2>
        <p><strong>E-post:</strong> {medlem.email}</p>
        <p><strong>Biografi:</strong> {medlem.bio}</p>
        <p><strong>Interesser:</strong></p>
        <ul>
          {medlem.interests?.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
        <h3>Arbeidslogg</h3>
        <ul>
          {medlem.logg?.map((entry, i) => (
            <li key={i}>
              <strong>{new Date(entry.dato).toLocaleDateString()}</strong>: {entry.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Medlem;
