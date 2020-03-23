import React from 'react';

import UserItem from './UserItem'
import './UsersList.css';
import Card from '../../shared/components/UIElements/Card'

const UsersList = props => {

  if (props.items.length === 0) {
    return (
      
    <div >
      <Card>
        <h2>No users found.</h2>
      </Card>
    </div>
  
    );
  }

  return <ul className="users-list">
    {props.items.map( user => (
      <UserItem 
        key={user.id} 
        id={user.id} 
        name={user.name} 
       />
    ))
    }
  </ul>
};

export default UsersList;