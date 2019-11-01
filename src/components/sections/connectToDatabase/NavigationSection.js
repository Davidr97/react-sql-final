import React from 'react';
import {MDBCard, MDBCardBody, MDBRow, MDBCol} from 'mdbreact';
import WizardForm from "../../saveConnectionString/wizardForm";

const WizardSection = ({connectionString,nextStep}) => {
    return (
        <MDBRow className="mb-5">
            <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody>
                        <div className="d-flex align-items-center">
                            <WizardForm connectionString={connectionString} nextStep={nextStep}/>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
};

export default WizardSection;

