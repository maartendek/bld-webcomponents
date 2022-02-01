import { newSpecPage } from '@stencil/core/testing';
import { MyAwesomeCounter } from './my-awesome-counter';

describe('my-awesome-counter', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyAwesomeCounter],
      html: '<my-awesome-counter></my-awesome-counter>',
    });
    expect(root).toEqualHtml(`
      <my-awesome-counter>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-awesome-counter>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyAwesomeCounter],
      html: `<my-awesome-counter first="Stencil" last="'Don't call me a framework' JS"></my-awesome-counter>`,
    });
    expect(root).toEqualHtml(`
      <my-awesome-counter first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-awesome-counter>
    `);
  });
});
