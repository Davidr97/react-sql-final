import React from 'react';
import BreadcrumbSection from "../sections/common/BreadcrumbSection";
import QueryDatabaseSection from "../sections/queryDatabase/QueryDatabaseSection";
import NavigationSection from "../sections/queryDatabase/NavigationSection";


const QueryDatabasePage = ({previousStep}) => {
    return (
        <React.Fragment>
            <BreadcrumbSection itemName="Query database"/>
            <QueryDatabaseSection/>
            <NavigationSection previousStep={previousStep}/>
        </React.Fragment>
    )
};

export default QueryDatabasePage;