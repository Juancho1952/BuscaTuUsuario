import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../hooks/useAxios";
import { setHasError } from "../../Store/Slices/hasError.slice";
import Github404 from "../Errores/Github404";
import Followers from "../Followers/Followers";
import Location from "../Location/Location";
import Repos from "../Repos/Repos";
import "./Styles/Home.css";
import {faBasketball} from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.apiGithub);

  const apigithub = useAxios(
    `https://api.github.com/search/users?q=${userName}&per_page=10`
  );

  if (apigithub?.total_count == 0) {
    dispatch(setHasError(true));
    return <Github404></Github404>;
  }

  return (
    <article className="container">
      {apigithub?.items.map((apigit) => (
        <>
          <div key={apigit.id} className="card">
            <div
              className="card-header"
              style={{ backgroundImage: `url(${apigit.avatar_url})` }}
            >
              <div className="card-header-slanted-edge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
                  <path className="polygon" d="M-20,200,1000,0V200Z" />
                </svg>
                <a href={apigit.html_url} target="_blank">
                <div className="btn-follow">
                  <span className="sr-only">Follow</span>
                </div>
                </a>
              </div>
            </div>
            <div className="card-body">
                <h2 className="name"> {apigit.login} </h2>
              <h4 className="job-title">{apigit.type}</h4>
              <div className="bio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos, aperiam.
              </div>
              <div className="social-accounts">
                <a>
                <FontAwesomeIcon icon={faBasketball}></FontAwesomeIcon>
                  <span className="sr-only">Dribbble</span>
                </a>
                <a>
                  <img
                    src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg"
                    alt=""
                  />
                  <span className="sr-only">Twitter</span>
                </a>
                <a>
                  <img
                    src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg"
                    alt=""
                  />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            <div className="card-footer">
              <div className="stats">
                <div className="stat">
                  <span className="label">Repos</span>
                  <span className="value">
                    {
                      <Repos
                        key={apigit.id}
                        repos_url={apigit.repos_url}
                      ></Repos>
                    }
                  </span>
                </div>
                <div className="stat">
                  <span className="label">Location</span>
                  <span className="value">{<Location key={apigit.id} location_url={apigit.url} ></Location>}</span>
                </div>
                <div className="stat">
                  <span className="label">Followers</span>
                  <span className="value">
                    {
                      <Followers
                        key={apigit.id}
                        followers_url={apigit.followers_url}
                      ></Followers>
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </article>
  );
};

export default Home;
