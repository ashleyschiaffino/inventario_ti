import { inventoryData } from "../data";

const Filters = ({search, setSearch, category, setCategory, state, setState}) => {
    const categories = [...new Set(inventoryData.map(item => item.categoria))];

    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Buscando equipo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Todas las categorías</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>

            <select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">Todos los estados</option>
                <option value="Disponible">Disponible</option>
                <option value="Asignado">Asignado</option>
                <option value="Mantenimiento">Mantenimiento</option>
            </select>
        </div>  
    );
};

export default Filters;