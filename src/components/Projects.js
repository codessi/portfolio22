import React from 'react'
import { data } from '../data'

function Projects() {
  return (
    <>  
    {data.map((el, index) => {
      return(
      <article key={index}>
        <img className ="img-fluid" alt= "website" src={el.image} />        
        <h4>{el.title}</h4>
        <p className ="content" >
             {el.description}
        </p>
        <a target="_blank" className ="btn" href={el.live} rel="noreferrer">
          See Live
        </a>
        <a target="_blank" className ="source btn" href={el.sourceCode} rel="noreferrer">
          Source Code
        </a>        
       </article>
      )
    })}
      
    </>
  )
}

export default Projects