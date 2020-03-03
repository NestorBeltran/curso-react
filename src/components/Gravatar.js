import React from 'react';
import md5 from 'md5'

const Gravatar = (props) =>{
  let hash;
  if(props.email !== undefined){
    let email = props.email;
    hash = md5(email);
  }

  return(
    <img 
      className={props.className} 
      src={ props.src ? props.src : `https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"/>
  )

}

export default Gravatar;