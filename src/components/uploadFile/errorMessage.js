import React from 'react';
import {MDBAlert} from "mdbreact";

const errorMessage = () => (
    <MDBAlert color="danger">
        An error occurred while trying to upload the file!
    </MDBAlert>
);

export default errorMessage;