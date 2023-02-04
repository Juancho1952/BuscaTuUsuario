import React from "react";
import useAxios from "../../hooks/useAxios";

const Location = ({ location_url }) => {
  const location = useAxios(`${location_url}?per_page=10`);

  return (
    <article>
      <p className="p-location">
        {location?.location === null ? "No registra ubicacción" : location?.location}
      </p>
    </article>
  );
};

export default Location;
