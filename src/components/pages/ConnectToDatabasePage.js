import React from 'react';
import BreadcrumbSection from "../sections/common/BreadcrumbSection";
import ConnectionStringSection from "../sections/connectToDatabase/ConnectionStringSection";
import NavigationSection from "../sections/connectToDatabase/NavigationSection";


const ConnectToDatabasePage = ({connectionString,updateConnectionString,nextStep}) => {
    return (
        <React.Fragment>
            <BreadcrumbSection itemName="Connect to database"/>
            <ConnectionStringSection updateConnectionString={updateConnectionString}/>
            <NavigationSection connectionString={connectionString} nextStep={nextStep}/>
        </React.Fragment>
    )
};

export default ConnectToDatabasePage;