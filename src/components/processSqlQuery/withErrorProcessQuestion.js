import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";
import {MDBAlert, MDBCol, MDBRow} from "mdbreact";

const withErrorProcessQuestion = WrappedComponent => (

    function withErrorContainer(props){
        const {processQuestionError, processQuestion, question, forwardProps} = props;
        if(processQuestionError){
            return (
                <div>
                    <MDBRow>
                        <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBAlert color="danger">
                                An error occurred while trying to process the question!
                            </MDBAlert>
                        </MDBCol>
                    </MDBRow>
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withErrorProcessQuestion;