

// // const fetchByCode = async (countryCode) => {
// //     const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
// //     const data = await res.json();
// //     // console.log(data[0].name.common);
// //     return data[0].name.common;
// // }

// export const clearContainer = () => {
//     const container = document.querySelector("#id_container");
//     container.innerHTML = "";
// }



// // export const render = async (obj) => {
// //     const container = document.querySelector("#id_container");
// //     // const bordersPromises = obj[0].borders.map(async (item) => {
// //     //     const result = await fetchByCode(item);
// //     //     return `<button id=${item} class="border btn btn-dark">${result}</button>`;
// //     // });
// //     // const borders = await Promise.all(bordersPromises);

// //     container.innerHTML += `
// //         <div class="d-flex justify-content-between"  data-aos="fade-up" data-aos-duration="3000" >
// //             <div class="p-2"  >
// //                 <h4>${obj[0].name.common} </h4> 
// //                 <h6>pop: ${Intl.NumberFormat().format(obj[0].population)} </h6>
// //                 <h6>region: ${obj[0].region}</h6>
// //                 <h6>languages: ${Object.values(obj[0].languages)}</h6>
// //                 <h6>coin: ${Object.keys(obj[0].currencies)} ,${Object.values(obj[0].currencies)[0].name} </h6>
// //                 <h6>capital city: ${obj[0].capital}</h6> 
// //                 <p><strong>state with border:</strong> <br> ${obj[0].borders.map((item) => `<button id=${item} class="border btn btn-dark" > ${item}</button>`).join("")}</p>
// //             </div>
// //             <img class="w-50 p-4" src=${obj[0].flags.png}>
// //         </div>

// //         <div class="restCardBody"  data-aos="fade-up" data-aos-duration="3000">
// //             <div class="Mymap">
// //                 <iframe class="w-100" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
// //                     src="https://maps.google.com/maps?q=${obj[0].capitalInfo.latlng[0]},${obj[0].capitalInfo.latlng[1]}&hl=En&z=9&amp;output=embed">
// //                 </iframe>
// //             </div>
// //         </div>`;
// // }



// export const apiByCode = async (countryCode) => {
//     await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
//             clearContainer();
//             render(data);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }


// functions.js
export const clearContainer = () => {
    const container = document.querySelector("#id_container");
    container.innerHTML = "";
}

export const render = (obj) => {
    const container = document.querySelector("#id_container");
    container.innerHTML += `
        <div class="d-flex justify-content-between">
            <div class="p-2">
                <h4>${obj[0].name.common} </h4> 
                <h6>pop: ${Intl.NumberFormat().format(obj[0].population)} </h6>
                <h6>region: ${obj[0].region}</h6>
                <h6>languages: ${Object.values(obj[0].languages)}</h6>
                <h6>coin: ${Object.keys(obj[0].currencies)} ,${Object.values(obj[0].currencies)[0].name} </h6>
                <h6>capital city: ${obj[0].capital}</h6> 
                <p><strong>state with border:</strong> <br> ${obj[0].borders.map((item) => `<button id=${item} class="border btn btn-dark" > ${item}</button>`).join("")}</p>
            </div>
            <img class="w-50 p-4" src=${obj[0].flags.png}>
        </div>

        <div class="restCardBody">
            <div class="Mymap">
                <iframe class="w-100" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?q=${obj[0].capitalInfo.latlng[0]},${obj[0].capitalInfo.latlng[1]}&hl=En&z=9&amp;output=embed">
                </iframe>
            </div>
        </div>`;
}

export const apiByCode = async (countryCode) => {
    await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(res => res.json())
        .then(data => {
            clearContainer();
            render(data);
        })
        .catch(err => {
            console.log(err);
        })
}