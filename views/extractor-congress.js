// var myModal = new bootstrap.Modal(document.getElementById('modal'), {
//     keyboard: false
//   })



data("Surallah")
document.getElementById("sum").innerHTML = "Surallah";

data1("Surallah")

function sum() {  
var mun = document.getElementById("select").value;
if (mun == "") {
    let tr =`<tr><td>Information not available</td</tr>`
    document.getElementById('tbody').innerHTML = tr;
    document.getElementById("total").textContent= `Information not available`
}
document.getElementById("sum").innerHTML = mun;
data(mun)
data1(mun)
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

async function data1(mun) {
    try {
        Swal.showLoading()
        let response = await fetch(`/data/${mun}`); // resolves with response headers
        let d = await response.json(); // read body as json
        let b = d.labels;
        let mun_sum = []

        let datasets = d.datasets
        console.log(datasets);
        let d_counter = 0;
        console.log("foreach");

        let sums = 0 ;

         datasets.forEach(e => {
            // let data = e.data[d_counter]; 
            let data = e.data;
            let length = data.length;

            
            // data.forEach(e1 => {
            //     console.log(d_counter + " : " + e1);
            // });

            // while (i < length) {
            //     sums += data[1]
            //     i++;
            // }

        
            
            mun_sum.push(data)
            sums += data[index]

            // console.log("length : " + data.length);
            // console.log(data[0]);
            // console.log(data);

            

            d_counter++;

            console.log(`counter : ${d_counter}`);
            if (d_counter ==  d.datasets.length) {
                console.log("sum : " + sums);
            }
         });


        // console.log("data  : " + d.datasets.length);
        // console.log("mun_sum");
        // console.log(mun_sum);
        // console.log(mun_sum.length);

         final_sum = []
         mun_sum_counter = 0;
         mun_sum_length = 0;
         mun_sum_final_sum = 0;

     
         mun_sum.forEach(e => {

            mun_sum_length = e.length
            // console.log("mun_sum_length");
            // console.log(mun_sum_length);
            let e_counter = 0;
        e.forEach(e1 => {
            // mun_sum_final_sum += e1[e_counter]
            // console.log(e[e_counter]);
            console.log("e1");
            console.log(e1);
            e_counter++;
            // if (e_counter ==  mun_sum_length) {
            //        final_sum.push(mun_sum_final_sum)
            //     }
                console.log("e_counter");
                console.log(e_counter);

        });

        console.log("outer loop");
        // console.log();
        mun_sum_counter++;

        });

        

        // console.log("Final");
        // console.log(final_sum);

    } catch (e) {
        
    }
}



async function data(mun) {
  
    
    try {
        // myModal.show(myModal)
        Swal.showLoading()
        let response = await fetch(`/data/${mun}`); // resolves with response headers
        let d = await response.json(); // read body as json
        // console.log(result)
        let b = d.labels;

        // console.log(d.datasets.length)
        // console.log(d.datasets)
        // console.log(d.datasets[0].data.length)

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
        // console.log(oo)
        // console.log(u)
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


