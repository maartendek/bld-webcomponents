import { newE2EPage } from '@stencil/core/testing';

describe('my-awesome-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-awesome-counter></my-awesome-counter>');
    const element = await page.find('my-awesome-counter');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-awesome-counter></my-awesome-counter>');
    const component = await page.find('my-awesome-counter');
    const element = await page.find('my-awesome-counter >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
