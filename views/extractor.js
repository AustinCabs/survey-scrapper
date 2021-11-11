
data("Surallah")
document.getElementById("sum").innerHTML = "Surallah";

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
    // console.log(mun)
    data(mun)
    // console.log("clicked")
}

async function data(mun) {
    try {
        let response = await fetch(`/data/${mun}`); // resolves with response headers
        let d = await response.json(); // read body as json
        // console.log(result)
        let b = d.labels;
        
        let hindi = d.datasets[0].data;
        
        let oo =d.datasets[1].data;
        
        let u = d.datasets[2].data;
        
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
    } catch (error) {
        let tr =`<tr><td>Information not available</td</tr>`
        document.getElementById('tbody').innerHTML = tr;
        document.getElementById("total").textContent= `Information not available`
        document.getElementById("done").textContent= `Information not available`
    }
  
}


