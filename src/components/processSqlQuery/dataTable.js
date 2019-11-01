import React from 'react';
import {DataTable} from "primereact/datatable";
import extractColumns from "../../utilities/extractColumns";
import extractColumnsCustom from "../../utilities/extractColumnsCustom";
import extractRows from "../../utilities/extractRows";
import extractRowsCustom from "../../utilities/extractRowsCustom";
import makeColumns from "../../utilities/makeColumns";
import columnsOptions from "../../configs/dataTable/columnsOptions";
import dataTableOptions from "../../configs/dataTable/dataTableOptions";

const dataTable = ({data}) => {

    //const columns = makeColumns(extractColumns(data),columnsOptions);
    //const rows = extractRows(data);

    const columns = makeColumns(extractColumnsCustom(data), columnsOptions);
    const rows = extractRowsCustom(data);

    return (
        <div>
            <DataTable value={rows} {...dataTableOptions}>
                {columns}
            </DataTable>
        </div>
    )
};

export default dataTable;