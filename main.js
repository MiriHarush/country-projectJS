
// // import { clearContainer, render,  apiByCode } from "./function.js";

// const container = document.querySelector("#id_container");
// const btn = document.querySelector("#btn");
// const israel = document.querySelector("#israel_id")
// const usa = document.querySelector("#usa_id")
// const uk = document.querySelector("#uk_id")
// const thailand = document.querySelector("#thailand_id")
// const france = document.querySelector("#france_id")

// // import { clearContainer, render } from "./function.js";

// export const api = async (event, search) => {
//     if (event) {
//         event.preventDefault();
//     }
//     await fetch(`https://restcountries.com/v3.1/name/${search}`)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
//             clearContainer();
//             render(data);
//         })
//         .catch(err => {
//             console.log(err);
//             container.innerHTML += `<p class="text-center">this country is not definde, please try another country</p>`
            
//             //alert("this country is not definde, please try another country")
//         })
// }



// const clearContainer = () => {
//     const container = document.querySelector("#id_container");
//     container.innerHTML = "";
// }

// const render = (obj) => {
//     // const div = document.createElement("div")
//     // div.className = "d-flex justify-content-between"
//     // container.append(div)
//     container.innerHTML += `
// <div class="d-flex justify-content-between">
//       <div class="p-2"  >
//       <h4>${obj[0].name.common} </h4> 
//           <h6>pop: ${Intl.NumberFormat().format(obj[0].population)} </h6>
//           <h6>region: ${obj[0].region}</h6>
//           <h6>languages: ${Object.values(obj[0].languages)}</h6>
//           <h6>coin: ${Object.keys(obj[0].currencies)} ,${Object.values(obj[0].currencies)[0].name} </h6>
//           <h6>capital city: ${obj[0].capital}</h6> 
//           <p><strong>state with border:</strong> <br> ${obj[0].borders.map((item) => `<button id=${item} class="border btn btn-dark" > ${item}</button>`).join("")}</p>
//           </div>
//            <img class="w-50 p-4" src=${obj[0].flags.png}>
//            </div>

//           <div class="restCardBody">
//           <div class="Mymap">
//             <iframe class="w-100" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
//             src="https://maps.google.com/maps?q=${obj[0].capitalInfo.latlng[0]},${obj[0].capitalInfo.latlng[1]}&hl=En&z=9&amp;output=embed">
//             </iframe>
//            </div>
//            </div>   
//           `
// }




// const apiByCode = async (countryCode) => {
//     // const countryName = getCountryFullName(countryCode);
//     // console.log(countryName);
//     await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             clearContainer();
//             render(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }


// container.addEventListener("click", (event) => {
//     if (event.target.classList.contains("border")) {
//         event.preventDefault();
//         const countryCode = event.target.id;
//         // console.log(countryCode);
//         apiByCode(countryCode);

//     }
// });
// btn.addEventListener("click", async (event) => {
//     const search = document.querySelector("#id_input").value;
//     await api(event, search);
// });
// israel.addEventListener("click", (event) => api(event, "israel"));
// usa.addEventListener("click", (event) => api(event, "usa"));
// uk.addEventListener("click", (event) => api(event, "uk"));
// thailand.addEventListener("click", (event) => api(event, "thailand"));
// france.addEventListener("click", (event) => api(event, "france"));




import { clearContainer, render, apiByCode } from "./function.js";

const container = document.querySelector("#id_container");
const btn = document.querySelector("#btn");
const israel = document.querySelector("#israel_id")
const usa = document.querySelector("#usa_id")
const uk = document.querySelector("#uk_id")
const thailand = document.querySelector("#thailand_id")
const france = document.querySelector("#france_id")

export const api = async (event, search) => {
    if (event) {
        event.preventDefault();
    }
    await fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then(res => res.json())
        .then(data => {
            clearContainer();
            render(data);
        })
        .catch(err => {
            console.log(err);
            container.innerHTML += `<p class="text-center">this country is not defined, please try another country</p>`;
        });
}

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("border")) {
        event.preventDefault();
        const countryCode = event.target.id;
        apiByCode(countryCode);
    }
});

btn.addEventListener("click", async (event) => {
    const search = document.querySelector("#id_input").value;
    await api(event, search);
});

israel.addEventListener("click", (event) => api(event, "israel"));
usa.addEventListener("click", (event) => api(event, "usa"));
uk.addEventListener("click", (event) => api(event, "uk"));
thailand.addEventListener("click", (event) => api(event, "thailand"));
france.addEventListener("click", (event) => api(event, "france"));