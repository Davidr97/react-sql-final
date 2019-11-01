import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";
import ExecuteSqlQuery from "../../configs/processSqlQuery/executeSqlQuery";
import {MDBRow} from "mdbreact";

const withDataProcessQuestion = WrappedComponent => (

    function withDataContainer(props){
        const {processQuestionData, processQuestion, question, forwardProps} = props;
        if(processQuestionData){
            const sqlQuery = "SELECT * FROM MOVIES AS m where m.year > 1997";
            return (
                <MDBRow>
                    <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
                    <ExecuteSqlQuery sqlQuery={sqlQuery}/>
                </MDBRow>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withDataProcessQuestion;