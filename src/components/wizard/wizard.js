import React from 'react';
import StepWizard from 'react-step-wizard';
import ConnectToDatabasePage from "../pages/ConnectToDatabasePage";
import UploadFilePage from "../pages/UploadFilePage";
import QueryDatabasePage from "../pages/QueryDatabasePage";


class Wizard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            connectionString:null,
            uploaded:false,
            uploadState:false
        }
    }

    updateConnectionString = (connectionString) => {
        this.setState({
            connectionString
        })
    };

    onUpload = () => {
        this.setState({
            uploaded:true,
            uploadState:true
        })
    };

    onUploadError = () => {
        this.setState({
            uploaded:true,
            uploadState:false
        })
    };


    render() {
        const {connectionString} = this.state;
        const connectionStringProps = {
            connectionString,
            updateConnectionString: this.updateConnectionString
        };

        const {uploaded,uploadState} = this.state;
        const uploadFileProps = {
            uploaded,
            uploadState,
            onUpload:this.onUpload,
            onUploadError:this.onUploadError
        };

        return (
            <StepWizard>
                <ConnectToDatabasePage {...connectionStringProps}/>
                <UploadFilePage {...uploadFileProps}/>
                <QueryDatabasePage/>
            </StepWizard>
        );
    }

}

export default Wizard;