import React from 'react'
import { MDBInput, MDBAlert } from "mdbreact";

const ConnectionStringTextarea = ({field,form: { touched, errors,isValid,isSubmitting },...props}) => {
    return (
        <div>
            <MDBInput
                type="textarea"
                label="Connection string"
                rows="5"
                {...field} {...props}
            />
            {isValid && isSubmitting ? (
                <MDBAlert color="success">
                    The connection string was saved successfully!
                </MDBAlert>
            ) : undefined}
            {errors.connectionString && touched.connectionString ? (
                <MDBAlert color="danger">
                    Please provide valid connection string!
                </MDBAlert>
            ) : undefined}
        </div>

    )
};

export default ConnectionStringTextarea;