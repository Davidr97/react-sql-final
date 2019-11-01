import React from 'react';
import SuccessfulMessage from "./successfulMessage";
import ErrorMessage from "./errorMessage";
import {FileUpload} from 'primereact/fileupload';


const uploadFilePresenter = ({onUpload,onUploadError,uploaded,uploadState,options}) => {

    let messagesHtml = null;
    if(uploaded) {
        if (uploadState) {
            messagesHtml = (
                <SuccessfulMessage/>
            )
        } else {
            messagesHtml = (
                <ErrorMessage/>
            )
        }
    }

    return <div>
        <FileUpload onUpload={onUpload} onError={onUploadError} {...options}/>
        {messagesHtml}
    </div>
};

export default uploadFilePresenter;