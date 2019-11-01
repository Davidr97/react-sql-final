import React from 'react';

const trackChartStateHoc = (...props) =>
    (WrappedComponent) => (

        class trackStateHocContainer extends React.Component{

            trackState = (...args) => {
                this.setState(props.reduce((newProps,axis,index) => ({
                    ...newProps,
                    [axis]:args[index]
                }),{}));
            };

            render() {
                return (
                    <WrappedComponent {...this.props} {...this.state} trackState={this.trackState}/>
                );
            }

        }
    );

export default trackChartStateHoc;