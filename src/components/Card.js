import React from "react";

const Card = ({name,email,id,username}) => {  
   return(      
      <div className="bg-light-green dib br3 pa3 mv3 mh4 grow bw2 shadow-5 w-15">
         <img src={`https://robohash.org/${id}`} alt='robots'/>
         <div>
            <h2>{name}</h2>
            <p>email: <i>{email}</i></p>
            <p>username: <i>{username}</i></p>
         </div>
      </div>
   );
}

export default Card;