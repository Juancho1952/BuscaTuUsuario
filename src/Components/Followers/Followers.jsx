import React from 'react'
import useAxios from "../../hooks/useAxios";

const Followers = ({followers_url}) => {
    
    const followers = useAxios(`${followers_url}?per_page=20`);


  return (
    <article>
        <p className='value-p'>{followers?.length < 20 ? followers?.length : followers?.length + "+"}</p>
    </article>
  )
}

export default Followers