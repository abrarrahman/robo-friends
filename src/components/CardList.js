import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
	if(false){
		const error = new Error("Intentional error");
		throw error;
	}
	return (
		<div>
			{
				robots.map((robot, index) => {
					return (
						<Card
							key={robot.id}
							id={robot.id}
							name={robot.name}
							email={robot.email}
						/>
					);
				})
      }
		</div>
	)
}

export default CardList;