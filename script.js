let myData = document.getElementById('data')
let num = document.getElementById('input').value;

function check() {
    let num = document.getElementById('input').value;


    if (num < 1 || num > 1330) {
        alert('Enter a number between 1 to 1330')

    } else {
        foo()
    }


}

function refresh() {
    myData.innerHTML = ""
    document.getElementById('input').value = ""


}

async function foo() {

    try {

        let num = document.getElementById('input').value;





        let s1 = await fetch("https://api-thirukkural.vercel.app/api?num=" + num)


        let res = await s1.json();
        console.log(res)

        let myData = document.getElementById('data')
        myData.innerHTML = `<div class="col-12">
                     <div class=" box-part">
                     <h5 class="text-center mb-3  mt-2"><span class="badge badge-secondary">குறள்-${res.number} </span><hr></h5>
                     <div class="d-flex flex my-2">                                             
                      <span class="badge badge-light badge-pill badgecontrol">பால்: ${res.sect_tam} </span>
                     <span class="badge badge-light badge-pill  badgecontrol">இயல்: ${res.chapgrp_tam} </span>
                     <span class="badge badge-light badge-pill  badgecontrol">அதிகாரம்: ${res.chap_tam} </span>          
                     </div>
                     <div class="text-center mb-3  kural w-60">
                     <p class="mb-2">"${res.line1}</p>
                     <p class=" mb-2">${res.line2}"</p>
                     </div>                       
                     <p class="mb-3  explainfont text-center">${res.tam_exp}</p> <hr>
                     </div>
                     </div> 
        
                     <div class="col-12">
                     <div class=" box-part">         
                        <div class="d-flex  flex  my-2">                                             
                      <span class="badge badge-light badge-pill  badgecontrol">Section: ${res.sect_eng} </span>
                     <span class="badge badge-light badge-pill  badgecontrol">Chapter-Group: ${res.chapgrp_eng} </span>
                     <span class="badge badge-light badge-pill  badgecontrol">Chapter: ${res.chap_eng} </span>                        
                     </div>   
                     <div class="text-center mb-3 kural "><p class="mb-2 pfont">" ${res.eng}"</p>
                     </div>
                     <p class="mb-2 explainfont text-center">${res.eng_exp}</p> 
            
                      </div>
                      </div>`

        val = ""





    } catch (error) {
        console.log('Something Error')

    }
}