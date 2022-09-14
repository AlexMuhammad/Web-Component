// const divElement = document.createElement("div");

// //element yang berada didalam shadow DOM
// const headingElement = document.createElement("h1");
// headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";

// //melampirkan shadow root pada shadow host
// //mengatur mode shadow dengan nilai open
// const shadowRoot = divElement.attachShadow({ mode: "open" });

// //memasukkan element heading ke dalam shadow root
// shadowRoot.appendChild(headingElement);

// //memasukkan elemen shadow host ke regular DOM
// document.body.appendChild(divElement);

//shadow host
const divElement = document.createElement("div");

//element yang berada didalam shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini adalah konten didalam shadow DOM";

//melampirkan shadow root pada shadow host
//mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: "open" });

//memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);

shadowRoot.innerHTML += `
    <style>
        h1{
            color: green;
        }
    </style>
`

//memasukkan element shadow host ke regular DOM
document.body.appendChild(divElement);
