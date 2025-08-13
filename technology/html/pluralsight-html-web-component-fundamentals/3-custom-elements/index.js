class CommentArea extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h2>Comments</h2>

      <textarea></textarea>
      <br />

      <input type="submit">
    `;
  }

}

customElements.define('comment-area', CommentArea);

// const commentArea = new CommentArea();
// document.body.append(commentArea);

// const commentArea = document.createElement('comment-area');
// document.body.append(commentArea);

// document.body.innerHTML = '<comment-area></comment-area>';
