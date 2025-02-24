function formOnSubmit(e) {
  e.preventDefault();
  console.log("getData", getData());
  const formattedObj = getFormattedData(e);
  console.log("formattedObj", formattedObj);
  //   fetch("http://localhost:3000/posts", {
  //     method: "POST",
  //     body: JSON.stringify(formattedObj),
  //   });
}

function getFormattedData(e) {
  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData.entries());
  const selectedElements = document.querySelectorAll(
    "input[type=checkbox][name=interest]:checked"
  );
  const vals = Array.from(selectedElements).map((e) => e.value);
  formObj.interest = vals;
  return formObj;
}

function getData() {
  const formData = {};
  const firstName = document.getElementById("firstName").value;
  formData.firstName = firstName;
  const middleName = document.getElementById("middleName").value;
  formData.middleName = middleName;
  const lastName = document.getElementById("lastName").value;
  formData.lastName = lastName;
  const selectedElements = document.querySelectorAll(
    "input[type=checkbox][name=interest]:checked"
  );
  const vals = Array.from(selectedElements).map((e) => e.value);
  formData.interest = vals;
  return formData;
}
