const InventoryTable = ({ data }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Equipo</th>
                        <th>Categoría</th>
                        <th>Estado</th>
                        <th>Fecha de Adquisición</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.equipo}</td>
                            <td>{item.categoria}</td>
                            <td className = {
                                item.estado === "Disponible"
                                ? "status available"
                                : item.estado === "Mantenimiento"
                                ? "status maintenance"
                                : "status assigned"
                            }>
                                <span className={`badge badge-${item.estado.toLowerCase()}`}>
                                {item.estado}
                                </span>
                            </td>
                            <td>{item.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;