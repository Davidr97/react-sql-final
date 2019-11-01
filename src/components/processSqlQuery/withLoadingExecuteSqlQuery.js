import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";
import {MDBCol, MDBRow} from "mdbreact";

const withLoadingExecuteSqlQuery = WrappedComponent => (

    function withLoadingContainer(props){
        const {executeSqlQueryLoading, executeSqlQuery, sqlQuery, forwardProps} = props;
        if(executeSqlQueryLoading){
            return (
                <React.Fragment>
                    <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
                    <MDBCol md="6" className="d-flex justify-content-center ml-auto">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </MDBCol>
                </React.Fragment>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withLoadingExecuteSqlQuery;