import Movie from './components/Movie';
import './App.css';

import poster2 from './assets/poster2.jpg';

export default function App() {
  return (
    <div className="App">
      <h2>My Favourite Movies</h2>

      <div className="movies">
        <Movie />

        <Movie
          title="Home Alone"
          year={1990}
          genre="Comedy"
          director="Chris Columbus"
          description="An eight-year-old troublemaker must protect his house from two burglars when he is accidentally left home alone by his family."
          poster={poster2}
        />
      </div>
    </div>
  );
}