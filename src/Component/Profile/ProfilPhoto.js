import React from 'react';
import photo from '../../img/pic.jpg'
class ProfilePhoto extends React.Component{
    render(){
        return(
            <img src={photo} alt="Pic" />
        );
    };

}
export default ProfilePhoto;