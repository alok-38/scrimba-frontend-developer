let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');

const pushValuesToTheArray = () => {
    const inputValue = inputEl.value.trim();
    if (inputValue !== "") {
        // Split the input value into an array using comma as the delimiter
        const URLS = inputValue.split(',');
        // Trim each URL and push to myLeads array
        URLS.forEach(URL => {
            const trimmedURL = URL.trim();
            if (trimmedURL !== "") {
                myLeads.push(trimmedURL);
            }
        });
        inputEl.value = "";
        console.log(myLeads);
    }
}

inputBtn.addEventListener('click', pushValuesToTheArray);