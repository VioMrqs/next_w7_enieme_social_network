import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import PostForm from "../../components/PostForm";
import PostsList from "../../components/PostsList";

const Home = () => {
  const logInfo = useSelector((state) => state);
  const userToken = Cookies.get("token");
  const decodedToken = jwt_decode(Cookies.get("token"));

  // Vérifier que la personne soit bien connectée (useSelector)
  // Récupérer son ID
  // Redux pour ADD / UPDATE / DELETE (//todo tuto)

  return (
    <div className="home">
      <h1>Bienvenue sur ENIEME, le réseau social qu'il vous fallait.</h1>
      <PostForm userToken={userToken} decodedToken={decodedToken}/>
      <PostsList userToken={userToken} decodedToken={decodedToken}/>
    </div>
  );
};

export default Home;
