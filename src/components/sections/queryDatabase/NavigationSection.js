import React from 'react';
import {MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdbreact';

const NavigationSection = ({previousStep}) => {
    return (
        <MDBRow className="mt-5">
            <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody>
                        <div className="d-flex align-items-center">
                            <MDBBtn color="primary" onClick={previousStep}>
                                <MDBIcon icon="arrow-left" className="ml-1" /> Previous
                            </MDBBtn>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
};

export default NavigationSection;

