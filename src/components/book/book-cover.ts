import { getBookCoverURL } from '../../api/bookCovers';

class BookCover extends HTMLElement {
  dataCoverID: number;
  dataBookTitle: string;
  static elementTitle: string = 'book-cover';

  connectedCallback() {
    this.render();
  }

  render() {
    const bookCoverURL = getBookCoverURL(this.dataCoverID);
    // We return the book cover image size based on the screen size.
    // Ideally we use srcset, but in thase case the size is chosen with scripting
    // We can't use srcset in our situation:
    // - The API returns images of variable dimensions
    // - The images sizes are normalized in our layout by height. Height isn't supported in srcset
    this.innerHTML = `
      ${this.getElementStyling()}
      <figure>
        <img src="${bookCoverURL}" alt="Cover for ${this.dataBookTitle}">
      </figure>
    `;
  }

  getElementStyling() {
    const style = `
      <style>
        ${BookCover.elementTitle} figure {
          margin: .5rem 0 0 0;
          background-color: #f5f5f5;
        }
        ${BookCover.elementTitle} img {
          height: 25vw;
          min-width: 15vw;
        }        
      </style>`;
    return style
  }
}

customElements.define(BookCover.elementTitle, BookCover);
export default BookCover;