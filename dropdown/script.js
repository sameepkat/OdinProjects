class DropDown {
  constructor(text = "DropDown", id = 'def') {
    this.visibility = false;
    this.comp = document.createElement("div");
    this.comp.setAttribute('class', id)
    this.comp.textContent = text;
    this.comp.addEventListener('click', (e)=>{
      this.visibility = !this.visibility;
      this.visibility ? this.showElm(): this.clearElm();
    });
  }
  appendTo(elm){
    if(!elm) throw "Cannot Append the component";
    document.querySelector(elm).appendChild(this.comp);
  }
  childElm(...children){
    this.childElements = children;
  }
  showElm(){
    if(!this.childElements)
      throw Error("No Children found")
    if(this.childHolder) return;
    this.childHolder = document.createElement('div');
    this.childHolder.setAttribute('id', 'childHolder');
    this.textContent = `<ul>`;
    this.childElements.map(child => {
      this.textContent += `
      <li>${child}</li>
      `
    });
    this.textContent += '</ul>';
    this.childHolder.innerHTML = this.textContent;
    this.comp.appendChild(this.childHolder);
  }
  clearElm(){
    if(this.childHolder){
      this.comp.removeChild(this.childHolder)
      this.childHolder = null;
    }
  }
}

const dd = new DropDown('Demo DropDown', 'def');
dd.childElm('Download', 'Upload', 'Like', 'Comment', 'Subscribe')
dd.appendTo('body')