import React from 'react';
import ExecuteSqlQueryForm from "./executeSqlQueryForm";
import {MDBCard, MDBCardBody, MDBCol, MDBRow} from "mdbreact";


const executeSqlQueryFormPresenter = (props) => {
    const {executeSqlQuery, sqlQuery, forwardProps} = props;
    return (
        <MDBCol md="6">
            <MDBCard>
                <MDBCardBody>
                    <ExecuteSqlQueryForm executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default executeSqlQueryFormPresenter;