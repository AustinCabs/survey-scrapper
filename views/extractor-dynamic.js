
async function city_mun() {
    
    try {
        
        var city_mun = document.getElementById("surveys").value;
        
        if (city_mun != "0") {
        console.log("city mun : " + city_mun);
        Swal.showLoading()
        let response = await fetch(`/city_mun/${city_mun}`); // resolves with response headers
        let d = await response.json(); // read body as json

        let html  = "";
        let url = "";
        d.forEach(e => {
            html += `<option value="${e.city_mun_name}">${e.city_mun_name}</option>`;
            url = e.url_name
        });
        
        swal.close();
        document.querySelector('#city_mun').innerHTML = html
        document.querySelector('#url_name').value = url    
        }else{
            alert("Select a survey ...");
            return;
        }
        
        // console.log( url);
    } catch (e) {
        console.log(e);
    }

}

 async function fetch_sum() { 
     var url = document.getElementById("surveys").value;
     var city_mun = document.getElementById("city_mun").value;
     console.log(`/data/${url}/${city_mun}`);
     if (url == "0") {
        alert("Select a survey ...");

    }else{
     
    try {
        Swal.showLoading()
        
        let response = await fetch(`/data/${url}/${city_mun}`); // resolves with response headers
        let d = await response.json(); // read body as json
        console.log(d)
        let b = d.labels;

        let arr1 = []
        let arr2 = []
        let arr3 = []
        let arr4 = []
        let arr5 = []
        let arr6 = []

        let d_length = d.datasets.length
        
        switch (d_length) {
            case 1:
                let a1 =  d.datasets[0].data;
                   a1.forEach(e => {
                       arr1.push(e)
                       arr2.push(0)
                       arr3.push(0)
                       arr4.push(0)
                       arr5.push(0)
                       arr6.push(0)
                   });
                   console.log("case 1");
                break;
            case 2:
                let a2 =  d.datasets[0].data;
                let b2 =  d.datasets[1].data;
                let counter2 = 0;
                a2.forEach(e => {
                    arr1.push(e)
                    arr2.push(b2[counter2])
                    arr3.push(0)
                    arr4.push(0)
                    arr5.push(0)
                    arr6.push(0)
                    counter2++;
                });
                console.log("case 2");

                break;
            case 3:
                let a3 =  d.datasets[0].data;
                let b3 =  d.datasets[1].data;
                let c3=  d.datasets[2].data;
                let counter3 = 0 
                a3.forEach(e => {
                    arr1.push(e)
                    arr2.push(b3[counter3])
                    arr3.push(c3[counter3])
                    arr4.push(0)
                    arr5.push(0)
                    arr6.push(0)
                    counter3++
                });
                console.log("case 3");

                break;
            case 4:
                let a4 =  d.datasets[0].data;
                let b4 =  d.datasets[1].data;
                let c4 =  d.datasets[2].data;
                let d4 =  d.datasets[3].data;
                let counter4 = 0 

                a4.forEach(e => {
                    arr1.push(e)
                    arr2.push(b4[counter4])
                    arr3.push(c4[counter4])
                    arr4.push(d4[counter4])
                    arr5.push(0)
                    arr6.push(0)
                    counter4++

                });
                console.log("case 4");

                break;
            case 5:
                let a5 =  d.datasets[0].data;
                let b5 =  d.datasets[1].data;
                let c5 =  d.datasets[2].data;
                let d5 =  d.datasets[3].data;
                let e15 =  d.datasets[4].data;
                let counter5 = 0 

                a5.forEach(e => {
                    arr1.push(e)
                    arr2.push(b5[counter5])
                    arr3.push(c5[counter5])
                    arr4.push(d5[counter5])
                    arr5.push(e15[counter5])
                    arr6.push(0)
                    counter5++

                });
                console.log("case 5");

                break;
            case 6:
                let a6 =  d.datasets[0].data;
                let b6 =  d.datasets[1].data;
                let c6 =  d.datasets[2].data;
                let d6 =  d.datasets[3].data;
                let e16 =  d.datasets[4].data;
                let f6 =  d.datasets[5].data;
                let counter6 = 0
                a.forEach(e => {
                    arr1.push(e)
                    arr2.push(b6[counter6])
                    arr3.push(c6[counter6])
                    arr4.push(d6[counter6])
                    arr5.push(e16[counter6])
                    arr6.push(f6[counter6])
                    counter6++

                });
                console.log("case 6");

                break;
        }

        // console.log("arr1");
        // console.log(arr1);
        // console.log("arr2");
        // console.log(arr2);
        // console.log("arr3");
        // console.log(arr3);
        // console.log("arr4");
        // console.log(arr4);
        // console.log("arr5");
        // console.log(arr5);
        // console.log("arr6");
        // console.log(arr6);
        let count = 0 ;
        var table = document.getElementById("my-table");
   
        var tr = "";
        let remaining = 0;
        b.forEach(e => {
            
           let sum = arr1[count] + arr2[count] + arr3[count] + arr4[count] + arr5[count] + arr6[count];
           if(sum < 20){
               tr +=`<tr class="table-danger"><td>${e}</td><td>${sum}</td></tr>`
               remaining++; 
           }else{
               tr +=`<tr><td>${e}</td><td>${sum}</td></tr>`
           }
           
           count++; 
         
        });
   
       //  console.log(tr)
        document.getElementById("total").textContent=` ${b.length} baranggay's`
        document.getElementById('tbody').innerHTML = tr;
        document.getElementById("done").textContent= `${remaining} remaining`

      swal.close();
    } catch (e) {
        console.log(e);
    }

}//else
  } // function




