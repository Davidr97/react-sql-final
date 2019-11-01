import React from 'react';
import logo from "../../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <a href="javascript:;">
                    <MDBListGroupItem>
                        <MDBIcon icon="database" className="mr-3"/>
                        Connect to database
                    </MDBListGroupItem>
                </a>
                <a href="javascript:;">
                    <MDBListGroupItem>
                        <MDBIcon icon="file-upload" className="mr-3"/>
                        Upload file
                    </MDBListGroupItem>
                </a>
                <a href="javascript:;">
                    <MDBListGroupItem>
                        <MDBIcon icon="search" className="mr-3"/>
                        Query database
                    </MDBListGroupItem>
                </a>
            </MDBListGroup>
        </div>
    );
};

export default TopNavigation;