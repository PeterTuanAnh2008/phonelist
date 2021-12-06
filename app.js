
let addForm = false;

function showForm() {
  addForm = true;
  if (addForm == true) {
    document.getElementById("changeadd").innerHTML = `<div class="aF">
    <form id="form" onsubmit="return false">
    <input type="hidden" id="index"/>
    <input type="text" placeholder="Name" name="name" id="name"/>

    <input type="email" placeholder="email" name="email" id="email"/>

    <input type="text" placeholder="add" required name="add" id="add"/>

    <input type="text" placeholder="phone" name="phone"  id="phone"/>

    <input type="button" class="btn bg-green" id="save" onclick="Add(event)" value="Add"/>

    <input style="display: none;" type="button" class="padding-10" id="edit" onclick="changeavaname(event)" value="Edit" />
  </form>
  </div>
    `;

  }
}

function Add(event) {
  event.preventDefault();
  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  let add = document.forms["form"]["add"].value;
  let phone = document.forms["form"]["phone"].value;
  if (localStorage.getItem("info")) {
    info = JSON.parse(localStorage.getItem("info"));
  }

  if (name && email && add && phone) {
    info.push({ name, email, add, phone });

    localStorage.setItem("info", JSON.stringify(info));
  }

  let renderPhoneList = info
    .map((value, index) => {
      return `<tr>
  <td><input type="checkbox"></td>
  <td>${value.name}</td>
  <td>${value.email}</td>
  <td>${value.add}</td>
  <td>${value.phone}</td>
  <td>
  <i class="fas fa-pen" onclick="showForm()
  editName(${index})"></i>
    <i class="fas fa-trash" onclick="deleteName()"></i>
  </td>
  </tr>`
  ;
    }) 
    table.innerHTML = `<tr>
    <th><input type="checkbox"></th>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Phone</th>
    <th>Action</th>
  </tr>
  </thead>
  ${renderPhoneList}`;
  resetInput();
}


let table = document.getElementById("table");
table.innerHTML = `
<thead></thead>
<tr>
  <th><input type="checkbox"></th>
  <th>Name</th>
  <th>Email</th>
  <th>Address</th>
  <th>Phone</th>
  <th>Action</th>
</tr>
</thead>`;

var info;
if (localStorage.getItem("info")) {
  info = JSON.parse(localStorage.getItem("info"));
  let renderPhoneList = info
    .map((value, index) => {
      return `
      <tr>
<td><input type="checkbox"></td>
<td>${value.name}</td>
<td>${value.email}</td>
<td>${value.add}</td>
<td>${value.phone}</td>
<td>
  <i class="fas fa-pen" onclick="showForm()
  editName(${index})"></i>
  <i class="fas fa-trash" onclick="deleteName()"></i>
</td>
</tr>`;
    })
}
