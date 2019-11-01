import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";
import DataTable from "./dataTable";
import Visualization from "../visualization/visualization";
import {MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBIcon} from "mdbreact";

const withDataExecuteSqlQuery = WrappedComponent => (

    function withDataContainer(props){
        const {executeSqlQueryData, executeSqlQuery, sqlQuery, forwardProps} = props;
        if(executeSqlQueryData){
            return (
                <React.Fragment>
                    <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
                    <MDBCol md="12" className="mt-5">
                        <MDBCard>
                            <MDBCardHeader>
                                <MDBIcon icon="table" className="mr-1"/>
                                    Data table
                            </MDBCardHeader>
                            <MDBCardBody>
                                <DataTable data={executeSqlQueryData}/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <Visualization data={executeSqlQueryData}/>
                </React.Fragment>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withDataExecuteSqlQuery;