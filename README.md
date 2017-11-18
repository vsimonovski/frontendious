webpack-starter 
============================== 
[ 🚧 UNDER CONSTRUCTION]
Webpack project setup, suitable for both websites/web apps.

## What's in the 📦 ?

* 🔥 webpack, webpack-dev-server (config splitted into webpack.dev and webpack.prod)
* 💪 babel (env presset, object-rest-spread plugin)
* 🦄 scss support, postcss autoprefix, normalize.css included
* 🖼️ image support (png|jpg|gif|svg)
* 💅 [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) configured 
* ⚡ connected with express(node.js)

## Project structure
```bash
server/
|-- index.js # express server 
|-- package.json # server dependencies
|-- yarn.lock # lock file for server libs
src/
|--assets/ # place images here
|--js/ # place javascript here
|--scss/ # place scss here
|--index.html # root index.html page
.babelrc # babel config
.gitignore 
package.json # client dependencies
postcss.config.js # postcss config
README.md
webpack.common.js # webpack common config
webpack.dev.js # webpack development config
webpack.prod.js # webpack production config
yarn.lock # lock file for client libs

```

## Tips & Tricks
ℹ️ There is a proxy configured inside webpack.dev.js, i.e. all localhost:3000/api/* requests will be proxied to loclhost:3001/api/* where express server is listening.

☝️ If you want to use `background: url()` inside `*.scss` file, always create path relative to scss folder, even if the current .scss file is, for example, inside `modules/` folder.

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

# run script
yarn add-react
# or 
yarn add babel-preset-react react react-dom react-router dom babel-plugin-transform-class-properties

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

Previously I've used and included yarn as package manager mainly for its caching performance. 

I've removed it from this README because I've had a problem with runing build command, it throws error regarding webpack source map option, when I install libraries with npm install there is no error thrown, but I had to set version of `webpack-sources` library. [More details on this github issue](https://github.com/webpack/webpack/issues/5931)

~~I don't know if this is library or tool(yarn) issue but I'm sticking with npm for now.~~

Issue is gone when webpack-sources is placed into resolutions block inside `package.json`, yarn is still safe to use 😅. [More details](https://github.com/webpack/webpack/issues/5931#issuecomment-345315365)

```bash
# install server-side depenedcies
cd server
yarn install

# start server at localhost:3001, configurable at server/index.js
yarn start

# go back to root directory
# install client-side dependencies
yarn install

# serve with hot reload at localhost:3000, configurable at webpack.dev.js
yarn dev  

# build for production @ dist/ folder
yarn build
```
