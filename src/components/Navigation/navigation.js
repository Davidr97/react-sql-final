import React from 'react';

const Navigation = (props) => {

    return (
        <ul className="nav flex-column sidebar">
            <li className="nav-item">
                            <span className="fa-stack fa-2x circle-size">
                              <i className="fa fa-circle fa-stack-2x"/>
                              <strong className="fa-stack-1x text-primary">1</strong>
                            </span>
                <span>asd</span>
            </li>
            <li className="nav-item">
                <div className='vertical-line'/>
            </li>
            <li className="nav-item">
                            <span className="fa-stack fa-2x circle-size">
                              <i className="fa fa-circle fa-stack-2x"/>
                              <strong className="fa-stack-1x text-primary">1</strong>
                            </span>
                <span>asd</span>
            </li>
            <li className="nav-item">
                <div className='vertical-line'/>
            </li>
            <li className="nav-item">
                            <span className="fa-stack fa-2x circle-size">
                              <i className="fa fa-circle fa-stack-2x"/>
                              <strong className="fa-stack-1x text-primary">1</strong>
                            </span>
                <span>asd</span>
            </li>
        </ul>
    )
};

export default Navigation;