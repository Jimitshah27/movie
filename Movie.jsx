function Movie(props)  {

    return(
        <div>
            <button onClick={props.makeMovie}>
                Click me
            </button>
            <div>
                {props.movie.map((item)=> (
                    <h3>{item.title}</h3>,
                    <h3>{item.release_date}</h3>
                ))}
            </div>
        </div>
    );
}
export default Movie