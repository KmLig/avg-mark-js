setInterval(myTimer, 1000);

function myTimer(){
    const date = new Date();
    document.getElementById("timer").innerHTML = date.toLocaleTimeString();
}

const testScore = {
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
}

let i = 0;
let table = document.getElementById("displayTable");

function inputData() {
    testScore.name = document.getElementById("name").value;
    testScore.math = document.getElementById("math").value;
    testScore.physical = document.getElementById("physical").value;
    testScore.chemistry = document.getElementById("chemistry").value;
    
    if(testScore.name == "") {        
        return alert("Vui lòng nhập tên");         
    }
    if(testScore.math == "" || testScore.math < 0 || testScore.math > 10) {        
        return alert("Vui lòng nhập lại điểm toán");         
    }
    if(testScore.physical == "" || testScore.physical < 0 || testScore.physical > 10) {        
        return alert("Vui lòng nhập lại điểm lý");         
    }
    if(testScore.chemistry == "" || testScore.chemistry < 0 || testScore.chemistry > 10) {        
        return alert("Vui lòng nhập lại điểm hóa");         
    }

    document.getElementById("name").value = "";
    document.getElementById("math").value = "";
    document.getElementById("physical").value = "";
    document.getElementById("chemistry").value = "";
    
    i++;
    
    let row = table.insertRow(i);
    row.insertCell(0).innerHTML = i;
    row.insertCell(1).innerHTML = testScore.name;
    row.insertCell(2).innerHTML = testScore.math;
    row.insertCell(3).innerHTML = testScore.physical;
    row.insertCell(4).innerHTML = testScore.chemistry;
    row.insertCell(5).innerHTML = "?";
    row.insertCell(6).innerHTML = "";
    row.insertCell(7).innerHTML = "<button class='btnDelete'>Xóa</button>";
}

function caculateAvg(){    
    for (let i = 1; i < table.rows.length; i++){
        let x = table.rows[i].cells[2].innerHTML;
        let y = table.rows[i].cells[3].innerHTML;
        let z = table.rows[i].cells[4].innerHTML;
        let avg = ((parseFloat(x)+ (parseFloat(y)) + parseFloat(z))/3).toFixed(1);
        table.rows[i].cells[5].innerHTML = avg;
    }
}

function identifyGoodStudent(){
    for (let i = 1; i < table.rows.length; i++){
        if (parseFloat(table.rows[i].cells[5].innerHTML) >= 8) {
            table.rows[i].cells[5].style.color = "yellow";
            table.rows[i].cells[5].style.fontSize = "large";
            
            table.rows[i].cells[6].innerHTML = "Giỏi";
            table.rows[i].cells[6].style.color = "yellow";
            table.rows[i].cells[6].style.fontSize = "large";
        }
    }
}

function insertionSort() {      
    for (let i = 1; i < table.rows.length - 1; i++) {
        for (let j = i + 1; j < table.rows.length; j++) {
            let y = parseFloat(table.rows[j].cells[5].innerHTML);
            let x = parseFloat(table.rows[i].cells[5].innerHTML);
            if (y > x) { 
                let parentNode = table.rows[j].parentNode;
                console.log(parentNode);
                parentNode.insertBefore(table.rows[j], table.rows[i]);
            }
        }
    }
}

function reverseSort() {
    for (let i = 1; i < table.rows.length; i++) {
        for (let j = i + 1; j < table.rows.length; j++) {
            let y = parseFloat(table.rows[j].cells[0].innerHTML);
            let x = parseFloat(table.rows[i].cells[0].innerHTML);
            if (y < x) { 
                let parentNode = table.rows[j].parentNode;
                console.log(parentNode);
                parentNode.insertBefore(table.rows[j], table.rows[i]);
            }
        }
    }
}

function deleteRow(e) {
    if (!e.target.classList.contains("btnDelete")) {
        return;
    }
    let c = confirm("Bạn có muốn xóa dòng này?");
    if (c === true) {
        const btn = e.target;
        btn.closest("tr").remove();
        i--;
    }
    btnUpdateRowIndex();
}

function btnUpdateRowIndex() {
    for (let j = 1; j < table.rows.length; j++) {
        table.rows[j].cells[0].innerHTML = j;
    }
}
table.addEventListener("click", deleteRow);