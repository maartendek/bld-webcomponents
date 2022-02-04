import { Component,  Host, h, Element, Prop, Method } from '@stencil/core';

@Component({
  tag: 'my-awesome-counter',
  styleUrl: 'my-awesome-counter.scss',
  shadow: true,
})
export class MyAwesomeCounter {
  @Element() host: HTMLElement;
  
  /**
   * The actual count
   */
  @Prop({reflect: true, mutable: true }) count: number = 0;

  onIncrease = (): void => {
    ++this.count;
  }

  onDecrease = () => {
    --this.count;
  }

  componentDidLoad() {
    console.log('did load', this.host);
  }

  @Method()
  async invert() {
    this.count = this.count * -1;
  }

  render() {
    return (
      <Host>
        <slot name="counter-title"></slot>
        <button id="decrease" onClick={this.onDecrease}>-</button>
        <span id="count">{this.count}</span>
        <button id="increase" onClick={this.onIncrease}>+</button>
      </Host>
    );
  }
}
