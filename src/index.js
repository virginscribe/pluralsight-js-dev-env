import './index.css';
import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  //let usersBody = "";

  // result.foreach(user => {
    // usersBody += `<tr>
    // <td><a href="#" data-id="${result.user[0].id}" class="deleteUser">Delete</a></td>
    // <td>${result.user[0].id}</td>
    // <td>${result.user[0].firstName}</td>
    // <td>${result.user[0].lastName}</td>
    // <td>${result.user[0].email}</td>
    // </tr>`
  // });

  // result.array.forEach(function(user) {
  //   usersBody += `<tr>
  //   <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
  //   <td>${user.id}</td>
  //   <td>${user.firstName}</td>
  //   <td>${user.lastName}</td>
  //   <td>${user.email}</td>
  //   </tr>`
  // }, this);

  global.document.getElementById('users').innerHTML = "hi";
});

