import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>
Bienvenue sur ENIEME, le réseau social qu'il vous fallait.
      </h1>
    </div>
  );
};

export default Home;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     checkAuth() ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{ pathname: '/login' }} />
//     )
//   )} />
// );
// Pour résumer comment cela fonctionne, on a un composant qui prend en paramètre : un composant, et toutes les autres props que pourraient avoir ce composant, grâce à ...rest. On renvoie un composant Route, et grâce à une ternaire, on définit ce que renvoie cette route. Si on est authentifié (à toi de créer une fonction checkAuth() qui permet de savoir si un utilisateur est authentifié), on renvoie bien la page. Si l'utilisateur n'est pas authentifié, on le redirige.
