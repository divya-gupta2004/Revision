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
    setupData();
}

function setupData() {
    var data = localStorage.getItem("studdata");        // getting data from  local storage
    console.log(data);
    var obj1 = JSON.parse(data);
    for(var sd of obj1){
        var roll = sd.roll;
        var name = sd.name;
        var branch = sd.branch;
        var js = parseFloat(sd.js);
        var dbms = parseFloat(sd.dbms);
        var oops = parseFloat(sd.oops);
        createRow(roll, name, branch, js, dbms, oops);

    }
    
}

function createRow(roll, name, branch, js, dbms, oops) {

    var total = js + dbms + oops;
    // (console.log(roll, name, branch, js, dbms, oops, total);)

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

    // Annonymous function (but it will have no name)
    btn.onclick = function() {
        // (tr.remove();   // 'remove()'  function is used in JS to remove any element  // another way to remove
        // btn.parentElement.parentElement.remove();  // another way to remove 
        // this.parentElement.parentElement.remove();  // another way to remove )

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
    tr.appendChild(td8);

    tb.appendChild(tr);
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

    // var total = js + dbms + oops;
    // // (console.log(roll, name, branch, js, dbms, oops, total);)

    // var td1 = document.createElement('td');
    // td1.innerText = roll;
    // var td2 = document.createElement('td');
    // td2.innerText = name;
    // var td3 = document.createElement('td');
    // td3.innerText = branch;
    // var td4 = document.createElement('td');
    // td4.innerText = js;
    // var td5 = document.createElement('td');
    // td5.innerText = dbms;
    // var td6 = document.createElement('td');
    // td6.innerText = oops;
    // var td7 = document.createElement('td');
    // td7.innerText = total;

    // var td8 = document.createElement('td');
    // var btn = document.createElement('button')
    // btn.innerText = "Delete";

    // // Annonymous function (but it will have no name)
    // btn.onclick = function() {
    //     // (tr.remove();   // 'remove()'  function is used in JS to remove any element  // another way to remove
    //     // btn.parentElement.parentElement.remove();  // another way to remove 
    //     // this.parentElement.parentElement.remove();  // another way to remove )

    //     var status = confirm("Are you sure to delete?");
    //     if (status) {
    //         tr.remove();
    //     }
    // }
    // td8.appendChild(btn);


    // var tr = document.createElement('tr');

    // tr.appendChild(td1);
    // tr.appendChild(td2);
    // tr.appendChild(td3);
    // tr.appendChild(td4);
    // tr.appendChild(td5);
    // tr.appendChild(td6);
    // tr.appendChild(td7);
    // tr.appendChild(td8);

    // tb.appendChild(tr);

    createRow(roll, name, branch,js, dbms, oops);
    
    evt.target.reset();
}



function save() {

    var studs = [];  // making an array

    var rows = tb.querySelectorAll("tr");  // 'tb' (table body) mei se saare 'tr' fetch kiya hai
    // alert(rows.length);

    for(var row of rows){

        var tds = row.querySelectorAll("td");  // ek ek 'tr' mei se saare 'td' fetch kiye hai

        var ob = {
            roll : tds[0].innerText,
            name : tds[1].innerText,
            branch : tds[2].innerText,
            js : tds[3].innerText,
            dbms : tds[4].innerText,
            oops : tds[5].innerText
        };
        studs.push(ob);   // object 'ob' ko array ke andar push kar diya

    }
    // console.log(studs);   
    

    // In this, the data is stored in the browser local storage
    localStorage.setItem("studdata", JSON.stringify(studs));        // in local storage, we can keep data in the form of STRINGS
    alert("data saved");
}