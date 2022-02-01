import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export class MyAwesomeCounter extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 'Hey there';
        this.onClick = (e) => {
            // console.log('slot', this.host.shadowRoot.querySelector("#my-button slot").innerHTML);
            // const name: string = this.host.shadowRoot.querySelector("#my-button slot").innerHTML;
            const name = 'Martin';
            alert(`${this.count} ${name}`);
        };
    }
    render() {
        return html `
      <div>${this.count}</div>
      <button id="my-button" @click=${this.onClick}>
        <slot/>
      </button>
    `;
    }
}
MyAwesomeCounter.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--my-awesome-counter-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], MyAwesomeCounter.prototype, "count", void 0);
//# sourceMappingURL=MyAwesomeCounter.js.map