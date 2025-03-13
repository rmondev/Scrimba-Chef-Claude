import React from 'react'
import ReactMarkdown from 'react-markdown'

/**
 * Challenge: See if you can figure out how to use the
 * react-markdown package to render `props.recipe` as React
 * elements rather than the plain markdown text.
 * 
 * Use the link in the slide to navigate directly to the
 * package's instructions on how to use it.
 */

const ClaudeRecipe = (props) => {
  return (

    <section className='suggested-recipe-container' aria-live='polite'>
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
   
  )
}

export default ClaudeRecipe
