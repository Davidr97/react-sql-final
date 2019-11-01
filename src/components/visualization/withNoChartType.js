import React from 'react';


const withNoChartType = (WrappedComponent) => (

    function withNoChartTypeContainer(props){
        const {chartTypes} = props;
        if(chartTypes.length === 0){
            return (
                <div>
                    No chart can be displayed
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withNoChartType;