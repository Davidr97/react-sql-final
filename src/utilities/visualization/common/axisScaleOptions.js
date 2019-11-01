
const axisScaleOptions = (columnType, axis) => {
    if(columnType === 'string'){
        return {
            [axis] : {
                type:'point'
            }
        }
    }else if(columnType === 'numeric'){
        return {
            [axis] : {
                type:'linear',
                min: 0,
                max: 'auto'
            }
        }
    }else if(columnType === 'date'){
        const format = axis === 'xScale' ? 'xFormat' : 'yFormat';
        return {
            [axis] : {
                type:'time',
                format: '%Y-%m-%d',
                precision: 'day'
            },
            [format]:"time:%Y-%m-%d"
        }
    }
};

export default axisScaleOptions;