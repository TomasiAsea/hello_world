

const users = [
    {firstName: 'John', lastName: 'Doe', childName: 'Doe', childAge: 2, childGender: 'male', Id: 'CM1223456', telNo: +256777132345, address: 'kampala', email: 'John@example.com', country: 'Uganda', role: 'admin', userName: 'JDoe',password:'1234abc'},
    {firstName: 'Johnnie', lastName: 'Doe', childName: 'Doe', childAge: 2, childGender: 'male', Id: 'CM1223456', telNo: +256777132345, address: 'kampala', email: 'johnnie@example.com', country: 'Uganda', role: 'parent', userName: 'JDoe',password:'1234abc'},  
]

// Function to store user data in local storage
function storeUserData(usersArray,) {
    const existingUsers = JSON.parse(localStorage.getItem('usersData')) || [];
    const updatedUsers = [...existingUsers, ...usersArray];
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));
}

// Function to display users in the table
function displayUsers(usersArray) {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Clear existing table rows

    usersArray.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.childName}</td>
            <td>${user.childAge}</td>
            <td>${user.childGender}</td>
            <td>${user.id}</td>
            <td>${user.telNo}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td>${user.country}</td>
            <td>${user.role}</td>
            <td>${user.userName}</td>
            <td>${user.password}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load existing users from local storage or initialize an empty array
const storedUsers = JSON.parse(localStorage.getItem('usersData')) || [];

// Display existing users in the table
displayUsers(storedUsers);

// Function to handle form submission
document.getElementById("addUserForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve input values
    const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const childName = document.getElementById('childName').value;
          const childAge = document.getElementById('childAge').value;
          const childGender = document.getElementById('childGender').value;
          const id = document.getElementById('id').value;
          const telNo = document.getElementById('telNo').value;
          const email = document.getElementById('email').value;
          const address = document.getElementById('address').value;
          const country = document.getElementById('country').value;
          const role = document.getElementById('role').value;
          const userName = document.getElementById('userName').value;
          const password = document.getElementById('password').value;

    // Create new user object
    const newUser = {
        firstName: firstName,
              lastName: lastName,
              childName: childName,
              childAge: childAge,
              childGender: childGender,
              id: id,
              telNo: telNo,
              email: email,
              address: address,
              country: country,
              role: role,
              userName: userName,
              password: password
    };

   // Store new user data in local storage
   storeUserData([newUser]); // Pass newUser as an array

// Reload users from local storage and display in the table
const updatedUsers = JSON.parse(localStorage.getItem('usersData')) || [];
displayUsers(updatedUsers);

// Clear the form fields
document.getElementById("addUserForm").reset();
};


  