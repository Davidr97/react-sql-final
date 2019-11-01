import React from 'react';
import {MDBCard, MDBCardBody,MDBBreadcrumb,MDBBreadcrumbItem, MDBRow, MDBCol} from "mdbreact";


const BreadcrumbSection = ({itemName}) => {
    return (
        <MDBCard className="mb-5">
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md="3">
                        <MDBBreadcrumb className="m-0">
                            <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>{itemName}</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
};

export default BreadcrumbSection;