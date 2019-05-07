class BookTitle extends HTMLElement {
  dataBookTitle: string;
  static elementTitle : string = 'book-title';

  getElementStyling()  {
    const style = `
      <style>
        ${BookTitle.elementTitle} h1 {
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          font-weight: 300;
          line-height: 1.3;
          color: #292929;
          margin: 0.5rem 0 0 0;
        }
      </style>`;      
    return style
  }

  render() {
    this.innerHTML = `
    ${this.getElementStyling()}
    <h1>${this.dataBookTitle}</h1>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define(BookTitle.elementTitle, BookTitle);
export default BookTitle;