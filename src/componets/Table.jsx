import React from 'react';

function Table(props) {
    return (
        <div>
            <table class="centered">
            <tr key={props.item} style={{ textAlign: "justify" }}>
              <td> <img src={props.picture} /></td>
              <td>First Name:{props.firstName}</td>
              <td>Last Name:{props.lastName}</td>
              <td>Email:{props.email}</td>
              <td>Age:{props.age}</td>
            </tr>
          </table>
        </div>
    );
}

export default Table;