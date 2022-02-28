# \<my-awesome-counter>


This is a LitElements counter component used in the Bld() tech talk [The Ins and Outs of Web Components](https://www.meetup.com/bld-tech-talks/events/283680822/).

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Usage

```html
<script type="module">
  import 'my-awesome-counter/my-awesome-counter.js';
</script>

<my-awesome-counter></my-awesome-counter>
```



## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
