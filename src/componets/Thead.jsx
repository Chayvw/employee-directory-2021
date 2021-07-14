import React from 'react';

function Thead(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <table className="responsive-table">
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
            </div>
        </div>

    );
}

export default Thead;