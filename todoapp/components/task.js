class Task extends HTMLElement {

  constructor(_text){
    super();
    this.text = _text;
    this.status = 'created';
    this.created_at = new Date();
  }

  static get observeAttributes(){
    return ["text", "status"];
  }

  setAttribute(attr, value) {
    super.setAttribute(attr,value);
    this.connectedCallback();
  }
}