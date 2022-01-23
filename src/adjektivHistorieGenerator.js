export { AdjektivHistorieGenerator }

/*
 * Wrapper component for adjektivhistorieparser
 */

class AdjektivHistorieGenerator extends HTMLElement {

  static attributeNames = [''];

  constructor() {
    super();
    this.setupState();
    this.setupDOM();
    this.setupListerners();
  }

  setupState() {}
  setupDOM(){
    this.editor = this.querySelector('adjektiv-historie-editor');
    this.generator = this.querySelector('adjektiv-generator');
    this.generateButton = this.querySelector('button.generate');
  }
  
  setupListerners() {
    this.generateButton.addEventListener('click', (e) => {
      let sourceCode = this.editor.sourceText;
      this.generator.setAttribute('tekst', sourceCode);
    })
  }
  render(){}

  // **** BUILT-INS ****

  // Returns a list of names of attributes
  // that trigger attributeChangedCallback on change
  static get observedAttributes() { return AdjektivHistorieGenerator.attributeNames; }
  
  // Lifecycle
  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    if(oldValue === newValue) {
      return;
    }

  }
  
}


customElements.define('adjektiv-historie-generator', AdjektivHistorieGenerator);

