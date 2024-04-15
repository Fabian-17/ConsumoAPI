function EliminarElemento({deleteElement}) {
    return (
        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-danger mb-2" onClick={deleteElement}>Eliminar Elemento</button>
        </div>
    );
};

export default EliminarElemento;