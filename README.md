# Sight.js

> A vanilla wow.js alternative.

## Features

* Using intersection Observer API.
* Simple and small.
* Performant.
* **Requires** [animate.css](https://github.com/daneden/animate.css) to work.

## Install

``` bash
# Using npm
npm install sight-js

# Using yarn
yarn add sight-js
```

Now include sight and you should be good to go.

``` js
// es6
import sight from 'sight'

// commonjs
const sight = require('sight');
```

Alternatively you can include a minified version of the script (or the source code, up to you) via direct file or using our **CDN** link.

``` html
<body>
  <script src="https://unpkg.com/sight-js"></script>
</body>
```

## Usage

Add ```data-sight``` to your elements and the animate class you wish to use, like the example below.

``` html
<img data-sight src="" alt="" class="shake">...</img>
```

Call sight anywhere in your code:

``` js
// Call me
sight();
```

## Configuring

Pass options to sight like the example below:

``` js
// Custom options
sight({
  selector: '[data-sight]', // data-sight
  threshold: [0, 0.25, 0.5, 0.75, 1] // array of options
});
```

## Running Tasks

You can run tasks with ```yarn``` or ```npm``` using the following commands:

``` bash
# Build task
$ yarn build

# etc.
$ ...
```

## Browser Support

You can check the browsers supported [here](http://caniuse.com/#feat=intersectionobserver).

## Roadmap

### Todo List

* [ ] Make it work properly.

**Legend**: Checked boxes mean *__partial__* completion, checked and ~~crossed~~ items mean they're *__fully__* working.

## Contributing

If you feel like I missed something please do send me a message or, alternatively make a pull request/open an issue and we will go from there.

## License

Code released under the [MIT](LICENSE) license.
