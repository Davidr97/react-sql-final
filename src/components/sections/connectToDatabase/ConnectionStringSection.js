import React from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact';
import ConnectionStringForm from "../../saveConnectionString/connectionStringForm";

const ConnectionStringSection = ({updateConnectionString}) => {
    return (
        <MDBRow className="mb-5">
            <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody>
                        <ConnectionStringForm updateConnectionString={updateConnectionString}/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
};

export default ConnectionStringSection;

