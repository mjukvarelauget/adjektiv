export { AdjektivHistorieEditor }

/*
 * Wrapper component for adjektivhistorieparser
 */

class AdjektivHistorieEditor extends HTMLElement {

  static attributeNames = [''];

  constructor() {
    super();
    this.setupState();
    this.setupDOM();
    this.setupListerners();
  }

  setupState() {
    this.sourceText = ""
  }
  setupDOM(){
    this.inputElement = this.querySelector('.input');
    this.inputElement.value = this.sourceText;
  }
  
  setupListerners() {
    this.inputElement.addEventListener('input', (e) => {
      this.sourceText = this.inputElement.value;
    });
  }
  render(){}

  // **** BUILT-INS ****

  // Returns a list of names of attributes
  // that trigger attributeChangedCallback on change
  static get observedAttributes() { return AdjektivHistorieEditor.attributeNames; }
  
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


customElements.define('adjektiv-historie-editor', AdjektivHistorieEditor);
