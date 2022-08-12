import React from 'react';
import MyPosts from './MyPosts/Posts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.gopnik.posts} />
    </div>
  )
}

export default Profile;