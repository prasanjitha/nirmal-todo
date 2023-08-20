import React from 'react';

import ClipLoader from "react-spinners/ClipLoader";

const MyLoader = ({ loadigStatus }) => {
    return (
        <ClipLoader
            color={'#00e0ff'}
            loading={loadigStatus}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default MyLoader;