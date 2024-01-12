let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('inputBtn');

// Push the value "www.awesomelead.com" to myArray when the input button is clicked
const pushElementsTomyLeads = () => {
    myLeads.push('www.awesomelead.com');
    alert(myLeads);
}

inputBtn.addEventListener('click', pushElementsTomyLeads);


