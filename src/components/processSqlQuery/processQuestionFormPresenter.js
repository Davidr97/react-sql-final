import React from 'react';
import ProcessQuestionForm from "./processQuestionForm";
import {MDBCard, MDBCardBody, MDBRow, MDBCol} from "mdbreact";

const processQuestionFormPresenter = ({processQuestion, question, forwardProps}) => (

    <MDBCol md="6">
        <MDBCard>
            <MDBCardBody>
                <ProcessQuestionForm processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>

);

export default processQuestionFormPresenter;