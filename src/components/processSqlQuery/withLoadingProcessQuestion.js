import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";
import {MDBAlert, MDBCol, MDBRow} from "mdbreact";


const withLoadingProcessQuestion = WrappedComponent => (

        function withLoadingContainer(props){
            const {processQuestionLoading, processQuestion, question, forwardProps} = props;
            if(processQuestionLoading){
                return (
                    <div>
                        <MDBRow>
                            <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                )
            }
            return <WrappedComponent {...props}/>
        }

);

export default withLoadingProcessQuestion;