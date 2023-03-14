let objects=[];
let data = [];

fetch('https://restcountries.com/v2/all')
    .then((response) => response.json())
    .then((res) => {
     data = res;
console.log(data.length);

for(let i=0;i<data.length;i++) {
    let arrayofdata={} 
    arrayofdata['name']=data[i].name;
    arrayofdata['capital']=data[i].capital;
    arrayofdata['region']=data[i].region;
    arrayofdata['flag']=data[i].flag;
    arrayofdata['code']=data[i].alphcountrycodesCode;
    arrayofdata['latlng']=data[i].latlng;
objects.push(arrayofdata);   }
   console.log(objects)
   showdata(objects);
})
  .catch((error) => {
console.error('Data Fetching Error:', error);
});

function showdata(objects) {
    for(let i=0;i<objects.length;i++)
{  
    const country = objects[i];
             
    const name = document.createElement("h5");
    name.textContent = country.name;

    const flagImg = document.createElement("img");
    flagImg.setAttribute("class","card-top")
    flagImg.src = country.flag;

    const capital = document.createElement("p");
    capital.textContent = country.capital;

    const region = document.createElement("p");
    region.textContent = country.region;

    const code = document.createElement("p");
    code.textContent = country.code;
    const latlng = country.latlng;


    const row = document.getElementById("row");
    const  columndiv = document.createElement("div");
    columndiv.setAttribute("class","col-lg-4 col-sm-12");
    const cardDiv = document.createElement("div");
   cardDiv.setAttribute("class","card");
    row.append(columndiv);
    
                 

    const cardHead = document.createElement("div");
    cardHead.setAttribute("class","card-header");
    cardHead.append(name);
   cardDiv.appendChild(cardHead);

                

    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class","imgDiv")
    imgDiv.appendChild(flagImg);
   cardDiv.appendChild(imgDiv);

                  

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");

            const countryname = document.createElement("p");
            countryname.setAttribute("class","card-text")
            const b1 = document.createTextNode("Capital:")
            const c1 = document.createTextNode(" ")
            countryname.append(b1,c1,capital.innerText);
            cardBody.append(countryname);
   
            const regionname = document.createElement("p");
            regionname.setAttribute("class","card-text")
            const b2 = document.createTextNode("Region:")
            const c2 = document.createTextNode(" ")
            regionname.append(b2,c2,region.innerText);
            cardBody.append(regionname);
   
            const countrycodes = document.createElement("p");
            countrycodes.setAttribute("class","card-text")
            const b3 = document.createTextNode("Country Code:")
            const c3 = document.createTextNode(" ")
            countrycodes.append(b3,c3,code.innerText);
            cardBody.append(countrycodes);

            
        
                   
        const buttonss = document.createElement("button");
            buttonss.setAttribute("class","btn btn-primary");
            buttonss.setAttribute("type","button");
            buttonss.innerText = "check weather here"; 
            buttonss.onclick = function() {
               
            }
        
        cardBody.append(buttonss)
       cardDiv.appendChild(cardBody);
        columndiv.appendChild(cardDiv);
 
 }
        }
    
