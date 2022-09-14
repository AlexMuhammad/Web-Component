class imageFigure extends HTMLElement {
  constructor() {
    super();
    console.log("constructed");
  }
  connectedCallback() {
    console.log("connected");
  }
  disconnectedCallback() {
    console.log("disconnected");
  }
  adoptedCallback() {
    console.log("adopted");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attribute ${name}, changed!`);
  }
  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define("image-figure", imageFigure);
