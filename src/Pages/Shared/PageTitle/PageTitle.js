import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>
                {title} - BDMOTORS
                {/* <span className='title-green'>BD</span><span className='title-red'>MOTORS</span> */}
            </title>
        </Helmet>
    );
};

export default PageTitle;