import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";
import {MDBRow} from "mdbreact";

const processQuestionPresenter = ({processQuestion, question, forwardProps}) => (
    <MDBRow>
        <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
    </MDBRow>
);

export default processQuestionPresenter;