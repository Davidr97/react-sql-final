import React from 'react';
import postData from "../../utilities/postData";

const processQuestionHoc = url =>
    WrappedComponent => (

        function processQuestionHocContainer(props){

            const processQuestion = textInput => postData(url, textInput);

            return (
                <WrappedComponent {...props} processQuestion={processQuestion}/>
            )
        }

    );

export default processQuestionHoc;