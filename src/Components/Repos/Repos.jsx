import React from 'react'
import useAxios from '../../hooks/useAxios'

const Repos = ({repos_url}) => {

    const repositories = useAxios(`${repos_url}?per_page=20`)

  return (
    <article>
        <p className='value-p'>{repositories?.length < 20 ? repositories?.length : repositories?.length + "+"}</p>
    </article>
  )
}

export default Repos