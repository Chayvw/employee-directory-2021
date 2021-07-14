import React from 'react';

function Table(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <table className="responsive-table">
                        <tr key={props.item} style={{ textAlign: "justify" }}>
                            <td> <img src={props.picture} alt="profile picture"/></td>
                            <td>First Name:{props.firstName}</td>
                            <td>Last Name:{props.lastName}</td>
                            <td>Email:{props.email}</td>
                            <td>Age:{props.age}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;