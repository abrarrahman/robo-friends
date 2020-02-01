import React from 'react';

const Card = (props) => {
    const {name,email,id} = props;
    return(
        <div className='tc bg-light-green dib br4 pa3 ma2 grow shadow-5 ba bw3'>
            <img src={`https://robohash.org/${id}123?set=set1`} alt='rafa bot pic'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;