import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
  // if (true) {
  //   throw new Error('NOOOOOoooooooOOOOOO!');
  // }
    return (
    <div>
    {
     robots.map((user,i) => {
       return <Card 
            key={i} 
            username={robots[i].username} 
            name={robots[i].name} 
            email={robots[i].email}
       />
    })
    }
    </div>
    );
}

export default Cardlist;