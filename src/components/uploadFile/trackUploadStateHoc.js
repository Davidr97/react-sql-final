import React from 'react';

const trackUploadStateHoc = WrappedComponent => (

    class trackUploadStateHocContainer extends React.Component{

        constructor(props) {
            super(props);
            this.state = {
                uploaded:false,
                state:false
            }
        }

        onUpload = () => {
            this.setState({
                uploaded:true,
                state:true
            })
        };

        onError = () => {
            this.setState({
                uploaded:true,
                state:false
            })
        };

        render() {
            const newProps = {
                uploaded:this.state.uploaded,
                state:this.state.state,
                onUpload:this.onUpload,
                onError:this.onError
            };

            return(
                <WrappedComponent {...this.props} {...newProps}/>
            )
        }
    }

);

export default trackUploadStateHoc;