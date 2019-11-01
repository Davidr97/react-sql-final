import React from 'react';

const uploadFileHoc = (options) =>
    WrappedComponent => (

        function uploadFileHocContainer(props){
            return (
                <WrappedComponent {...props} options={options}/>
            )
        }

    );

export default uploadFileHoc;