
const options = {
    margin : { top: 60, right: 140, bottom: 70, left: 90 },
    blendMode : "multiply",
    axisTop : null,
    axisRight : null,
    axisBottom : null,
    axisLeft: null,
    legends : [
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }]
};

export default options;