import React from 'react';
import {Column} from "primereact/column";

const makeColumns = (columns, options) => columns.map(column => (
    <Column {...column} {...options}/>
));

export default makeColumns;