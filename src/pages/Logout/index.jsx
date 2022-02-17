import React from 'react';
import Cookies from 'js-cookie';
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/user/UserActions';

const Logout = () => {

let history = useNavigate();

const dispatch = useDispatch();

const handleSubmit = () => {
  Cookies.remove('token');
  dispatch(userLogout());
  history("/");
}

  return (
    <Button onClick={handleSubmit} text ={"Veux-tu vraiment te déconnecter ?"}/>
  )

};

export default Logout;
