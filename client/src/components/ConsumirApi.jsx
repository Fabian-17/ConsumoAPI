const api = 'https://pokeapi.co/api/v2/pokemon';

function ConsumirApi() {

    return fetch(api)
        .then(response => response.json())
        .catch(err => {
            console.log("Error al obtener datos de la API:", err);
            throw err; 
        });

};

export default ConsumirApi;