// var myModal = new bootstrap.Modal(document.getElementById('modal'), {
//     keyboard: false
//   })



data("City of Kidapawan")
document.getElementById("sum").innerHTML = "City of Kidapawan";

function sum() {  
var mun = document.getElementById("select").value;
if (mun == "") {
    let tr =`<tr><td>Information not available</td</tr>`
    document.getElementById('tbody').innerHTML = tr;
    document.getElementById("total").textContent= `Information not available`
}
document.getElementById("sum").innerHTML = mun;
data(mun)
}

function reload() {
    var mun = document.getElementById("select").value;
    if (mun != "") {
        data(mun)
    }else{
         alert("Select Municipalty first ..")
    }
    // console.log(mun)
    // console.log("clicked")
}

async function data(mun) {
  
    
    try {
        // myModal.show(myModal)
        Swal.showLoading()
        let response = await fetch(`/data/${mun}`); // resolves with response headers
        let d = await response.json(); // read body as json
        // console.log(result)
        let b = d.labels;

        console.log(d.datasets.length)
        console.log(d.datasets)
        console.log(d.datasets[0].data.length)

        let arr1 = []
        let arr2 = []

        let hindi = d.datasets[0].data;
        
        if (d.datasets.length == 2) {
             hindi.forEach(element => {
                   arr1.push(0)
             });    
        }else if(d.datasets.length == 1){
            hindi.forEach(element => {
                arr1.push(0)
                arr2.push(0)
          });
        }
        
        
        let oo = arr1.length != null ? d.datasets[1].data : arr1;
        
        let u = arr2.length != null ? d.datasets[2].data : arr2;
        console.log(oo)
        console.log(u)
        // let r = list.length - b.length;
        // // document.getElementById("remaining").textContent =`remaining ${r}`
        // // document.getElementById("done").textContent= `done ${b.length}`
        document.getElementById("total").textContent=` ${b.length} baranggay's`
            
         let count = 0 ;
         var table = document.getElementById("my-table");
    
         var tr = "";
         let remaining = 0;
         b.forEach(e => {
             
            let sum = hindi[count] + oo[count] + u[count];
            if(sum < 20){
                tr +=`<tr class="table-danger"><td>${e}</td><td>${sum}</td></tr>`
                remaining++; 
            }else{
                tr +=`<tr><td>${e}</td><td>${sum}</td></tr>`
            }
            
            count++; 
          
         });
    
        //  console.log(tr)
         document.getElementById('tbody').innerHTML = tr;
         document.getElementById("done").textContent= `${remaining} remaining`
         swal.close();


    } catch (error) { 
        // myModal.show()
        console.log(error)
        Swal.showLoading()
        let tr =`<tr><td>Information not available</td</tr>`
        document.getElementById('tbody').innerHTML = tr;
        document.getElementById("total").textContent= `Information not available`
        document.getElementById("done").textContent= `Information not available`
        swal.close();
        // myModal.hide()
    }
  
}


