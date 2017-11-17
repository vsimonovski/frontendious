webpack-starter
==============================

Webpack project setup, suitable for both websites/web apps.

## What's in the 📦 ?

* 🔥 webpack, webpack-dev-server (config splitted into webpack.dev and webpack.prod)
* 💪 babel (env presset, object-rest-spread plugin)
* 🦄 scss support, postcss autoprefix, normalize.css included
* 🖼️ image support (png|jpg|gif|svg)
* 💅 [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) configured 

## Tips & Tricks

If you want to use `background: url()` inside `*.scss` file, always create path relative to scss folder, even if the current .scss file is, for example, inside `modules/` folder.

```scss
/* current location: scss/modules/_somefile.scss */
background: url('../assets/mypicture.png'); 👍 
background: url('../../assets/mypicture.png'); 👎 
```
---
css-loader will [ignore path starting with /](https://github.com/webpack-contrib/css-loader#root), to prevent that behaviour add option "root: '.'"

## Add support for React

```bash
# transform-class-properties is optional. 
# With this plugin enabled, we can define our Prop Types and our Default Props now as static class properties.

yarn add babel-preset-react react react-dom react-router dom babel-plugin-transform-class-properties
# or
npm install babel-preset-react react react-dom react-router-dom babel-plugin-transform-class-properties

```

```html
<!-- index.html -->
<!-- ... -->
<div id="app"></div>
<!-- ... -->
```

```javascript
// app.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import './css_modules';

class Home extends Component {
    render() {
        return <div>hello</div>;
    }
}

render(<Home />, document.getElementById('app'));
```

```javascript
// webpack.common.js
...
module: {
    rules: [
        {
            test: /\.(js|jsx)$/
        }
    ]
},
resolve: {
    extensions: ['.js', '.jsx']
}
...
```

```javascript
// .babelrc
{
    "presets": ["env", "react"],
    "plugins": ["transform-object-rest-spread", "transform-class-properties"]
}
```

## Build Setup

Previously I've used and included yarn as package manager mainly for it's caching performance. 

I've removed it from this README because I've had a problem with runing build command, it throws error regarding webpack source map option, when I install libraries with npm install there is no error thrown, but I had to set version of `webpack-sources` library. [More details on this github issue](https://github.com/webpack/webpack/issues/5931)

~~I don't know if this is library or tool(yarn) issue but I'm sticking with npm for now.~~

Issue is gone when webpack-sources is placed into resolutions block inside `package.json`, yarn is still safe to use 😅. [More details](https://github.com/webpack/webpack/issues/5931#issuecomment-345315365)

```bash
# install dependencies
yarn install / npm install

# serve with hot reload at localhost:8080
yarn dev / npm run dev 

# build for production @dist/ folder
yarn build / npm run build

```
