import { replaceAdjectives } from "./replacer.js"
export { AdjektivGenerator }

/*
 * Wrapper component for adjektivhistorieparser
 */

class AdjektivGenerator extends HTMLElement {

  static attributeNames = ['tekst', 'seed'];

  constructor() {
    super();
    this.setupState();
    this.setupDOM();
    this.setupListerners();
    this.render();
  }

  setupState() {
    if(!this.hasAttribute('tekst')) {
      this.setAttribute('tekst', ''); 
    }
    
    if(!this.hasAttribute('seed')) {
      this.setAttribute('seed', '0'); 
    }
  }
  setupDOM(){
    this.outputElement = this.querySelector('.output')
  }

  setupListerners() {
    
  }
  render(){
    let input = this.getAttribute('tekst');
    let seed = this.getAttribute('seed');
    let result = replaceAdjectives(input, seed);
    this.outputElement.textContent = result;
  }

  // **** BUILT-INS ****

  // Returns a list of names of attributes
  // that trigger attributeChangedCallback on change
  static get observedAttributes() { return AdjektivGenerator.attributeNames; }
  
  // Lifecycle
  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    if(oldValue === newValue) {
      return;
    }

    if(name === "seed") {
      let seedAsInt = parseInt(newValue);
      if(isNaN(seedAsInt)) {
        this.setAttribute('seed', 0);
      }
    }

    if(name === "tekst") {
      this.render()
    }
  }
  
}


customElements.define('adjektiv-generator', AdjektivGenerator);
