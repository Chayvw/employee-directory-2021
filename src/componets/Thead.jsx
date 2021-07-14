import React from 'react';

function Thead(props) {
    return (
        <div>
             <table class="justify">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th onClick={props.sortFirstName}>First Name</th>
            <th onClick={props.sortLastName}>Last Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
      </table> 
        </div>
    );
}

export default Thead;