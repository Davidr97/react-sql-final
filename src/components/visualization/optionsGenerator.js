import React from 'react';

const optionsGenerator = values =>
    values.map((value,index) => <option value={value} key={index}>{value}</option>);

export default optionsGenerator;