import React from 'react';

const forwardProps = WrappedComponent => (

    class forwardPropsContainer extends React.Component{

       forwardProps = (prevProps) => {
           this.setState({
               ...prevProps
           })
       };

        render() {
            return (
                <WrappedComponent {...this.props} {...this.state} forwardProps={this.forwardProps}/>
            )
        }

    }

);

export default forwardProps;