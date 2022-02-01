import { Component, State, Host, h, Element } from '@stencil/core';

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
  @State() count: number = 0;

  onIncrease = (): void => {
    ++this.count;
  }

  onDecrease = () => {
    --this.count;
  }

  componentDidLoad() {
    console.log('did load', this.host);
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
