import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGitHubGlobal } from "../../../Store/Slices/apiGithub.Slice";
import "./Styles/FormPrincipal.css";

const FormPrincipal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(setGitHubGlobal(e.target.searchInput.value.trim()));
    navigate("/home");
  };

  return (
    <section className="search">
      <form className="search-form" onSubmit={submit}>
        <h1 className="search-tittle">Ingresa tú usuario de GIT o busca varios usuarios aqui 👇🏽</h1>
        <input required="text" type="text" className="search-input" id="searchInput" />
        <button className="search-button">GO!</button>
      </form>
    </section>
  );
};

export default FormPrincipal;
