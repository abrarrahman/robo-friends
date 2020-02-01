import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '70vh', border: 'black solid 3px'}}>
            {props.children};
        </div>
    );
}

export default Scroll;