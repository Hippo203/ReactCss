import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image , Centrer , Liste , Bouton , Zone , Titre , Texte , Texte2 } from './Home.Style';


const Home = ({ searchInput, submitValue, movies }) => (
  <Centrer>
     <form onSubmit={submitValue}>
        <Zone ref={searchInput} />
        <Bouton className='primary' type="submit">Rechercher</Bouton>
    </form>
  {movies.length > 0 && (
    
      <ul>
    {movies.map(movie => (
      <Liste>
      <li key={movie.imdbID}>

          <Titre>{movie.Title}</Titre>
          <div>
            <Image src={movie.Poster}></Image>
          </div>

          <div>
            <Texte>Date de Parution : {movie.Year}</Texte>
            <Texte>Catégorie : {movie.Type}</Texte>
            
            <Texte2>Lien : <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link></Texte2>
          </div>
          
      </li>
      </Liste>
    ))}  
    </ul>
    
  )}
  </Centrer>
);

Home.propTypes = {
  searchInput: PropTypes.object.isRequired,
}

export default Home;


