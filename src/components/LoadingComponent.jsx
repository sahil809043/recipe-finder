import React from 'react';
import UseAnimations from 'react-useanimations';
import loading2 from 'react-useanimations/lib/loading2';

function LoadingComponent() {
    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-60 backdrop-blur-sm z-50">
                <UseAnimations animation={loading2} size={96} /> {/* Adjust size */}
            </div>
        </>
    );
}

export default LoadingComponent;
