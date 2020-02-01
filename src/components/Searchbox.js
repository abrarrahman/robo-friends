import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <div>
            <input  
                className='pa3 br4 ba b--green bg-lightest-blue mb4'   
                type='search' 
                name='q' 
                placeholder='search robots'
                onChange= {searchChange}>
            </input>
        </div>
    );
};

export default Searchbox;