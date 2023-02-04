import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAxios = (url) => {
  const dispatch = useDispatch();
  const [petition, setPetition] = useState();

  const userName = useSelector((state) => state.apiGithub);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPetition(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);

  return petition;
};

export default useAxios;
