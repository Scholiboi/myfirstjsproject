const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")

let myLeads = []


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render_my_own_leads()
})


function render_my_own_leads() 
{
    let myListItems = ""
    for (let i = 0; i < myLeads.length;i++) 
        {
            myListItems += `
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
                `
        }
    ulEl.innerHTML = myListItems  
}
