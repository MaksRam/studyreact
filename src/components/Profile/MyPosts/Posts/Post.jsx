import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
          <img src='http://jalgpall.ee/images/players/dcd7be6bb8414be9ff287570f9270802'/>
          {props.message}
          <div>
          <span>like</span> {props.likesCount}
          <span>dislike</span> {props.dislikesCount}
          </div>
        </div>
    )
  
  
}

export default Post;