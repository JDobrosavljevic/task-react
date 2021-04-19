
import React, { useMemo } from "react";

import TableContent from "./TableContent";

function Table(props) {
    const {data} = props;

    const columns = useMemo(
        () => [
            {
                Header: "Kupci",
                columns: [
                    {
                        Header: "Naziv kupca",
                        accessor: "nazivKupca"
                    },
                    {
                        id: "aktivan",
                        Header: "Aktivan",
                        accessor: a => a.aktivan.toString()
                    },
                    {
                         Header: "Maticni grad",
                         accessor: "maticniGrad"
                    },
                    {
                         Header: "Broj kartica",
                         accessor: "ukupanBrojKartica"
                    },
                    {
                          Header: "Dozvoljeni gradovi",
                          accessor: "dozvoljeniGradovi"
                    }
                ]
            }
        ],
        []
    );

    return data && (
        <div>
            <TableContent columns={columns} data={data} />
        </div>
    );
}

export default Table;