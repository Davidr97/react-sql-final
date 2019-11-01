import React from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact';
import UploadFile from "../../../configs/uploadFile/bootstrap";

const UploadFileSection = (props) => {
    return (
        <MDBRow className="mb-5">
            <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody>
                        <UploadFile {...props}/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
};

export default UploadFileSection;