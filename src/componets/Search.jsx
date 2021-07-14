import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from './Table';
import Thead from './Thead';

function Search(props) {
  // setting my state where I can use getEmployeeData in my axios call once i receive my response
  const [employeeData, getEmployeeData] = useState([])
  const [filterEmployeeByFirstName, getFilterEmployeeByFirstName] = useState([])
  const [filterEmployeeByLastName, getFilterEmployeeByLastName] = useState([])

  // useEffect is making an api call when the page loads and we are using getEmployeeData
  useEffect(() => {
    console.log('useEffect has been called!');
    const url = 'https://randomuser.me/api/?results=20';

    axios({

      url: url,
      method: 'GET'
    })
      .then(res => {
        const employeeResponse = res.data.results;
        getEmployeeData(employeeResponse)
        console.log(employeeData)
        console.log(employeeResponse)


      }).catch(err => {
        console.log(err, "Error with request")
      })

  }, []);
  // function where the user will be able to sort employees by first name
  const sortByFirstName = () => {
    getFilterEmployeeByFirstName(employeeData.sort((a, b) => {
      const nameA = a.name.first;
      const nameB = b.name.first;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;


    }));

  }

  // function where the user will be able to sort employees by last name
  const sortByLastName = () => {
    getFilterEmployeeByLastName(employeeData.sort((a, b) => {
      const nameA = a.name.last;
      const nameB = b.name.last;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;


    }));

  }

  // will use the results from our api call to map through our array and return a new array in a table with the select employee information. 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Thead sortFirstName={sortByFirstName}
              sortLastName={sortByLastName}
            />
            {employeeData && employeeData.map((emp, item) => {
              return (
                <Table picture={emp.picture.medium}
                  firstName={emp.name.first}
                  lastName={emp.name.last}
                  email={emp.email}
                  age={emp.dob.age}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;