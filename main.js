menuListArray = ["Pizza Vegetariana","4 queijos","Portuguesa","Calabresa","Queijo"
                    ];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}


function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}