import React, { useState } from "react";
import { Button } from "@material-ui/core";

import Table from "./Table";
import axios from 'axios';

function Homepage(props) {

    const [data, setData] = useState([]);

    const trazi = () => {
        (async () => {
            const result1 = await axios.get("http://localhost:9002/controller/trazi");
            setData(result1.data.listaRezultataDTO);
        })();
    };

    const akcija = () => {
        (async () => {
            const result1 = await axios.get("http://localhost:9002/controller/akcija");
            setData(result1.data.listaRezultataDTO);
        })();
    };

    return data && (
        <div>
            <Button
                style={{ marginTop: "10px" }}
                onClick={trazi}
            >
                Trazi
            </Button>
            <Button
                style={{ marginTop: "10px" }}
                onClick={akcija}
            >
                Akcija
            </Button>
            <Table data={data} />
        </div>
    );
}

export default Homepage;