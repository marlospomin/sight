# Sight

> A simple package to trigger an animation using Animate.css.

## Features

* Using intersection Observer API.
* Simple and small.
* Performant.
* **Requires** [animate.css](https://github.com/daneden/animate.css) to do anything.

## Install

```bash
# Using npm
npm install @marlospomin/sight

# Using yarn
yarn add @marlospomin/sight
```

Now include the script and you should be good to go.

``` js
// es6
import sight from '@marlospomin/sight'

// commonjs
const sight = require('@marlospomin/sight')
```

## Usage

Add ```data-sight``` to your elements and the animate class you wish to use, like the example below.

```html
<img data-sight src="" alt="" class="shake">...</img>
```

Call sight anywhere in your code:

```js
// Call me
sight()
```

## Configuring

Pass options to sight like the example below:

```js
// Custom options
sight({
  selector: '[data-sight]',
  threshold: [0, 0.25, 0.5, 0.75, 1]
})
```

## Browser Support

You can check the supported browsers [here](http://caniuse.com/#feat=intersectionobserver).

## License

Code released under the [MIT](LICENSE) license.
