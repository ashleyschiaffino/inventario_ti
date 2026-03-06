const DashboardCards = ({data}) => {
    const total = data.length;
    const mantenimiento = data.filter(d => d.estado === "Mantenimiento").length;
    const asignados = data.filter(d => d.estado === "Asignado").length;
    const disponible = data.filter(d => d.estado === "Disponible").length;

    return (
        <div className="cards">
            <div className="card">
                <h3>Total Equipos</h3>
                <p>{total}</p>
            </div>
            <div className="card critical">
                <h3>En Mantenimiento</h3>
                <p>{mantenimiento}</p>
            </div>
             <div className="card neutral">
                <h3>Asignados</h3>
                <p>{asignados}</p>
            </div>
            <div className="card success">
                <h3>Disponibles</h3>
                <p>{disponible}</p>
            </div>
        </div>
    );
};

export default DashboardCards;