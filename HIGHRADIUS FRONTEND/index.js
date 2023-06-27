let root = document.getElementsByClassName("grid-container")
let remove = document.getElementById("remove");
let edit = document.getElementById("edit");
let add = document.getElementById("add");

(
function(){
  fetch('http://localhost:8080/H2HBABBA2252/fetch')
  .then(response=>{
    console.log(response.json())
  })
  .then(jsonResult =>{
    console.log(jsonResult)
  })
  .catch(error =>{
    console.log(error)
  })
}
)()

add.addEventListener("click", function () {
    modal.style.display = "block";
    modal.childNodes[3].textContent = "Add Invoice";
    let allclasses = root[0].classList;
    allclasses.add("is-blurred");
    root[0].classList = allclasses;
    document.getElementById("modalContent").innerHTML = `<form action="http://localhost:8080/Summer_Internship_Backend/" method="POST" style="justify-content: center;"><div id="leftform-section"><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Customer Name</label><input type="text" name="Customer Name" required="true" id="customername"></div><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Customer No.</label><input type="text" name="Customer No." required="true" id="customernumber"></div><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Invoice No.</label><input type="text" name="Invoice No." required="true" id="invoicenumber"></div><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Invoice Amount</label><input type="text" name="Invoice Amount" required="true" id="invoiceamount"></div></div><div id="rightform-section"><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Due Date</label><input type="date" name="Due Date" required="true" id="date"></div><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Notes</label><textarea cols="10" type="text" name="Notes" required="true" id="notes" style="height: 9em;"></textarea></div></div><div id="bottomform-section"><button class="no-border-button" type="button">Cancel</button><div><button type="reset" class="tool-button danger">Clear</button><button type="submit" class="tool-button">Add</button></div></div></form>`

   try {
    document.getElementById(`bottomform-section`).childNodes[0].addEventListener("click",function(){
        modal.style.display = "none";
        console.log('clicked');
        root[0].classList.remove("is-blurred");
    }) 
   } catch (error) {
       console.log("bottom",error);
   }
    
});


edit.addEventListener('click',function(){
    modal.style.display = "block";
    modal.childNodes[3].textContent = "Edit Invoice";
    let allclasses = root[0].classList;
    allclasses.add("is-blurred");
    root[0].classList = allclasses;
    document.getElementById("modalContent").innerHTML = `<form action="http://localhost:8080/Summer_Internship_Backend/update-invoice" method="POST" style="display: flex; flex-direction: column;"><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Invoice Amount</label><input type="text" name="Invoice Amount" required="false" id="invoiceamount"></div><div style="display: flex; justify-content: space-between;"><label style="margin-right: 10px;">Notes</label><textarea cols="10" type="text" name="Notes" required="false" id="notes" style="height: 9em;"></textarea></div><input hidden="" id="invoiceid" name="invoiceid"><div id="bottomform-section" style="width: auto;"><button class="no-border-button" type="button">Cancel</button><div><button type="reset" class="tool-button danger">Reset</button><button type="submit" class="tool-button">Save</button></div></div></form>`
    document.getElementById(`bottomform-section`).childNodes[0].addEventListener("click",function(){
        modal.style.display = "none";
        console.log('clicked');
        root[0].classList.remove("is-blurred");
    })
    
    
})


remove.addEventListener('click',function(){
    modal.style.display = "block";
    modal.childNodes[3].textContent = "Edit Invoice";
    let allclasses = root[0].classList;
    allclasses.add("is-blurred");
    root[0].classList = allclasses;
    document.getElementById("modalContent").innerHTML = `<form action="http://localhost:8080/Summer_Internship_Backend/remove-invoice" method="POST" style="display: flex; flex-direction: column;"><p style="width: 400px;">You'll lose your record(s) after this action. We can't recover them once you delete.<br><br> Are you sure you want to <span style="color:hsla(0, 100%, 68%, 1)">permanently delete</span> them?</p><div id="bottomform-section" style="width: auto; justify-content: end;"><div><button class="no-border-button" type="button">Cancel</button><button type="submit" class="tool-button danger">Delete</button></div></div><input hidden="" id="invoiceid" name="invoiceid"></form>`
    document.getElementById(`bottomform-section`).childNodes[0].addEventListener("click",function(){
        modal.style.display = "none";
        console.log('clicked');
        root[0].classList.remove("is-blurred");
    })
    
})

document.getElementsByClassName("close")[0].addEventListener("click", function(){
    modal.style.display = "none";
    root[0].classList.remove("is-blurred");
});


function addRowsTo(){
    let data = JSON.parse(localStorage.getItem("doc"));
    let table = document.getElementById("invoice-table");
    let tbod = table.getElementsByTagName("tbody")[0];
    if (data) {
      for (
        let index = +sessionStorage.getItem("from");
        index < +sessionStorage.getItem("from") + 11;
        index++
      ) {
        doc = data[index];

          // constructing the row
          let newrow = tbod.insertRow(table);
          newrow.style = `--animation-order: ${index};`;

          // create the cells
          let cell0 = newrow.insertCell(0);
          let customerName = newrow.insertCell(1);
          let customerNumber = newrow.insertCell(2);
          let InvoiceNumber = newrow.insertCell(3);
          let InvoiceAmount = newrow.insertCell(4);
          let DueDate = newrow.insertCell(5);
          let PredictedPaymentDate = newrow.insertCell(6);
          let Notes = newrow.insertCell(7);

          // set the values
          cell0.classList.add("checkbox");
          cell0.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a{fill:none;}.b{fill:#97a1a9;}</style></defs><path class="a" d="M0,0H24V24H0Z"/><path class="b" d="M19,5V19H5V5H19m0-2H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z"/></svg>`;
          customerName.innerText = doc.customer_name;
          customerNumber.innerText = doc.customer_number;
          InvoiceNumber.innerText = doc.invoice_number;
          InvoiceAmount.innerText = doc.invoice_amount;
          DueDate.innerText = doc.due_date;
          PredictedPaymentDate.innerText = doc.predicted_payment_date;
          Notes.innerText = doc.notes;
      }
    }
}