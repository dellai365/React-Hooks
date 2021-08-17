import './App.css';
import MovieCard from './MovieCard';
import { useState } from 'react';
import AddModal from './AddModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';


function MovieList() {

    const [Movies, setMovies] = useState([{ name: "Fury", description: "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.", rating: "7.6", photo: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f839d236fbd156a40c07312391b8a5e8c9aceac75204db3433248959ac2ca571._RI_V_TTW_.jpg' },

    { name: "Mad Max: Fury Road", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.", rating: "8.2", photo: 'https://resize-media.festival-cannes.com/fit-in/2560x1103/film_film/0002/13/e37aaa403d41429e45eec949eddbb1e26bbb0c3b.jpeg' },
    { name: "San Andreas", description: "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey with his ex-wife across the state in order to rescue his daughter.", rating: "6.2", photo: 'https://fr.web.img2.acsta.net/pictures/15/04/23/15/38/341525.jpg' }]);


    const [rate, setrate] = useState(false);
    const [name, setname] = useState(false)

    const OrderRate = () => {
        rate ? setMovies(Movies.sort((a, b) => b.rating - a.rating)) : setMovies(Movies.sort((a, b) => a.rating - b.rating));
    }
    const OrderName = () => {
        name ? setMovies(Movies.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))) : setMovies(Movies.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0)))
    }


    return (

        < div style={{ padding: '1rem' }}>
            <div style={{ paddingBottom: "1.5em", display: "flex", gap: "1em" }}>
                <AddModal add={(movie) => setMovies(movie)} old={Movies} />

                <Button style={{ backgroundColor: "whitesmoke" }} variant="warning" onClick={() => { setrate(!rate); OrderRate(); }}>order by rate</Button>
                <Button style={{ backgroundColor: "whitesmoke" }} variant="warning" onClick={() => { setname(!name); OrderName(); }}>order by name</Button>

            </div>

            <tr>
                {Movies.map(movie => {
                    return (


                        <td style={{ padding: '1rem' }} >
                            <MovieCard name={movie.name}
                                description={movie.description}
                                photo={movie.photo}
                                rating={movie.rating}
                            />
                        </td>
                    )
                })}
            </tr>

        </div>
    )

}

export default MovieList;
