import React from 'react';
import BreadcrumbSection from "../sections/common/BreadcrumbSection";
import UploadFileSection from "../sections/uploadFile/uploadFileSection";
import NavigationSection from "../sections/uploadFile/NavigationSection";


const UploadFilePage = ({uploaded,uploadState,onUpload,onUploadError,previousStep,nextStep}) => {
    const uploadFileProps = {
        uploaded,
        uploadState,
        onUpload,
        onUploadError
    };

    const navigationProps = {
        uploaded,
        uploadState,
        previousStep,
        nextStep
    };

    return (
        <React.Fragment>
            <BreadcrumbSection itemName="Upload file"/>
            <UploadFileSection {...uploadFileProps}/>
            <NavigationSection {...navigationProps}/>
        </React.Fragment>
    )
};

export default UploadFilePage;