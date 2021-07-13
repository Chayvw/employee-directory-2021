import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
           <nav>
              <Link to='/home'> 
              <a class="waves-effect waves-light btn-small">home</a>
              </Link>
              <Link to='/search'>
              <a class="waves-effect waves-light btn-small">search</a>
              </Link> 
             
           </nav>
        </div>
    );
}

export default NavBar;