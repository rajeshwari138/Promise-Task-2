// console.log("hey")
let contentDiv =document.querySelector(".contentDiv")
let content=document.createElement("div");
content.setAttribute("class","content");
contentDiv.append(content);
let fishwatch=async()=>{
    let response=await fetch("https://www.fishwatch.gov/api/species");
    let data =await response.json();
    // let dataJS= JSON.parse(data);
    // console.log(data[0]["Fishery Management"])
    // console.log(data[7]);
    // var frontImg="Species Illustration Photo";
    // data.forEach(element => {
    //     if(element==frontImg){
    //         console.log(element)
    //        }
    // });


    for(let i=0; i<60;i++){
        // console.log(data[i]["Species Illustration Photo"].src);
      if(data[i]["Fishery Management"]!=null){
        content.innerHTML += `
        <div class="content">
            <div class="card">
               <div class="imgDiv">
                 <img class="img" src="${data[i]["Species Illustration Photo"].src}" alt="image nothing">
               </div>
               <div class="heading">
                 <h4>${data[i]["Scientific Name"]}</h4>
               </div>
              <div class="smallcontent">${data[i]["Fishery Management"]}</div>
           </div>
         </div>`
      }
      else{
        content.innerHTML += `
        <div class="content">
            <div class="card">
               <div class="imgDiv">
                 <img class="img" src="${data[i]["Species Illustration Photo"].src}" alt="image nothing">
               </div>
               <div class="heading">
                 <h4>${data[i]["Scientific Name"]}</h4>
               </div>
              <div class="smallcontent">${data[i].Management}</div>
           </div>
         </div>`
      }
    }
} 
// readmore btn click function podumbothu id ya kudu
fishwatch();
