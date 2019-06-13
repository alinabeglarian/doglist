import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  return (

    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show images of the { props.breed } breed.

      <Link to="/">Go back to the index</Link>
      <div>
        { props.images && props.images.map(url => <img src={ url } alt="Dog" />) }
        { !props.images && 'Loading...' }
      </div>
    </div>
  )
}