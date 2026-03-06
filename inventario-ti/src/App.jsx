import {useState} from "react";
import {inventoryData} from "./data";
import DashboardCards from "./components/DashboardCards";
import InventoryTable from "./components/InventoryTable";
import Filters from "./components/Filters";
import "./App.css";

function App() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [state, setState] = useState("");

    const filteredData = inventoryData.filter(item => 
        item.equipo.toLowerCase().includes(search.toLowerCase()) &&
        (category === "" || item.categoria === category) &&
        (state === "" || item.estado === state)
    );

    return (
        <div className="container">
            <h1>Dashboard Inventario TI</h1>

            <DashboardCards data={filteredData} />

            <Filters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                state={state}
                setState={setState}
            />

            <InventoryTable data={filteredData} />
        </div>
    );
}

export default App;