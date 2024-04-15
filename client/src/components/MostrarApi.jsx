import { useState } from "react";
import ConsumirApi from "./ConsumirApi";
import EliminarElemento from "./EliminarElemento";

function MostrarApi() {
    const [apiData, setData] = useState(null);

    const handleClick = async () => {
        try {
            const data = await ConsumirApi();
            setData(data);
        } catch (error) {
            console.error("Error al obtener datos de la API:", error);
        }
    };

    const getPokemonImageUrl = (pokemonId) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    };

    const handleDelete = (index) => {
        const newData = [...apiData.results];
        newData.splice(index, 1);
        setData({ ...apiData, results: newData });
    };

    return (
        <div>
            <div className="d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-dark" onClick={handleClick}>API de Pokemon</button>
            </div>
            {apiData && (
                <div className="container text-center">
                    <h2>Datos de la API:</h2> 
                    <div className="row">
                    {apiData.results.map((item, index) => {
                            const pokemonId = item.url.split('/').slice(-2, -1)[0];
                            return (
                                <div key={index} className="col-md-4 mb-3">
                                    <div className="card" style={{ width: '18rem' }}>
                                    <h3 className="card-title d-flex justify-content-center">{item.name}</h3>
                                    <img className="card-img-top" src={getPokemonImageUrl(pokemonId)} alt={item.name} />
                                    <EliminarElemento deleteElement={() => handleDelete(index)} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MostrarApi;