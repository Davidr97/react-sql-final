import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";
import {MDBAlert, MDBCol, MDBRow} from "mdbreact";

const withErrorExecuteSqlQuery = WrappedComponent => (

    function withErrorContainer(props){
        const {executeSqlQueryError, executeSqlQuery, sqlQuery, forwardProps} = props;
        if(executeSqlQueryError){
            return (
                <React.Fragment>
                    <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
                    <MDBCol md="6" className="ml-auto">
                        <MDBAlert color="danger">
                            An error occurred while trying to execute the SQL query!
                        </MDBAlert>
                    </MDBCol>
                </React.Fragment>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withErrorExecuteSqlQuery;