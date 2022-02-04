import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export class MyAwesomeCounter extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
        this.onIncrease = () => {
            ++this.count;
        };
        this.onDecrease = () => {
            --this.count;
        };
    }
    render() {
        return html `
    <slot name="counter-title"></slot>
    <button id="decrease" @click=${this.onDecrease}>-</button>
    <span id="count">${this.count}</span>
    <button id="increase" @click=${this.onIncrease}>+</button>
    `;
    }
}
MyAwesomeCounter.styles = css `
    :host {
      display: block;
      font-size: 200%;
    }

    :host h2 {
      color: blue;
    }

    :host span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    :host button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  
    :host #decrease {
      background-color:  red;
    }
  `;
__decorate([
    property({ type: Number })
], MyAwesomeCounter.prototype, "count", void 0);
//# sourceMappingURL=MyAwesomeCounter.js.map