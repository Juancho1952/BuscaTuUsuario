import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setHasError } from "../../Store/Slices/hasError.slice";
import './Styles/Github404.css'

const Github404 = () => {
  const dispatch = useDispatch();

  dispatch(setHasError(true));

  const handleclick = () => {
    dispatch(setHasError(false))
  }

  return (
    <article className="page-no-found">
        <h3 className="page-tittle">Usuario no encontrado 😢</h3>
        <Link className="page-Link" to="/" onClick={handleclick}>
          Regresar al menu principal
        </Link>
    </article>
  );
};

export default Github404;
