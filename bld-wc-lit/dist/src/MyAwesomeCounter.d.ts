import { LitElement } from 'lit';
export declare class MyAwesomeCounter extends LitElement {
    static styles: import("lit").CSSResult;
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    render(): import("lit-html").TemplateResult<1>;
}
