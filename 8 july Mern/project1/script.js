function init() {

    // var x;  // this is local variable if we use var keyword
    
    // all the data will come in the input
    rollbox = document.getElementById('rollbox');    // this is global variable. Without using any var, let or const keyword, global variable is made
    namebox = document.getElementById('namebox');
    branchbox = document.getElementById('branchbox');
    jsbox = document.getElementById('jsbox');
    dbmsbox = document.getElementById('dbmsbox');
    oopsbox = document.getElementById('oopsbox');

    tb = document.getElementById('tb');
}

function add(evt){

    evt.preventDefault();

    // this will add functionality to the 'Add Student' button, that when we click this button all the data will be added 
    var roll = rollbox.value;
    var name = namebox.value;
    var branch = branchbox.value;
    var js = parseFloat(jsbox.value);
    var dbms = parseFloat(dbmsbox.value);
    var oops = parseFloat(oopsbox.value);
    var total = js + dbms + oops;
    // console.log(roll, name, branch, js, dbms, oops, total);

    var td1 = document.createElement('td');
    td1.innerText = roll;
    var td2 = document.createElement('td');
    td2.innerText = name;
    var td3 = document.createElement('td');
    td3.innerText = branch;
    var td4 = document.createElement('td');
    td4.innerText = js;
    var td5 = document.createElement('td');
    td5.innerText = dbms;
    var td6 = document.createElement('td');
    td6.innerText = oops;
    var td7 = document.createElement('td');
    td7.innerText = total;

    var td8 = document.createElement('td');
    var btn = document.createElement('button')
    btn.innerText = "Delete";
    // annonymous function (but it will have no name)
    btn.onclick = function() {
        // tr.remove();   // 'remove()'  function is used in JS to remove any element  // another way to remove
        // btn.parentElement.parentElement.remove();  // another way to remove 
        // this.parentElement.parentElement.remove();  // another way to remove 

        var status = confirm("Are you sure to delete?");
        if (status) {
            tr.remove();
        }
    }
    td8.appendChild(btn);


    var tr = document.createElement('tr');

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    tb.appendChild(tr);

    evt.target.reset();
}