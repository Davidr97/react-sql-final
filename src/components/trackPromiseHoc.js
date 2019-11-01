import React from 'react';


const trackPromiseHoc = propName => {

    const dataProp = `${propName}Data`;
    const loadingProp = `${propName}Loading`;
    const errorProp = `${propName}Error`;

    return WrappedComponent => (

        class trackPromiseHocContainer extends React.Component {

            constructor(props) {
                super(props);
                this.state = {
                    data: null,
                    loading: false,
                    error: null
                }
            }

            trackPromise = (...args) => {
                const {[propName] : promiseCallback} = this.props;
                this.setState({
                    data: null,
                    loading: true,
                    error: false
                });
                promiseCallback(...args)
                    .then(request => request.json())
                    .then(data => this.setState({
                        data: data,
                        loading: false,
                        error: false
                    }))
                    .catch(error => this.setState({
                        data: null,
                        loading: false,
                        error: error
                    }))
            };

            render() {
                const newProps = {
                    [dataProp]:this.state.data,
                    [loadingProp]:this.state.loading,
                    [errorProp]:this.state.error,
                    [propName]:this.trackPromise
                };
                return (
                    <WrappedComponent {...this.props} {...newProps}/>
                );
            }
        }


    );
};

export default trackPromiseHoc;