import React from 'react';


const trackChartTypeState = (WrappedComponent) => (

    class trackChartStateHocContainer extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                chartType: undefined
            }
        }

        trackChartState = (chartType) => {
            this.setState({chartType});
        };

        render() {
            return (
                <WrappedComponent {...this.props} {...this.state} trackChartType={this.trackChartState}/>
            );
        }
    });

export default trackChartTypeState;