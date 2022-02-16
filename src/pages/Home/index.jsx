import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {

// Vérifier que la personne soit bien connectée (useSelector)
// Récupérer son ID
// Form => à mettre dans un composant
// Redux pour ADD / UPDATE / DELETE (//todo tuto)

  return (
    <div className="home">
      <h1>Bienvenue sur ENIEME, le réseau social qu'il vous fallait.</h1>
      {/* <div className="post-creation">
        <form>
          <div>
            <div>
              <label className="label">Ton énième message</label>
            </div>
            <input
              onChange={handleMessage}
              className="input"
              value={message}
              type="text"
            />
          </div>
          <div>
            <Button
              onClick={() => handleSubmit()}
              type={"submit"}
              text={"Connexion"}
            />
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Home;

// You can create posts via POST /posts with JSON payload { "text": [post_message], "user": [creator_id] }.
