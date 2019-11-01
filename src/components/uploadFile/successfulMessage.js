import React from 'react';
import {MDBAlert} from "mdbreact";

const successfulMessage = () => (
    <MDBAlert color="success">
        The file was uploaded successfully!
    </MDBAlert>
);

export default successfulMessage;