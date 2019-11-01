import React from 'react'
import { MDBInput, MDBAlert } from "mdbreact";

const ProcessQuestionTextarea = ({field,form: { touched, errors },...props}) => {
    return (
        <div>
            <MDBInput
                type="textarea"
                label="Process question"
                rows="3"
                {...field} {...props}
            />
            {errors.question && touched.question ? (
                <MDBAlert color="danger">
                    Please provide non-empty question!
                </MDBAlert>
            ) : undefined}
        </div>

    )
};

export default ProcessQuestionTextarea;