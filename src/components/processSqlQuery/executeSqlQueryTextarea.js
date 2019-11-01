import React from 'react'
import { MDBInput, MDBAlert } from "mdbreact";

const ExecuteSqlQueryTextarea = ({field,form: { touched, errors },...props}) => {
    return (
        <div>
            <MDBInput
                type="textarea"
                label="Execute SQL query"
                rows="3"
                {...field} {...props}
            />
            {errors.query && touched.query ? (
                <MDBAlert color="danger">
                    Please provide non-empty SQL question!
                </MDBAlert>
            ) : undefined}
        </div>

    )
};

export default ExecuteSqlQueryTextarea;