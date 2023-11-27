import React, { useState } from 'react';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    return (
        <div className="like-button-container">
      <button
         className={`like-button ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLikes(likes + 1);
            setLiked(true);
         }}
      >
         {<FlutterDashOutlinedIcon fontSize='small'/>} {likes} Wacks
      </button>
   </div>
    );
}
export default LikeButton;