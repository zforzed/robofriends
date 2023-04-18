import React from "react";
import Card from './Card.js';

const CardList = ({robots}) => {   
   return(
      <div>
         {
            (robots.length === 0) ?
                <h1 className="light-green">Nothing found...</h1>
             : (
               robots.map((user, i) => {
                  return <Card
                     key={i}
                     id={robots[i].id}
                     name={robots[i].name}
                     username={robots[i].username}
                     email={robots[i].email}
                  />
               })
            )
         }
      </div>
   );
}

export default CardList;