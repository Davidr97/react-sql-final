import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";

const executeSqlQueryPresenter = ({executeSqlQuery, sqlQuery, forwardProps}) => (
    <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
);

export default executeSqlQueryPresenter;