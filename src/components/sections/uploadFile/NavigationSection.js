import React from 'react';
import {MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBRow, MDBCol} from 'mdbreact';
import UploadFileFormNext from "../../uploadFile/uploadFileFormNext";


const NavigationSection = ({previousStep,nextStep,uploaded,uploadState}) => {

    const nextFormProps = {
        uploaded,
        uploadState,
        nextStep
    };

    return (
        <MDBRow className="mb-5">
            <MDBCol md="6">
                <MDBCard className="mb-5">
                    <MDBCardBody className="d-flex justify-content-between">
                        <div>
                            <MDBBtn color="primary" onClick={previousStep}>
                                <MDBIcon icon="arrow-left" className="ml-1" /> Previous
                            </MDBBtn>
                        </div>
                        <UploadFileFormNext {...nextFormProps}/>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
};

export default NavigationSection;