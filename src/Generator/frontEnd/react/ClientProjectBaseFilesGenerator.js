const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  datasourceBuilder,
  copyFontFiles,
  copyIconFiles,
} = require('../../util');

const { getRootRoutes } = require('../../ContentMapValidator')
const { getPrimaryKeyByJpaName, getVirtualPKColumn } = require('../../DomainConfig')

const ClientProjectBaseFilesGenerator = (ConfigObjects) => {
  const utilPath = ConfigObjects.getUtilPath();
  const errorPath = ConfigObjects.getClientComponentErrorPath();
  const actualPath = ConfigObjects.getClientActualPath();
  const sourcePath = ConfigObjects.getClientSourcePath();
  const stylePath = ConfigObjects.getClientStylePath();
  const stylesheetPath = ConfigObjects.getClientStylesheetPath();

  const componentPath = ConfigObjects.getClientComponentPath();
  const layoutPath = ConfigObjects.getClientComponentLayoutPath();
  const publicPath = ConfigObjects.getClientComponentPublicPath();
  const dashboardPath = ConfigObjects.getClientComponentDashboradPath();
  const footerPath = ConfigObjects.getClientComponentFooterPath();
  const gridPath = ConfigObjects.getClientComponentGridPath();
  const headerPath = ConfigObjects.getClientComponentHeaderPath();
  const loginPath = ConfigObjects.getClientComponentLoginPath();
  const sidebarPath = ConfigObjects.getClientComponentSidebarPath();
  const userPath = ConfigObjects.getClientComponentUserPath();
  const userListPath = `${userPath}\\list`;
  const userViewPath = `${userPath}\\view`;
  const userEditPath = `${userPath}\\edit`;
  const userDeletePath = `${userPath}\\delete`;
  const fontSrcPath = ConfigObjects.getFontSourcePath();
  const fontDstPath = ConfigObjects.getClientFontPath();
  const iconSrcPath = ConfigObjects.getIconSourcePath();
  const iconDstPath = ConfigObjects.getClientIconPath();
  const clientUtilPath = ConfigObjects.getClientUtilPath();

  const landingPageTitle = ConfigObjects['template']['landingPage']['title'];
  const landingPageFavicon = ConfigObjects['template']['landingPage']['favicon'];
  const headerBackgroundImage = ConfigObjects['template']['header']['backgroundImage'];

  let injectedContent = ``;
  isPathExists(sourcePath);
  isPathExists(errorPath);
  isPathExists(fontDstPath + '\\eot');
  isPathExists(fontDstPath + '\\ttf');
  isPathExists(fontDstPath + '\\woff');
  isPathExists(fontDstPath + '\\woff2');

  isPathExists(iconDstPath);
  isPathExists(stylePath);
  isPathExists(stylesheetPath);
  isPathExists(componentPath);
  isPathExists(layoutPath);
  isPathExists(publicPath);
  isPathExists(loginPath);
  isPathExists(dashboardPath);
  isPathExists(footerPath);
  isPathExists(gridPath);
  isPathExists(headerPath);
  isPathExists(loginPath);
  isPathExists(sidebarPath);
  isPathExists(userPath);
  isPathExists(userListPath);
  isPathExists(userViewPath);
  isPathExists(userEditPath);
  isPathExists(userDeletePath);
  isPathExists(clientUtilPath);

  /********************************************************************************
   *                        index.html file
   ********************************************************************************/
  injectedContent = `<!doctype html>
<html dir="rtl" lang="fa-IR">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>
    <%= htmlWebpackPlugin.options.title %>
  </title>
</head>

<body>
  <div id="root"></div>
  <!-- <script src="dist/main.js"></script> -->
</body>
</html>`;
  // console.log(`${actualPath}\\dist`);
  createFile(`${actualPath}\\src`, `${'index'}.html`, injectedContent);

  /********************************************************************************
   *                        package.json file
   ********************************************************************************/

  injectedContent = `{
  "name": "mutualUnderstanding",
  "version": "1.0.0",
  "description": "",
  "dependencies": {
    "@hassanmojab/react-modern-calendar-datepicker": "^3.1.6",
    "@persian-tools/persian-tools": "^3.5.2",
    "json-bigint": "^1.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-idle-timer": "^5.7.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@babel/core": "^7.23.2",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-react-constant-elements": "^7.22.5",
    "@babel/plugin-transform-react-inline-elements": "^7.22.5",
    "@babel/plugin-transform-runtime": "^7.23.2",
    "@babel/preset-env": "^7.23.2",
    "@babel/preset-react": "^7.22.15",
    "@babel/runtime": "^7.23.2",
    "@popperjs/core": "^2.11.8",
    "autoprefixer": "^10.4.16",
    "axios": "^1.5.1",
    "babel-loader": "^9.1.3",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "bootstrap": "^5.3.2",
    "bootstrap-icons": "^1.11.1",
    "css-loader": "^6.8.1",
    "csv-loader": "^3.0.5",
    "html-webpack-plugin": "^5.5.3",
    "lodash": "^4.17.21",
    "postcss-loader": "^7.3.3",
    "react-router-dom": "^6.17.0",
    "sass": "^1.69.4",
    "sass-loader": "^13.3.2",
    "style-loader": "^3.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1",
    "xml-loader": "^1.2.1",
    "prop-types": "^15.8.1",
    "react-csv": "^2.2.2",
    "react-to-print": "^2.15.1",
    "xlsx": "^0.18.5"
  },
  "scripts": {
    "watch": "webpack --mode development --watch",
    "start": "webpack-dev-server --mode development",
    "startX": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`;
  createFile(`${actualPath}`, `${'package'}.json`, injectedContent);

  /********************************************************************************
   *                        tsconfig.json file
   ********************************************************************************/

  injectedContent = `{
    "compilerOptions": {
        "strict": true
    }
}`
  createFile(`${actualPath}`, `${'tsconfig'}.json`, injectedContent);

  /********************************************************************************
   *                        webpack.config.js file
   ********************************************************************************/
  injectedContent = `'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    // mode: 'development',
    entry: {
      // main: './src/finalApp/main.jsx',
      main: './src/main.jsx',
    },
    devtool: 'inline-source-map',
    // devtool: isDevelopment && 'cheap-module-source-map',
    devServer: {
      historyApiFallback: true,
      // static: './dist',
      // static: path.resolve(__dirname, 'dist'),
      port: 8090,
      open: true,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '${landingPageTitle}',
        template: './src/index.html',
        favicon: './src/icon/${landingPageFavicon}'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development'
        ),
      }),
    ].filter(Boolean),

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    optimization: {
      runtimeChunk: 'single',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
          // options: {
          //   cacheDirectory: true,
          //   cacheCompression: false,
          //   envName: isProduction ? 'production' : 'development',
          // },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              // Adds CSS to the DOM by injecting a <style > tag
              loader: 'style-loader',
            },
            {
              // Interprets @import and url() like import/require() and will resolve them
              loader: 'css-loader',
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|svg|jpeg|gif)$/i,
          // mimetype: 'image/svg+xml',
          // scheme: 'data',
          type: 'asset/resource',
          // generator: {
          // filename: 'icons/[hash].svg',
          // },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ['csv-loader'],
        },
        {
          test: /\.xml$/i,
          use: ['xml-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
`;
  createFile(`${actualPath}`, `${'webpack.config'}.js`, injectedContent);

  /********************************************************************************
   *                        babel.config.js file
   ********************************************************************************/
  injectedContent = `module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    production: {
      only: ['src'],
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            removeImport: true,
          },
        ],
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
  },
};
`;
  createFile(`${actualPath}`, `${'babel.config'}.js`, injectedContent);

  /********************************************************************************
   *                        main.jsx file
   ********************************************************************************/
  injectedContent = `import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import './scss/style.scss';
// import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import * as bootstrap from 'bootstrap';
// import * as bootstrap from '../bootstrap/js/dist/bootstrap.bundle.min.js';

import "./stylesheet/font.css"
import './stylesheet/style.css'

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

`;
  createFile(`${sourcePath}`, `${'main'}.jsx`, injectedContent);
  /********************************************************************************
   *                        style.scss file
   ********************************************************************************/
  injectedContent = `// custom variable
// $primary: #c29938;
// $light: #fbf5e5;

// Option 1)
@import 'bootstrap/scss/_functions';
@import 'bootstrap/scss/_variables';
@import 'bootstrap/scss/mixins';
@import 'bootstrap/scss/forms/_form-control';
// @import "bootstrap"
// custom CSS

// body {
//   font-family: 'IRANSansWeb';
// }

// @font-face {
  // font-family: 'iransans';
  // src:
    // url('../font/IRANSansWeb.ttf') format('ttf'),
    // url('../font/IRANSansWeb_Black.ttf') format('ttf'),
    // url('../font/IRANSansWeb_Bold.ttf') format('ttf'),
    // url('../font/IRANSansWeb_Light.ttf') format('ttf'),
    // url('../font/IRANSansWeb_Medium.ttf') format('ttf'),
    // url('../font/IRANSansWeb_UltraLight.ttf') format('ttf'),
    // url('../font/Yekan.ttf') format('ttf')
// }

// body {
//   font-family: 'IRANSansWeb_Black';
// }

// $font-family-base: 'IRANSansWeb';
// $font-family-base: 'iransans';

// $font-size-base: 1rem;
// $input-btn-font-family: 'IRANSansWeb';
$btn-color: #58595b;

$custom-theme-colors: (
  altlight: #f2ebfa,
  altdark: #522192,
);

$theme-colors: map-merge($custom-theme-colors, $theme-colors);



$pagination-divider: quote('>') !default;

// Does not affect box-shadow used for focus state
// $enable-shadows: false;

// $focus-ring-width:      .25rem !default;
// $focus-ring-opacity:    .25 !default;
// $focus-ring-color:      rgba(red, $focus-ring-opacity);
// $focus-ring-blur:       0 !default;
// $focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color !default;
// $input-btn-focus-box-shadow: $focus-ring-box-shadow !default;

// 1) using mixin:
// $input-box-shadow: let(--#{$prefix}box-shadow-inset) !default;
// $box-shadow-inset: inset 0 1px 2px rgba($black, .075) !default;	

// 2) avoid using mixin:
// $input-focus-box-shadow: $input-btn-focus-box-shadow !default;
// $input-btn-focus-box-shadow: $focus-ring-box-shadow !default;
// $focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color !default;


$input-focus-box-shadow: 1px 1px 1px rgba($color: #f5990999, $alpha: 1) !important;

// $input-focus-box-shadow: 1px 1px 1px rgba($color: #f5990999, $alpha: 1) !important;
$input-focus-box-shadow: none;
$input-focus-border-color: $warning !important;

.form-floating:focus-within {
    // box-shadow: $input-focus-box-shadow;
    border: none;
    border-color: $input-focus-border-color;
}

// worked
*:focus {
// box-shadow: 0 0 0 .25 rgba($color: #f509d5, $alpha: 1.0) !important;
box-shadow: none !important;
}


// $link-hover-color: red;
// $component-active-color:red;

.hover-effect:hover {
  opacity: 0.5;
  border-color: #c29938;
  background-color: #d3d5d8;
  // background-color: $btn-color;
  .bi {
    color: blue;
  }
}

.bi {
  // color: #c29938;
  // color: #ffc107;
  color: $warning;
}
.bi:hover {
  color: #ffc107;
}

.btn-close {
  margin: 0rem !important;
}

.bi-arrow-left:hover {
  animation: leftarrow 1s infinite;
  cursor: pointer;
}

.bi-arrow-right:hover {
  animation: rightarrow 1s infinite;
  cursor: pointer;
}

@keyframes leftarrow {
  50% {
    transform: translateX(-8px);
  }

  100% {
    transform: translateX(0px);
  }
}


@keyframes rightarrow {
  50% {
    transform: translateX(8px);
  }

  100% {
    transform: translateX(0px);
  }
}

// @import 'bootstrap/scss/bootstrap';

// Option 2)
// Import all of Bootstrap's CSS

.heartbeat:hover {
  font-weight: 500;
  animation: heartbeat 1s infinite;
}

.bi-box-arrow-in-left:hover {
  font-size: xx-large;
  color: greenyellow !important;
  /* --bs-text-opacity: 100; */
}

.bi-box-arrow-left:hover {
  font-size: xx-large;
  color: red !important;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  /* 20% {
    transform: scale(0.75);
  }
  40% {
    transform: scale(1);
  } */
  60% {
    transform: scale(1.25);
  }
  /* 80% {
    transform: scale(1);
  } */
  100% {
    transform: scale(1);
  }
}

// $breadcrumb-divider-flipped: quote(">");
// $breadcrumb-divider: quote(">");
// $breadcrumb-divider: quote("\\003E");
// $breadcrumb-divider: quote("\\203A");
// $breadcrumb-divider: quote("\\00BB");

.breadcrumb-item{
  + .breadcrumb-item {
    &::before {
      float: right !important;
    }
  }
}

fieldset {
  /* border: 1px solid #898b8d !important; */
  border: 1px solid #ced4da !important;
  padding: 20px !important;
}

.reset {
  all: revert;
}

.form-floating {
  > .form-control,
  > .form-control-plaintext,
  > .form-select {
    &:focus,
    &:not(:placeholder-shown) {
      ~ label {
        transform-origin: 100% 0 !important;
      }
    }
  }
}

//  file upload component style
.custom-file-button {
  .fileUploadInput input[type="file"] {
    margin-left: -2px !important;

    &::-webkit-file-upload-button {
      display: none;
    }
    &::file-selector-button {
      display: none;
    }
  }

  &:hover {
    label {
      background-color: #dde0e3;
      cursor: pointer;
    }
  }
}

@import 'bootstrap/scss/bootstrap';
// @import 'bootstrap/dist/css/bootstrap.rtl.min.css';
@import 'bootstrap/dist/css/bootstrap.rtl.css';
@import '~bootstrap-icons/font/bootstrap-icons.css';
`;
  createFile(`${stylePath}`, `${'style'}.scss`, injectedContent);

  /********************************************************************************
   *                        style.css file
   ********************************************************************************/
  injectedContent = `@import url(./font.css); /* لینک فایلی که وظیفه بارگذاری فونت ها را برعهده دارد */
  body {
    font-family: IRANSans !important;
    font-weight: 300;
    direction: rtl;
    background-color: #E2E2E2;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6,input, textarea {
    font-family: IRANSans !important;
  }
  h1 {
    font-weight: bold;
  }
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
  .ltr {
    direction: ltr;
  }
  .text-right {
    text-align: right;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-small {
    font-size: 0.8em;
  }
  .text-xsmall {
    font-size: 0.6em;
  }
  .text-large {
    font-size: 1.2em;
  }
  .text-xlarge {
    font-size: 1.4em;
  }
  .text-underline {
    text-decoration:underline;
  }
  .text-ultralight {
    font-weight: 200;
  }
  .text-light {
    font-weight: 300;
  }
  .text-regular {
    font-weight: normal;
  }
  .text-medium {
    font-weight: 500;
  }
  .text-bold {
    font-weight: bold;
  }
  .text-black {
    font-weight: 900;
  }
  blockquote {
    font-weight: 500;
    padding: 10px;
    border: 1px dashed #666666;
  }
  
  .mainbox {
    width: 100%;
    background-color: #EFEFEF;
    display: table;
    margin-bottom: 30px;
    border-right: 8px solid #FFFF33;
  }
  
  .mainboxnegativ {
    width: 100%;
    background-color: #000000;
    display: table;
    margin-bottom: 30px;
    border-right: 8px solid #FFFF33;
    color: #F9F9F9;
  }
  
  .mainbox2 {
    font-size: 1em;
    width: 90%;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .mainbox3 {
    width: 100%;
    background-color: #b8b8b8;
    display: table;
    margin-bottom: 30px;
    border-right: 8px solid #bd70ff;
  }
  
  .mainbox2negativ {
    font-size: 1em;
    color: #F9F9F9;
    background-color: #000000;
    padding-right: 20px;
  }
  
  .farsiparagraph {
    font-size: 1em;
    width: 47%;
    float:right;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  
  }
  .englishparagraph {
    font-size: 1em;
    width: 47%;
    float: left;
    direction:ltr;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  
  
  }
  .rightbox {
    width: 60%;
    padding-right: 20px;
    padding-left: 5px;
    float: right;
    margin-left: 10px;
    margin-bottom: 0px;
    min-width: 0px;
    background-color: #F7F7F7;
  
  }
  
  .titelbox {
    width: 60%;
    padding-right: 25px;
    padding-left: 0px;
    float: right;
    margin-left: 10px;
    margin-bottom: 0px;
    min-width: 0px;
    background-color: #F2F2F2;
    color: #4B4B4B;
  }
  
  
  .lefttbox {
    
    padding-right: 20px;
    padding-left: 4px;
    float: right;
    margin-bottom: 10px;
    min-width: 0px;
  }
  
  .alphabet {
    width: 35%;
    float: left;
    font-size: 21em;
    text-align: center;
    font-weight: 500;
    color: #999999;
  }
  
  .alphabet2 {
    width: 35%;
    float: left;
    direction: ltr;
    font-size: 1.6em;
    text-align: left;
    font-weight: 500;
    color: #333333;
    margin-top: 100px;
  }
  .footer {
    font-weight: 300;
    font-size: 0.7em;
    text-align: center;
    direction: ltr;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  `
  createFile(`${stylesheetPath}`, `${'style'}.css`, injectedContent);

  /********************************************************************************
   *                        font.css file
   ********************************************************************************/
  injectedContent = `/**
  *
  *	Name:			IRAN Sans-Serif Font
  *	Version:		5.0
  *	Author:			Moslem Ebrahimi (moslemebrahimi.com)
  *	Created on:		Dec 25, 2012
  *	Updated on:		Sep 01, 2017
  *	Website:		             http://fontiran.com
  *	Copyright:		Commercial/Proprietary Software
  --------------------------------------------------------------------------------------
  فونت های ایران سن سریف یک نرم افزار مالکیتی محسوب می شود. جهت آگاهی از قوانین استفاده از این فونت ها لطفا به وب سایت (فونت ایران دات کام) مراجعه نمایید
  --------------------------------------------------------------------------------------
  IRAN Sans-serif fonts are considered a proprietary software. To gain information about the laws regarding the use of these fonts, please visit www.fontiran.com 
  --------------------------------------------------------------------------------------
  This set of fonts are used in this project under the license: (.....)
  --------------------------------------------------------------------------------------
  *	
  **/
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 900;
    src: url("../font/eot/IRANSansWeb(FaNum)_Black.eot");
    src: url("../font/eot/IRANSansWeb(FaNum)_Black.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-8 */ url("../font/woff2/IRANSansWeb(FaNum)_Black.woff2")
        format("woff2"),
      /* FF39+,Chrome36+, Opera24+*/
        url("../font/woff/IRANSansWeb(FaNum)_Black.woff") format("woff"),
      /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url("../font/ttf/IRANSansWeb(FaNum)_Black.ttf") format("truetype");
  }
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: bold;
    src: url("../font/eot/IRANSansWeb(FaNum)_Bold.eot");
    src: url("../font/eot/IRANSansWeb(FaNum)_Bold.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-8 */ url("../font/woff2/IRANSansWeb(FaNum)_Bold.woff2")
        format("woff2"),
      /* FF39+,Chrome36+, Opera24+*/
        url("../font/woff/IRANSansWeb(FaNum)_Bold.woff") format("woff"),
      /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url("../font/ttf/IRANSansWeb(FaNum)_Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 500;
    src: url("../font/eot/IRANSansWeb(FaNum)_Medium.eot");
    src: url("../font/eot/IRANSansWeb(FaNum)_Medium.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-8 */ url("../font/woff2/IRANSansWeb(FaNum)_Medium.woff2")
        format("woff2"),
      /* FF39+,Chrome36+, Opera24+*/
        url("../font/woff/IRANSansWeb(FaNum)_Medium.woff") format("woff"),
      /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url("../font/ttf/IRANSansWeb(FaNum)_Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 300;
    src: url("../font/eot/IRANSansWeb(FaNum)_Light.eot");
    src: url("../font/eot/IRANSansWeb(FaNum)_Light.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-8 */ url("../font/woff2/IRANSansWeb(FaNum)_Light.woff2")
        format("woff2"),
      /* FF39+,Chrome36+, Opera24+*/
        url("../font/woff/IRANSansWeb(FaNum)_Light.woff") format("woff"),
      /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url("../font/ttf/IRANSansWeb(FaNum)_Light.ttf") format("truetype");
  }
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 200;
    src: url("../font/eot/IRANSansWeb(FaNum)_UltraLight.eot");
    src: url("../font/eot/IRANSansWeb(FaNum)_UltraLight.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-8 */ url("../font/woff2/IRANSansWeb(FaNum)_UltraLight.woff2")
        format("woff2"),
      /* FF39+,Chrome36+, Opera24+*/
        url("../font/woff/IRANSansWeb(FaNum)_UltraLight.woff") format("woff"),
      /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url("../font/ttf/IRANSansWeb(FaNum)_UltraLight.ttf") format("truetype");
  }
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url("../font/eot/IRANSansWeb(FaNum).eot");
    src: url("../font/eot/IRANSansWeb(FaNum).eot?#iefix")
        format("embedded-opentype"),
      /* IE6-8 */ url("../font/woff2/IRANSansWeb(FaNum).woff2") format("woff2"),
      /* FF39+,Chrome36+, Opera24+*/ url("../font/woff/IRANSansWeb(FaNum).woff")
        format("woff"),
      /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url("../font/ttf/IRANSansWeb(FaNum).ttf") format("truetype");
  }
  
  .MuiInputBase-inputSizeSmall::placeholder {
    font-size: 0.875rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:active {
    transition: background-color 0s 600000s, color 0s 600000s !important;
    -webkit-box-shadow: 0 0 0 30px rgba(255, 255, 255, 0) inset !important;
  }
  `
  createFile(`${stylesheetPath}`, `${'font'}.css`, injectedContent);

  /********************************************************************************
   *                        makeRequest.js file
   ********************************************************************************/
  injectedContent = `import axios from 'axios';
import { fakeAuthProvider } from '../auth';
var JSONbigNative = require('json-bigint')({ useNativeBigInt: true });

export function sendRequest(url, method, body) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: \`Bearer \${fakeAuthProvider.token}\`,
    },
    transformResponse: data => {
      if (typeof data == 'string') {
        try {
          data = JSONbigNative.parse(data)
          return data
        } catch (error) {

        }
      }
    }
  };
  //Intercept after response, usually to deal with result data or handle ajax call errors
  const instance = axios.create(config);
  
//register interceptor like this
// http.interceptors.response.use(responseHandler, responseErrorHandler)

  instance.interceptors.response.use(
    res => res,
    error => {
      const response = error?.response
      const request = error?.request
      const config = error?.config //here we have access the config used to make the api call (we can make a retry using this conf)
      if (response) {
        const status = error?.response?.status || null
        if ([400, 401, 402, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429,
          431,
          451,
          500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511].includes(status)) {
          return Promise.reject(
            JSON.stringify({
              status: status,
              message: response?.data?.apierror?.message,
            })
          )
        } else if ([403].includes(status)) {
          return Promise.reject(
            JSON.stringify({
              status: status,
              message: 'پورتال برای مدت زیادی بدون استفاده مانده است',
            })
          )
        }
        // if (status == 400) {
        //   return Promise.reject(
        //     JSON.stringify({
        //       status: status,
        //       message: 'خطا در مقادیر ارسال شده - 400',
        //     })
        //   )
        // }
        // if (status == 401) {
        //   return Promise.reject(
        //     JSON.stringify({
        //       status: status,
        //       message: 'خطای شبکه در اتصال به سرور - 401',
        //     })
        //   )
        //   // throw (json({
        //   //   status: status,
        //   //   message: 'خطای شبکه در اتصال به سرور - 401',
        //   // }))
        // } else if (status == 403) {
        //   return Promise.reject(
        //     JSON.stringify({
        //       status: status,
        //       message: 'خطای شبکه در اتصال به سرور - 403',
        //     })
        //   )
        //   // throw (json({
        //   //   status: status,
        //   //   message: 'خطای شبکه در اتصال به سرور - 403',
        //   // }))
        // } else if (status == 409) {
        //   return Promise.reject(
        //     JSON.stringify({
        //       status: status,
        //       message: 'تفاهم نامه بااین شماره آرشیو قبلا ثبت شده است',
        //     })
        //   )
        //   // throw (json({
        //   //   status: status,
        //   //   message: 'خطای شبکه در اتصال به سرور - 403',
        //   // }))
        // } else {
        //   return Promise.reject(
        //     JSON.stringify({
        //       status: 0,
        //       message: 'خطای ناشناخته',
        //     })
        //   )
        // }
      } else if (request) {
        //The request was made but no response was received, \`error.request\` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
        if (error.code === 'ERR_NETWORK') {
          // console.log('connection problems..')
          throw (JSON.stringify({
            status: 0,
            message: 'خطا در اتصال به سرور تفاهم نامه ها',
          }))
        } else if (error.code === 'ERR_CANCELED') {
          // console.log('connection canceled..')
          throw (JSON.stringify({
            status: 1,
            message: 'خطا در ارسال مقادیر به سرور',
          }))
        }
      }
    }
  )
  // instance.interceptors.response.use_ = function (onFullfilled, onRejected) { }


  return instance({
    url: url,
    method: method,
    data: JSON.stringify(body),
  })
    .then(response => {
      return response
    })
  // .catch((err) => { 
  //   console.log(err);
  //   throw ('خطای شبکه در برقراری ارتباط با سرور') 
  // }
  // );
}

export async function sendFile(url, method, body) {
  const config = {
    // baseUrl: url,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: \`Bearer \${fakeAuthProvider.token}\`,
    },
  };

  const instance = axios.create(config);
  return await instance({
    url: url,
    method: method,
    data: body,
  })
    .then(response => {
      return response
    })
    .catch(() => { throw ('خطا شبکه در برقراری ارتباط با سرور') }
    );
}

export async function recieveFile(url, method, body) {
  const config = {
    headers: {
      responseType: 'blob',
      Authorization: \`Bearer \${fakeAuthProvider.token}\`,
    },
  };
  const instance = axios.create(config);
  return await instance({
    url: url,
    method: method,
    data: body,
  })
    .then(response => {
      return response
    })
    .catch(() => { throw ('خطا شبکه در برقراری ارتباط با سرور') }
    );
}


export class HttpError extends Error {
  constructor(message) {
    super(message) // 'Error' breaks prototype chain here
    this.name = 'HttpError'
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }
}

// this interceptor is used to handle all success ajax request
// we use this to check if status code is 200 (success), if not, we throw an HttpError
// to our error handler take place.
function responseHandler(response) {
  const config = response?.config
  if (config.raw) {
    return response
  }
  if (response.status == 200) {
    const data = response?.data
    if (!data) {
      throw new HttpError('API Error. No data!')
    }
    return data
  }
  throw new HttpError('API Error! Invalid status code!')
}

function responseErrorHandler(response) {
  const config = response?.config
  if (config.raw) {
    return response
  }
  // the code of this function was written in above section.
  return httpErrorHandler(response)
}

function httpErrorHandler(error) {
  if (error === null) throw new Error('Unrecoverable error!! Error is null!')
  if (axios.isAxiosError(error)) {
    //here we have a type guard check, error inside this if will be treated as AxiosError
    const response = error?.response
    const request = error?.request
    const config = error?.config //here we have access the config used to make the api call (we can make a retry using this conf)

    if (error.code === 'ERR_NETWORK') {
      console.log('connection problems..')
    } else if (error.code === 'ERR_CANCELED') {
      console.log('connection canceled..')
    }
    if (response) {
      //The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
      const statusCode = response?.status
      if (statusCode === 404) {
        console.log('The requested resource does not exist or has been deleted')
      } else if (statusCode === 401) {
        console.log('Please login to access this resource')
        //redirect user to login
      }
    } else if (request) {
      //The request was made but no response was received, \`error.request\` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
    }
  }
  //Something happened in setting up the request and triggered an Error
  console.log(error.message)
}`;
  createFile(`${clientUtilPath}`, `${'makeRequest'}.js`, injectedContent);

  /********************************************************************************
  *                        DateFormat.js
  ********************************************************************************/
  injectedContent = `import { fakeAuthProvider } from '../auth';

  const user = fakeAuthProvider.getCredential();
  const today = user.date;
  
  export function getTodayDate() {

    const user = fakeAuthProvider.getCredential();
    const today = user.date;
    
    return {
        day: getDateFormat(today, { day: '2-digit' }),
        month: getDateFormat(today, { month: 'numeric' }),
        monthTitle: getDateFormat(today, { month: 'long' }),
        year: getDateFormat(today, { year: 'numeric' }),
        dayWeek: getDateFormat(today, { weekday: 'long' }),
    }
};

function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
    return date;
}`
  createFile(`${clientUtilPath}`, `${'DateFormat'}.js`, injectedContent);

  /********************************************************************************
  *                        Date.js
  ********************************************************************************/
  injectedContent = `import { fakeAuthProvider } from '../auth';

export function getTodayDate() {

    const user = fakeAuthProvider.getCredential();
    const today = user.date;
    return {
        day: getDateFormat(today, { day: '2-digit' }),
        month: getDateFormat(today, { month: 'numeric' }),
        monthTitle: getDateFormat(today, { month: 'long' }),
        year: getDateFormat(today, { year: 'numeric' }),
        dayWeek: getDateFormat(today, { weekday: 'long' }),
    }
};

export function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
    return date;
}

export function getJalaliDateGregorianFormat(uDate, option) {
    let date = new Intl.DateTimeFormat('fa-IR-u-nu-latn', option).format(uDate);
    return date;
}

function getDateEnFormat(uDate, option) {
    let date = new Intl.DateTimeFormat('en-EN', option).format(uDate);
    return date;
}

export function getUTCFromJalaliDateInString(inputString) {
    //  inputDate e.g. 1403/7/25
    //  Get
    //  Validate
    //  Split
    let inputStringSplitted = inputString.split("/")
    //  convert jalali to gregorian
    const gregorianDate = jalaliToGregorian(inputStringSplitted[0], inputStringSplitted[1], inputStringSplitted[2]);
    //  Format  -   "yyyy-mm-dd"
    const gResult = \`\${gregorianDate[0]}-\${gregorianDate[1]}-\${gregorianDate[2]}\`;
    //  Parse UTC from gregorian
    const gregorianUTC = Date.parse(gResult)
    return gregorianUTC;
}
//  1403/05/34
export function convertDateString(dateString) {
    let dateSplitted
    dateSplitted = dateString.split("/");
    return parseInt(dateSplitted[0]).toLocaleString('Fa-IR', { "style": "decimal", "signDisplay": "never", "useGrouping": false }) + "/" +
        parseInt(dateSplitted[1]).toLocaleString('Fa-IR', { "style": "decimal", "signDisplay": "never", "useGrouping": false }) + "/" +
        parseInt(dateSplitted[2]).toLocaleString('Fa-IR', { "style": "decimal", "signDisplay": "never", "useGrouping": false })
}

export function removeSlashFromDate(date) {
    const year = date.slice(0, date.indexOf('/', 0))
    const month = date.slice(date.indexOf('/', 0) + 1, date.indexOf('/', 5)).length == 1 ? 0 + date.slice(date.indexOf('/', 0) + 1, date.indexOf('/', 5)) : date.slice(date.indexOf('/', 0) + 1, date.indexOf('/', 5))
    const day = date.slice(date.indexOf('/', 5) + 1).length == 1 ? 0 + date.slice(date.indexOf('/', 5) + 1) : date.slice(date.indexOf('/', 5) + 1)
    return year + month + day
}

export function addDaysToUtcDate(utc, days) {
    let utcDate = new Date(utc)
    utcDate.setDate(utcDate.getDate() + days)
    return utcDate
}

export function convertUtc2Date(utc) {
    return {
        day: getJalaliDateGregorianFormat(utc, { day: '2-digit' }),
        month: getJalaliDateGregorianFormat(utc, { month: '2-digit' }),
        monthTitle: getJalaliDateGregorianFormat(utc, { month: 'long' }),
        year: getJalaliDateGregorianFormat(utc, { year: 'numeric' }),
        dayWeek: getJalaliDateGregorianFormat(utc, { weekday: 'long' }),
    }
}

const JalaliDate = {
    g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
};

export function jalaliToGregorian(j_y, j_m, j_d) {
    j_y = parseInt(j_y);
    j_m = parseInt(j_m);
    j_d = parseInt(j_d);
    var jy = j_y - 979;
    var jm = j_m - 1;
    var jd = j_d - 1;

    var j_day_no = 365 * jy + parseInt(jy / 33) * 8 + parseInt((jy % 33 + 3) / 4);
    for (var i = 0; i < jm; ++i) j_day_no += JalaliDate.j_days_in_month[i];

    j_day_no += jd;

    var g_day_no = j_day_no + 79;

    var gy = 1600 + 400 * parseInt(g_day_no / 146097); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
    g_day_no = g_day_no % 146097;

    var leap = true;
    if (g_day_no >= 36525) /* 36525 = 365*100 + 100/4 */ {
        g_day_no--;
        gy += 100 * parseInt(g_day_no / 36524); /* 36524 = 365*100 + 100/4 - 100/100 */
        g_day_no = g_day_no % 36524;

        if (g_day_no >= 365) g_day_no++;
        else leap = false;
    }

    gy += 4 * parseInt(g_day_no / 1461); /* 1461 = 365*4 + 4/4 */
    g_day_no %= 1461;

    if (g_day_no >= 366) {
        leap = false;

        g_day_no--;
        gy += parseInt(g_day_no / 365);
        g_day_no = g_day_no % 365;
    }

    for (var i = 0; g_day_no >= JalaliDate.g_days_in_month[i] + (i == 1 && leap); i++)
        g_day_no -= JalaliDate.g_days_in_month[i] + (i == 1 && leap);
    var gm = i + 1;
    var gd = g_day_no + 1;

    gm = gm < 10 ? "0" + gm : gm;
    gd = gd < 10 ? "0" + gd : gd;

    return [gy, gm, gd];
}
`
  createFile(`${clientUtilPath}`, `${'Date'}.js`, injectedContent);

  /********************************************************************************
  *                        Validation.js
  ********************************************************************************/
  injectedContent = `import { fakeAuthProvider } from "../auth";
import { getUTCFromJalaliDateInString } from "../util/Date";

export function validateTafahomInformation(tafahomInformation) {
    if (
        typeof tafahomInformation.resourceAllocationMethod == 'number'
    ) {
        if (
            tafahomInformation.resourceAllocationMethod == 1 ||
            tafahomInformation.resourceAllocationMethod == 2
        ) {
            //  short
            if (
                tafahomInformation.calculateAVGMethod == null ||
                !(
                    typeof tafahomInformation.calculateAVGMethod == 'number' &&
                    [0, 1].includes(tafahomInformation.calculateAVGMethod)
                )) {
                throw (\`برای این تفاهم نامه، روش محاسبه معدل حساب، تعیین نشده است\`)
            } else {
                if (tafahomInformation.calculateAVGMethod == 0) {
                    //  short
                    if (
                        tafahomInformation.avgDay == null &&
                        !(typeof tafahomInformation.avgDay == 'number' && [30, 90, 180, 270, 360].includes(tafahomInformation.avgDay))
                    ) {
                        throw (\`دوره معدل گیری  مقداردهی نشده است\`)
                    } else if (
                        tafahomInformation.avgDay != null &&
                        (typeof tafahomInformation.avgDay == 'number' && [30, 90, 180, 270, 360].includes(tafahomInformation.avgDay))
                    ) {
                        const todayUTc = fakeAuthProvider.getCredential().date
                        const startDateUtc = getUTCFromJalaliDateInString(tafahomInformation.startDate)
                        const expireDateUtc = getUTCFromJalaliDateInString(tafahomInformation.expireDate)

                        if (todayUTc < startDateUtc) {
                            throw ('تاریخ انعقاد تفاهم نامه فرانرسیده است')
                        } else if (todayUTc > expireDateUtc) {
                            throw ('تاریخ انقضاء تفاهم نامه گذشته است')
                        }
                    }
                    //  all BigDecimal
                    if (tafahomInformation.percentJari == null && typeof tafahomInformation.percentJari != "number") { throw (\`درصد قابل تخصیص از جاری  مقداردهی نشده است\`) }
                    if (tafahomInformation.amountJari == null && typeof tafahomInformation.amountJari != "number") { throw (\`حداکثرمبلغ قابل تخصیص از جاری مقداردهی نشده است\`) }
                    if (tafahomInformation.percentGharz == null && typeof tafahomInformation.percentGharz != "number") { throw (\`درصد قرض قابل تخصیص از الحسنه  مقداردهی نشده است\`) }
                    if (tafahomInformation.amountGharz == null && typeof tafahomInformation.amountGharz != "number") { throw (\`حداکثرمبلغ قابل تخصیص از قرض الحسنه مقداردهی نشده است\`) }
                    if (tafahomInformation.percentShort == null && typeof tafahomInformation.percentShort != "number") { throw (\`درصد کوتاه قابل تخصیص از مدت  مقداردهی نشده است\`) }
                    if (tafahomInformation.amountShort == null && typeof tafahomInformation.amountShort != "number") { throw (\`حداکثرمبلغ قابل تخصیص از کوتاه مدت مقداردهی نشده است\`) }
                    if (tafahomInformation.percentLong == null && typeof tafahomInformation.percentLong != "number") { throw (\`درصد قابل تخصیص از بلندمدت  مقداردهی نشده است\`) }
                    if (tafahomInformation.amountLong == null && typeof tafahomInformation.amountLong != "number") { throw (\`حداکثرمبلغ قابل تخصیص از بلندمدت مقداردهی نشده است\`) }
                } else if (tafahomInformation.calculateAVGMethod == 1) {
                    if (! typeof tafahomInformation.calculateAvgFromDate == 'number') {
                        throw (\`تاریخ محاسبه معدل حساب  مقداردهی نشده است\`)
                    }
                }
            }
            return [tafahomInformation.startDate, tafahomInformation.endDate]
        } else {
            throw ('برای این تفاهم نامه، روش تخصیص منابع براساس معدل، تعیین نشده است. ')
        }
    } else {
        throw ('برای این تفاهم نامه، نحوه تخیصی منابع، تعیین نشده است ')
    }
}


export function validateTafahomInformationBeforeSeri(state) {
  let flag = false
  let msg = \`\`
  if (!state.archiveNumber > 0) { flag = true; msg = \`شماره آرشیو مقداردهی نشده است\`; throw (\`شماره آرشیو مقداردهی نشده است\`) }
  if (!state.tafCode > 0) { flag = true; msg = \`کدتفاهم نامه مقداردهی نشده است\`; throw (\`کدتفاهم نامه مقداردهی نشده است\`) }
  if (flag == false) {
      if (typeof state.title == 'string' && state.title.length == 0) {
          flag = true; msg = \`عنوان تفاهم نامه مقداردهی نشده است\`; throw (\`عنوان تفاهم نامه مقداردهی نشده است\`)
      }
  }
  if (![0, 1, 2].includes(state.tafScope)) { flag = true; msg = \`دامنه تفاهم نامه مقداردهی نشده است\`; throw (\`دامنه تفاهم نامه مقداردهی نشده است\`) }
  if (flag == false) {
      if (state.tafScope == 0 || state.tafScope == 1) {
          //  console.log('**Sec-1**')
          if (!state.branchManagementTitle.length > 0) { flag = true; msg = \`مدیریت شعب مقداردهی نشده است\`; throw (\`مدیریت شعب مقداردهی نشده است\`) }
      }
      if (!typeof state.branchManagement == 'number') { flag = true; msg = \`کدمدیریت شعب مقداردهی نشده است\`; throw (\`کدمدیریت شعب مقداردهی نشده است\`) }
      if (!state.branchTitle.length > 0) { flag = true; msg = \`شعبه عامل مقداردهی نشده است\`; throw (\`شعبه عامل مقداردهی نشده است\`) }
      if (!typeof state.branch == 'number') { flag = true; msg = \`کدشعبه عامل مقداردهی نشده است\`; throw (\`کدشعبه عامل مقداردهی نشده است\`) }
  } else if (state.tafScope == 2) {
      flag = true; msg = \`ارسال به اداره کل اعتباری برای تفاهم نامه با دامنه تخصصی مقدور نمی باشد\`; throw (\`ارسال به اداره کل اعتباری برای تفاهم نامه با دامنه تخصصی مقدور نمی باشد \`)
      // if (!typeof state.administration == 'number') { flag = true; msg = \`کداداره کل مقداردهی نشده است\`; setErrorCode(1409); setMessage(\`کداداره کل مقداردهی نشده است\`) } }
      // if (!state.administrationTitle.length > 0) { flag = true; msg = \`اداره کل مقداردهی نشده است\`; setErrorCode(1410); setMessage(\`اداره کل مقداردهی نشده است\`) } }
  }
  // }
  if (!typeof state.region == 'number' && state.region > 0) { flag = true; msg = \`ناحیه مقداردهی نشده است\`; throw (\`ناحیه مقداردهی نشده است\`) }
  if (state.extCustId == null || !typeof state.extCustId == 'number') { flag = true; msg = \`شماره مشتری/سازمان مقداردهی نشده است\`; throw (\`شماره مشتری/سازمان مقداردهی نشده است\`) }
  if (!state.customerName.length > 0) { flag = true; msg = \`نام مشتری مقدار دهی نشده است\`; throw (\`نام مشتری مقدار دهی نشده است\`) }
  //  console.log('**Sec-2**')
  if (!typeof state.intCustId == 'number') { flag = true; msg = \`شماره داخلی مشتری مقدار دهی نشده است\`; throw (\`شماره داخلی مشتری مقدار دهی نشده است\`) }
  if (typeof state.startDate != 'string' || (typeof state.startDate == 'string' && (state.startDate.length == 0 || state.startDate.length > 10))) { flag = true; msg = \`تاریخ انعقاد مقدار دهی نشده است\`; throw (\`تاریخ انعقاد مقدار دهی نشده است\`) }
  if (typeof state.expireDate != 'string' || (typeof state.expireDate == 'string' && (state.expireDate.length == 0 || state.expireDate.length > 10))) { flag = true; msg = \`تاریخ انقضاء مقداردهی نشده است\`; throw (\`تاریخ انقضاء مقداردهی نشده است\`) }
  if (typeof state.zoneType != 'number' || (typeof state.zoneType == 'number' && ![3, 5].includes(state.zoneType))) { flag = true; msg = \`نوع منطقه مقداردهی نشده است\`; throw (\`نوع منطقه مقداردهی نشده است\`) }
  //  console.log('**Sec-3**')
  if (typeof state.services != 'string' || (typeof state.services == 'string' && !['0'].some(r => { return \`\${state.services}\`.split(',').includes(r) }))) { flag = true; msg = \`خدمات موضوع تفاهم نامه شامل گزینه تسهیلات اعتباری نمی باشد\`; throw (\`خدمات موضوع تفاهم نامه مقدارد دهی نشده است\`) }
  //  radio - short
  if (state.resourceAllocationMethod == null || !(typeof state.resourceAllocationMethod == 'number' && [0, 1, 2].includes(state.resourceAllocationMethod))) { flag = true; msg = \`نحوه تخصیص منابع مقداردهی نشده است\`; throw (\`نحوه تخصیص منابع مقداردهی نشده است\`) }
  //  short
  if (state.includeBalance == null || !(typeof state.includeBalance == 'number' && [0, 1].includes(state.includeBalance))) { flag = true; msg = \`تجدیدپذیری منابع مقداردهی نشده است\`; throw (\`تجدیدپذیری منابع مقداردهی نشده است\`) }
  if (typeof state.numOfPerson != 'number' || (typeof state.numOfPerson == 'number' && state.numOfPerson == 0)) { flag = true; msg = \`تعداد افراد قابل اعطا مقداردهی نشده است\`; throw (\`تعداد افراد قابل اعطا مقداردهی نشده است\`) }
  if (flag == false) {
      // if (typeof state.resourceAllocationMethod != 'number' || !(typeof state.resourceAllocationMethod == 'number' && ([0, 1, 2].includes(state.resourceAllocationMethod)))) { flag = true; msg = \`نحوه تخصیص منابع مقداردهی نشده است\`; setErrorCode(14211); setMessage(\`نحوه تخصیص منابع مقداردهی نشده است\`) }
      if (typeof state.resourceAllocationMethod == 'number' && (state.resourceAllocationMethod == 0 || state.resourceAllocationMethod == 2)) {
          if (flag == false) {
              //  BigDecimal
              if (state.fixAmount == null || typeof state.fixAmount != 'number') { flag = true; msg = \`مبلغ ثابت قابل اعطا  مقداردهی نشده است\`; throw (\`مبلغ ثابت قابل اعطا  مقداردهی نشده است\`) }
          }
      } else if (typeof state.resourceAllocationMethod == 'number' && (state.resourceAllocationMethod == 1 || state.resourceAllocationMethod == 2)) {
          //  short
          if (state.calculateAVGMethod == null || !(typeof state.calculateAVGMethod == 'number' && [0, 1].includes(state.calculateAVGMethod))) { flag = true; msg = \`روش معدل حساب  مقداردهی نشده است\`; throw (\`روش معدل حساب  مقداردهی نشده است\`) }

          if (flag == false) {
              if (state.calculateAVGMethod == 0) {
                  //  short
                  if (state.avgDay == null && !(typeof state.avgDay == 'number' && [30, 90, 180, 270, 360].includes(state.avgDay))) { flag = true; msg = \`دوره معدل گیری  مقداردهی نشده است\`; throw (\`دوره معدل گیری  مقداردهی نشده است\`) }

                  //  all BigDecimal
                  if (state.percentJari == null && typeof state.percentJari != "number") { flag = true; msg = \`درصد قابل تخصیص از جاری  مقداردهی نشده است\`; throw (\`درصد قابل تخصیص از جاری  مقداردهی نشده است\`) }
                  if (state.amountJari == null && typeof state.amountJari != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از جاری مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از جاری مقداردهی نشده است\`) }
                  if (state.percentGharz == null && typeof state.percentGharz != "number") { flag = true; msg = \`درصد قرض قابل تخصیص از الحسنه  مقداردهی نشده\`; throw (\`درصد قرض قابل تخصیص از الحسنه  مقداردهی نشده است\`) }
                  if (state.amountGharz == null && typeof state.amountGharz != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از قرض الحسنه مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از قرض الحسنه مقداردهی نشده است\`) }
                  if (state.percentShort == null && typeof state.percentShort != "number") { flag = true; msg = \`درصد کوتاه قابل تخصیص از مدت  مقداردهی نشده است\`; throw (\`درصد کوتاه قابل تخصیص از مدت  مقداردهی نشده است\`) }
                  if (state.amountShort == null && typeof state.amountShort != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از کوتاه مدت مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از کوتاه مدت مقداردهی نشده است\`) }
                  if (state.percentLong == null && typeof state.percentLong != "number") { flag = true; msg = \`درصد قابل تخصیص از بلندمدت  مقداردهی نشده است\`; throw (\`درصد قابل تخصیص از بلندمدت  مقداردهی نشده است\`) }
                  if (state.amountLong == null && typeof state.amountLong != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از بلندمدت مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از بلندمدت مقداردهی نشده است\`) }
              } else if (state.calculateAVGMethod == 1) {
                  if (! typeof state.calculateAvgFromDate == 'string' || state.calculateAvgFromDate == '') { flag = true; msg = \`تاریخ محاسبه معدل حساب  مقداردهی نشده است\`; throw (\`تاریخ محاسبه معدل حساب  مقداردهی نشده است\`) }
              }
          }
      }
  }
  // if (! typeof state.expertId == 'number') { flag = true; msg = \`کارشناس تفاهم نامه مقداردهی نشده است\`; setErrorCode(1434); setMessage(\`کارشناس تفاهم نامه مقداردهی نشده است\`) } }
  //  short
}

export function validateTafahomInformation4TafState(state) {
    let flag = false
    let msg = \`\`
    if (state.seri == null || (typeof state.seri == 'string' && state.seri.length == 0)) { flag = true; msg = \` این تفاهم نامه به اداره کل برنامه ریزی ونظارت اعتباری ارسال نشده است .\`; throw (\`این تفاهم نامه به اداره کل برنامه ریزی ونظارت ارسال نشده است .\`) }
    //  console.log('3');
    if (state.tafStateCode == null || state.tafStateCode != '3') { flag = true; msg = \` تفاهم نامه در وضعیت نافذ نمی باشد.\`; throw (\`وضعیت تفاهم نامه مقداردهی نشده است.\`) }
    if (state.tafStateDescription == '') { flag = true; msg = \` تفاهم نامه در وضعیت نافذ نمی باشد.\`; throw (\`وضعیت تفاهم نامه مقداردهی نشده است.\`) }
    // includBalance
    if (!state.archiveNumber > 0) { flag = true; msg = \`شماره آرشیو مقداردهی نشده است\`; throw (\`شماره آرشیو مقداردهی نشده است\`) }
    if (!state.tafCode > 0) { flag = true; msg = \`کدتفاهم نامه مقداردهی نشده است\`; throw (\`کدتفاهم نامه مقداردهی نشده است\`) }
    if (flag == false) {
        if (typeof state.title == 'string' && state.title.length == 0) {
            flag = true; msg = \`عنوان تفاهم نامه مقداردهی نشده است\`; throw (\`عنوان تفاهم نامه مقداردهی نشده است\`)
        }
    }
    if (![0, 1, 2].includes(state.tafScope)) { flag = true; msg = \`دامنه تفاهم نامه مقداردهی نشده است\`; throw (\`دامنه تفاهم نامه مقداردهی نشده است\`) }
    if (flag == false) {
        if (state.tafScope == 0 || state.tafScope == 1) {
            //  console.log('**Sec-1**')
            if (!state.branchManagementTitle.length > 0) { flag = true; msg = \`مدیریت شعب مقداردهی نشده است\`; throw (\`مدیریت شعب مقداردهی نشده است\`) }
        }
        if (!typeof state.branchManagement == 'number') { flag = true; msg = \`کدمدیریت شعب مقداردهی نشده است\`; throw (\`کدمدیریت شعب مقداردهی نشده است\`) }
        if (!state.branchTitle.length > 0) { flag = true; msg = \`شعبه عامل مقداردهی نشده است\`; throw (\`شعبه عامل مقداردهی نشده است\`) }
        if (!typeof state.branch == 'number') { flag = true; msg = \`کدشعبه عامل مقداردهی نشده است\`; throw (\`کدشعبه عامل مقداردهی نشده است\`) }
    } else if (state.tafScope == 2) {
        flag = true; msg = \`ارسال به اداره کل اعتباری برای تفاهم نامه با دامنه تخصصی مقدور نمی باشد\`; throw (\`ارسال به اداره کل اعتباری برای تفاهم نامه با دامنه تخصصی مقدور نمی باشد \`)
        // if (!typeof state.administration == 'number') { flag = true; msg = \`کداداره کل مقداردهی نشده است\`; setErrorCode(1409); setMessage(\`کداداره کل مقداردهی نشده است\`) } }
        // if (!state.administrationTitle.length > 0) { flag = true; msg = \`اداره کل مقداردهی نشده است\`; setErrorCode(1410); setMessage(\`اداره کل مقداردهی نشده است\`) } }
    }
    // }
    if (!typeof state.region == 'number' && state.region > 0) { flag = true; msg = \`ناحیه مقداردهی نشده است\`; throw (\`ناحیه مقداردهی نشده است\`) }
    if (state.extCustId == null || !typeof state.extCustId == 'number') { flag = true; msg = \`شماره مشتری/سازمان مقداردهی نشده است\`; throw (\`شماره مشتری/سازمان مقداردهی نشده است\`) }
    if (!state.customerName.length > 0) { flag = true; msg = \`نام مشتری مقدار دهی نشده است\`; throw (\`نام مشتری مقدار دهی نشده است\`) }
    //  console.log('**Sec-2**')
    if (!typeof state.intCustId == 'number') { flag = true; msg = \`شماره داخلی مشتری مقدار دهی نشده است\`; throw (\`شماره داخلی مشتری مقدار دهی نشده است\`) }
    if (typeof state.startDate != 'string' || (typeof state.startDate == 'string' && (state.startDate.length == 0 || state.startDate.length > 10))) { flag = true; msg = \`تاریخ انعقاد مقدار دهی نشده است\`; throw (\`تاریخ انعقاد مقدار دهی نشده است\`) }
    if (typeof state.expireDate != 'string' || (typeof state.expireDate == 'string' && (state.expireDate.length == 0 || state.expireDate.length > 10))) { flag = true; msg = \`تاریخ انقضاء مقداردهی نشده است\`; throw (\`تاریخ انقضاء مقداردهی نشده است\`) }
    if (typeof state.zoneType != 'number' || (typeof state.zoneType == 'number' && ![3, 5].includes(state.zoneType))) { flag = true; msg = \`نوع منطقه مقداردهی نشده است\`; throw (\`نوع منطقه مقداردهی نشده است\`) }
    //  console.log('**Sec-3**')
    if (typeof state.services != 'string' || (typeof state.services == 'string' && !['0'].some(r => { return \`\${state.services}\`.split(',').includes(r) }))) { flag = true; msg = \`خدمات موضوع تفاهم نامه شامل گزینه تسهیلات اعتباری نمی باشد\`; throw (\`خدمات موضوع تفاهم نامه مقدارد دهی نشده است\`) }
    //  radio - short
    if (state.resourceAllocationMethod == null || !(typeof state.resourceAllocationMethod == 'number' && [0, 1, 2].includes(state.resourceAllocationMethod))) { flag = true; msg = \`نحوه تخصیص منابع مقداردهی نشده است\`; throw (\`نحوه تخصیص منابع مقداردهی نشده است\`) }
    //  short
    if (state.includeBalance == null || !(typeof state.includeBalance == 'number' && [0, 1].includes(state.includeBalance))) { flag = true; msg = \`تجدیدپذیری منابع مقداردهی نشده است\`; throw (\`تجدیدپذیری منابع مقداردهی نشده است\`) }
    if (typeof state.numOfPerson != 'number' || (typeof state.numOfPerson == 'number' && state.numOfPerson == 0)) { flag = true; msg = \`تعداد افراد قابل اعطا مقداردهی نشده است\`; throw (\`تعداد افراد قابل اعطا مقداردهی نشده است\`) }
    if (flag == false) {
        // if (typeof state.resourceAllocationMethod != 'number' || !(typeof state.resourceAllocationMethod == 'number' && ([0, 1, 2].includes(state.resourceAllocationMethod)))) { flag = true; msg = \`نحوه تخصیص منابع مقداردهی نشده است\`; setErrorCode(14211); setMessage(\`نحوه تخصیص منابع مقداردهی نشده است\`) }
        if (typeof state.resourceAllocationMethod == 'number' && (state.resourceAllocationMethod == 0 || state.resourceAllocationMethod == 2)) {
            if (flag == false) {
                //  BigDecimal
                if (state.fixAmount == null || typeof state.fixAmount != 'number') { flag = true; msg = \`مبلغ ثابت قابل اعطا  مقداردهی نشده است\`; throw (\`مبلغ ثابت قابل اعطا  مقداردهی نشده است\`) }
            }
        } else if (typeof state.resourceAllocationMethod == 'number' && (state.resourceAllocationMethod == 1 || state.resourceAllocationMethod == 2)) {
            //  short
            if (state.calculateAVGMethod == null || !(typeof state.calculateAVGMethod == 'number' && [0, 1].includes(state.calculateAVGMethod))) { flag = true; msg = \`روش معدل حساب  مقداردهی نشده است\`; throw (\`روش معدل حساب  مقداردهی نشده است\`) }

            if (flag == false) {
                if (state.calculateAVGMethod == 0) {
                    //  short
                    if (state.avgDay == null && !(typeof state.avgDay == 'number' && [30, 90, 180, 270, 360].includes(state.avgDay))) { flag = true; msg = \`دوره معدل گیری  مقداردهی نشده است\`; throw (\`دوره معدل گیری  مقداردهی نشده است\`) }

                    //  all BigDecimal
                    if (state.percentJari == null && typeof state.percentJari != "number") { flag = true; msg = \`درصد قابل تخصیص از جاری  مقداردهی نشده است\`; throw (\`درصد قابل تخصیص از جاری  مقداردهی نشده است\`) }
                    if (state.amountJari == null && typeof state.amountJari != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از جاری مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از جاری مقداردهی نشده است\`) }
                    if (state.percentGharz == null && typeof state.percentGharz != "number") { flag = true; msg = \`درصد قرض قابل تخصیص از الحسنه  مقداردهی نشده\`; throw (\`درصد قرض قابل تخصیص از الحسنه  مقداردهی نشده است\`) }
                    if (state.amountGharz == null && typeof state.amountGharz != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از قرض الحسنه مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از قرض الحسنه مقداردهی نشده است\`) }
                    if (state.percentShort == null && typeof state.percentShort != "number") { flag = true; msg = \`درصد کوتاه قابل تخصیص از مدت  مقداردهی نشده است\`; throw (\`درصد کوتاه قابل تخصیص از مدت  مقداردهی نشده است\`) }
                    if (state.amountShort == null && typeof state.amountShort != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از کوتاه مدت مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از کوتاه مدت مقداردهی نشده است\`) }
                    if (state.percentLong == null && typeof state.percentLong != "number") { flag = true; msg = \`درصد قابل تخصیص از بلندمدت  مقداردهی نشده است\`; throw (\`درصد قابل تخصیص از بلندمدت  مقداردهی نشده است\`) }
                    if (state.amountLong == null && typeof state.amountLong != "number") { flag = true; msg = \`حداکثرمبلغ قابل تخصیص از بلندمدت مقداردهی نشده است\`; throw (\`حداکثرمبلغ قابل تخصیص از بلندمدت مقداردهی نشده است\`) }
                } else if (state.calculateAVGMethod == 1) {
                    if (! typeof state.calculateAvgFromDate == 'string' || state.calculateAvgFromDate == '') { flag = true; msg = \`تاریخ محاسبه معدل حساب  مقداردهی نشده است\`; throw (\`تاریخ محاسبه معدل حساب  مقداردهی نشده است\`) }
                }
            }
        }
    }
    // if (! typeof state.expertId == 'number') { flag = true; msg = \`کارشناس تفاهم نامه مقداردهی نشده است\`; setErrorCode(1434); setMessage(\`کارشناس تفاهم نامه مقداردهی نشده است\`) } }
    //  short
}

export function validateAccounts(accounts) {
    accounts.map(account => {
        if (
            account.extAccNo == null || !typeof account.extAccNo == 'number'
        ) {
            throw (\`شماره حساب مشتری/ سازمان تعریف نشده است\`);
        } else if (
            account.extAccNo.toString().length < 5
        ) {
            throw (\`حساب مشتری/ سازمان باشماره  \${account.extAccNo} معتبر نمی باشد\`);
        } else if (
            account.accTypeCode == null ||
            !typeof account.accTypeCode == 'number'
        ) {
            thorw(\`نوع حساب مشتری/ سازمان مقداردهی نشده است\`);
        } else if (
          account.statusCode != 1
      ) {
          throw (\`حساب ثبت شده با شماره \${account.extAccNo} باز نمی باشد\`)
      }
    })
}


export function calculateAverage(customerUniqueAccounts, accountAverage) {
  let jariAverage = 0
  let shortNormal = 0
  let shortVije = 0
  let shortTarjihi = 0
  let gharzAverage = 0
  let longYearAverage = 0
  let jariDolati = 0
  let longAverage = 0

  let jariArziAverage = 0
  let gharzArziAverage = 0
  let shortArziAverage = 0
  let longArziAverage = 0

  for (let i = 0; i < accountAverage.length; i++) {
      const accType = accountAverage[i]['accTypeCode']
      const avgBalance = accountAverage[i]['avgBalance'];
      const categoryCode = customerUniqueAccounts[i]['categoryCode']
      const custType = customerUniqueAccounts[i]['custType']
      const tarjihiRate = customerUniqueAccounts[i]['tarjihiRate']

      if (accType > 100 && accType < 200) {
          if (categoryCode == 1 && custType == 3) {
              jariDolati += avgBalance
          } else {
              jariAverage += avgBalance
          }
      } else if ((accType > 200 && accType < 300) || (accType > 700 && accType < 800)) {
          gharzAverage += avgBalance
      } else if (accType > 300 && accType < 400) {
          if (categoryCode == 3 && custType == 2 && accType == 383) {
              shortVije += avgBalance
          } else if (tarjihiRate > 0) {
              shortTarjihi += avgBalance
          } else {
              shortNormal += avgBalance
          }
      } else if (accType > 400 && accType < 500) {
          if (categoryCode == 4 && custType == 2 && accType == 459) {
              longYearAverage += avgBalance
          } else {
              longAverage += avgBalance
          }
      } else if (accType > 1100 && accType < 1200) {
          jariArziAverage += avgBalance
      } else if (accType > 2200 && accType < 2300) {
          gharzArziAverage += avgBalance
      } else if (accType > 3300 && accType < 3400) {
          shortArziAverage += avgBalance
      } else if (accType > 4400 && accType < 4500) {
          longArziAverage += avgBalance
      }
      return {
          jariAverage: jariAverage,
          jariDolati: jariDolati,
          gharzAverage: gharzAverage,
          shortNormal: shortNormal,
          shortVije: shortVije,
          shortTarjihi: shortTarjihi,
          longYearAverage: longYearAverage,
          longAverage: longAverage,
          sumRial: jariAverage + jariDolati + gharzAverage + shortNormal + shortVije + shortTarjihi + longAverage + longYearAverage,

          jariArziAverage: jariArziAverage,
          gharzArziAverage: gharzArziAverage,
          shortArziAverage: shortArziAverage,
          longArziAverage: longArziAverage,
          sumArz: jariArziAverage + gharzArziAverage + shortArziAverage + longArziAverage
      }
  }
}
`
  createFile(`${clientUtilPath}`, `${'validation'}.js`, injectedContent);

  /********************************************************************************
  *                        reportLogic.js
  ********************************************************************************/
  injectedContent = `import { addCommas } from "@persian-tools/persian-tools"

const convertStatus = (num) => {
    if (typeof num == 'undefined') {
        return ''
    } else if (num == '0') {
        return 'مرحله تنظیم'
    } else if (num == '1') {
        return 'مرحله بررسی'
    } else if (num == '2') {
        return 'تایید'
    } else if (num == '3') {
        return 'مردود'
    } else if (num == '4') {
        return 'مصوبه'
    } else if (num == '5') {
        return 'ابلاغ شده'
    } else if (num == '6') {
        return 'قرارداد شده'
    } else if (num == '7') {
        return 'تغییر وثیقه'
    } else if (num == '8') {
        return 'تسویه شده'
    } else if (num == '9') {
        return 'ابطال'
    } else if (num == '10') {
        return 'تایید'
    } else if (num == 'JARI') {
        return 'جاری'
    } else {
        return num
    }
}
export function extractCommitment(mainCustomer, data) {
    let rialLgTotalAmnt = 0
    let rialLgTotalMandeBedehi = 0
    let arzLgTotalAmnt = 0
    let arzLgTotalMandeBedehi = 0
    let rialLcTotalAmnt = 0
    let rialLcTotalMandeBedehi = 0
    let arzLcTotalAmnt = 0
    let arzLcTotalMandeBedehi = 0

    let rialLG = mainCustomer[0].map(elem => {
        rialLgTotalAmnt += +elem['lgCntrctAmnt']
        rialLgTotalMandeBedehi += elem['lgMandeBedehi'] == undefined ? 0 : +elem['lgMandeBedehi']
        
        elem['cntrctAmnt'] = elem['cntrctAmnt'] == undefined ? '' : addCommas(elem['cntrctAmnt'])
        elem['prpslTypDsc'] = convertStatus(elem['prpslTypDsc'])
        elem['fcltySts'] = convertStatus(elem['fcltySts'])
        elem['lgCntrctAmnt'] = elem['lgCntrctAmnt'] == undefined ? '' : addCommas(elem['lgCntrctAmnt'])
        elem['lgFcltySts'] = convertStatus(elem['lgFcltySts'])
        elem['lgPrpslTypDsc'] = convertStatus(elem['lgPrpslTypDsc'])
        if (data != null) {
            return JSON.parse(
                \`{
                        "\${data.columns[0].title}":"\${elem['cntrctId']}",
                        "\${data.columns[1].title}":"\${elem['cstmrId']}",
                        "\${data.columns[2].title}":"\${elem['cstmrName']}",
                        "\${data.columns[3].title}":"\${elem['prpslTypDsc']}",
                        "\${data.columns[4].title}":"\${elem['fcltySts']}",
                        "\${data.columns[5].title}":"\${elem['cntrctAmnt']}",
                        "\${data.columns[6].title}":"\${elem['lgPrpslTypDsc']}",
                        "\${data.columns[7].title}":"\${elem['lgFcltySts']}",
                        "\${data.columns[8].title}":"\${elem['lgCntrctAmnt']}"
                 }\`
            )
        }
    })
    let arzLG = mainCustomer[1].map(elem => {
        arzLgTotalAmnt += +elem['lgCntrctAmnt']
        arzLgTotalMandeBedehi += elem['lgMandeBedehi'] == undefined ? 0 : +elem['lgMandeBedehi']

        elem['cntrctAmnt'] = elem['cntrctAmnt'] == undefined ? '' : addCommas(elem['cntrctAmnt'])
        elem['prpslTypDsc'] = convertStatus(elem['prpslTypDsc'])
        elem['fcltySts'] = convertStatus(elem['fcltySts'])
        elem['lgCntrctAmnt'] = elem['lgCntrctAmnt'] == undefined ? '' : addCommas(elem['lgCntrctAmnt'])
        elem['lgFcltySts'] = convertStatus(elem['lgFcltySts'])
        elem['lgPrpslTypDsc'] = convertStatus(elem['lgPrpslTypDsc'])
        if (data != null) {
            return JSON.parse(
              \`{
                    "\${data.columns[0].title}":"\${elem['cntrctId']}",
                    "\${data.columns[1].title}":"\${elem['cstmrId']}",
                    "\${data.columns[2].title}":"\${elem['cstmrName']}",
                    "\${data.columns[3].title}":"\${elem['prpslTypDsc']}",
                    "\${data.columns[4].title}":"\${elem['fcltySts']}",
                    "\${data.columns[5].title}":"\${elem['cntrctAmnt']}",
                    "\${data.columns[6].title}":"\${elem['lgPrpslTypDsc']}",
                    "\${data.columns[7].title}":"\${elem['lgFcltySts']}",
                    "\${data.columns[8].title}":"\${elem['lgCntrctAmnt']}"
                }\`
            )
        }
    })
    let rialLC = mainCustomer[2].map(elem => {
        rialLcTotalAmnt += +elem['cntrctAmnt']
        rialLcTotalMandeBedehi += elem['lcMandeBedehi'] == undefined ? 0 : +elem['lcMandeBedehi']

        elem['cntrctAmnt'] = elem['cntrctAmnt'] == undefined ? '' : addCommas(elem['cntrctAmnt'])
        elem['prpslTypDsc'] = convertStatus(elem['prpslTypDsc'])
        elem['fcltySts'] = convertStatus(elem['fcltySts'])
        elem['lgCntrctAmnt'] = elem['lgCntrctAmnt'] == undefined ? '' : addCommas(elem['lgCntrctAmnt'])
        elem['lgFcltySts'] = convertStatus(elem['lgFcltySts'])
        elem['lgPrpslTypDsc'] = convertStatus(elem['lgPrpslTypDsc'])
        if (data != null) {
            return JSON.parse(
                \`{
                    "\${data.columns[0].title}":"\${elem['cntrctId']}",
                    "\${data.columns[1].title}":"\${elem['cstmrId']}",
                    "\${data.columns[2].title}":"\${elem['cstmrName']}",
                    "\${data.columns[3].title}":"\${elem['prpslTypDsc']}",
                    "\${data.columns[4].title}":"\${elem['fcltySts']}",
                    "\${data.columns[5].title}":"\${elem['cntrctAmnt']}",
                    "\${data.columns[6].title}":"\${elem['lgPrpslTypDsc']}",
                    "\${data.columns[7].title}":"\${elem['lgFcltySts']}",
                    "\${data.columns[8].title}":"\${elem['lgCntrctAmnt']}"
                  }\`
            )
        }
    })
    let arzLC = mainCustomer[3].map(elem => {
        arzLcTotalAmnt += +elem['cntrctAmnt']
        arzLcTotalMandeBedehi += elem['lcMandeBedehi'] == undefined ? 0 : +elem['lcMandeBedehi']

        elem['cntrctAmnt'] = elem['cntrctAmnt'] == undefined ? '' : addCommas(elem['cntrctAmnt'])
        elem['prpslTypDsc'] = convertStatus(elem['prpslTypDsc'])
        elem['fcltySts'] = convertStatus(elem['fcltySts'])
        elem['lgCntrctAmnt'] = elem['lgCntrctAmnt'] == undefined ? '' : addCommas(elem['lgCntrctAmnt'])
        elem['lgFcltySts'] = convertStatus(elem['lgFcltySts'])
        elem['lgPrpslTypDsc'] = convertStatus(elem['lgPrpslTypDsc'])
        if (data != null) {
            return JSON.parse(
                \`{
                    "\${data.columns[0].title}":"\${elem['cntrctId']}",
                    "\${data.columns[1].title}":"\${elem['cstmrId']}",
                    "\${data.columns[2].title}":"\${elem['cstmrName']}",
                    "\${data.columns[3].title}":"\${elem['prpslTypDsc']}",
                    "\${data.columns[4].title}":"\${elem['fcltySts']}",
                    "\${data.columns[5].title}":"\${elem['cntrctAmnt']}",
                    "\${data.columns[6].title}":"\${elem['lgPrpslTypDsc']}",
                    "\${data.columns[7].title}":"\${elem['lgFcltySts']}",
                    "\${data.columns[8].title}":"\${elem['lgCntrctAmnt']}"
                  }\`
            )
      }
    })
    return {
        'tempRows': [
            ...mainCustomer[0],
            ...mainCustomer[1],
            ...mainCustomer[2],
            ...mainCustomer[3]
        ],
        'tempFilterData': [
            ...rialLG,
            ...arzLG,
            ...rialLC,
            ...arzLC
        ],
        'rialLgTotalAmnt': rialLgTotalAmnt,
        'rialLgTotalMandeBedehi': rialLgTotalMandeBedehi,
        'arzLgTotalAmnt': arzLgTotalAmnt,
        'arzLgTotalMandeBedehi': arzLgTotalMandeBedehi,
        'rialLcTotalAmnt': rialLcTotalAmnt,
        'rialLcTotalMandeBedehi': rialLcTotalMandeBedehi,
        'arzLcTotalAmnt': arzLcTotalAmnt,
        'arzLcTotalMandeBedehi': arzLcTotalMandeBedehi,
    }
}`
  createFile(`${clientUtilPath}`, `${'reportLogic'}.js`, injectedContent);

  /********************************************************************************
   *                        copy font files
   ********************************************************************************/
  const eofFileNames = [
    'IRANSansWeb(FaNum).eot',
    'IRANSansWeb(FaNum)_Black.eot',
    'IRANSansWeb(FaNum)_Bold.eot',
    'IRANSansWeb(FaNum)_Light.eot',
    'IRANSansWeb(FaNum)_Medium.eot',
    'IRANSansWeb(FaNum)_UltraLight.eot',
  ];

  const ttfFileNames = [
    'IRANSansWeb(FaNum).ttf',
    'IRANSansWeb(FaNum)_Black.ttf',
    'IRANSansWeb(FaNum)_Bold.ttf',
    'IRANSansWeb(FaNum)_Light.ttf',
    'IRANSansWeb(FaNum)_Medium.ttf',
    'IRANSansWeb(FaNum)_UltraLight.ttf',
  ];
  const woffFileNames = [
    'IRANSansWeb(FaNum).woff',
    'IRANSansWeb(FaNum)_Black.woff',
    'IRANSansWeb(FaNum)_Bold.woff',
    'IRANSansWeb(FaNum)_Light.woff',
    'IRANSansWeb(FaNum)_Medium.woff',
    'IRANSansWeb(FaNum)_UltraLight.woff',
  ];
  const woff2FileNames = [
    'IRANSansWeb(FaNum).woff2',
    'IRANSansWeb(FaNum)_Black.woff2',
    'IRANSansWeb(FaNum)_Bold.woff2',
    'IRANSansWeb(FaNum)_Light.woff2',
    'IRANSansWeb(FaNum)_Medium.woff2',
    'IRANSansWeb(FaNum)_UltraLight.woff2',
  ];
  copyFontFiles(eofFileNames, fontSrcPath + '\\eot', fontDstPath + '\\eot');
  copyFontFiles(ttfFileNames, fontSrcPath + '\\ttf', fontDstPath + '\\ttf');
  copyFontFiles(woffFileNames, fontSrcPath + '\\woff', fontDstPath + '\\woff');
  copyFontFiles(woff2FileNames, fontSrcPath + '\\woff2', fontDstPath + '\\woff2');

  /********************************************************************************
   *                        copy icon files
   ********************************************************************************/
  // copyIconFiles(iconSrcPath, iconDstPath);

  copyIconFiles(landingPageFavicon, iconSrcPath, iconDstPath);
  copyIconFiles(headerBackgroundImage, iconSrcPath, iconDstPath);

  /********************************************************************************
   *                        auth.js file
   ********************************************************************************/
  let activeProfileProperties = ``
  let activeProfileList = ``
  let getActiveProfileBody = ``
  let setActiveProfileBody = ``
  let resetActiveProfileBody = ``
  const templateObject = {}

  templateObject['tafTitle'] = ''
  getRootRoutes().map((rootRoute, index) => {
    templateObject[getPrimaryKeyByJpaName(rootRoute)] = ''
    if (Object.keys(getVirtualPKColumn(rootRoute)).length > 0) {
      templateObject[getVirtualPKColumn(rootRoute)['title']] = ''
    }
  })
  // console.log(templateObject);

  Object.keys(templateObject).map((rootRoute, index) => {
    const end = index < Object.keys(templateObject).length - 1 ? `,
    ` : ''
    activeProfileProperties += `${rootRoute}: ''${end}`
    activeProfileList += `${rootRoute}${end}`
    getActiveProfileBody += `${rootRoute}: fakeAuthProvider['activeProfile']['${rootRoute}']${end}`
    setActiveProfileBody += `fakeAuthProvider['activeProfile']['${rootRoute}']= ${rootRoute}${end}`
    resetActiveProfileBody += `fakeAuthProvider['activeProfile']['${rootRoute}']= ''${end}`
  })
  injectedContent = `import * as React from 'react';
/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider = {
  
  isAuthenticated: false,
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  authorities: [],
  token: '',
  date: '',
  lifeLong: '',
  activeProfile: {
    ${activeProfileProperties}
  },
  basePath: '',

  async signin(data) {
    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.username = data.userDetails.username;
    fakeAuthProvider.password = data.userDetails.password;

    fakeAuthProvider.firstName = data.userDetails.user.firstName;
    fakeAuthProvider.lastName = data.userDetails.user.lastName;
    fakeAuthProvider.email = data.userDetails.user.email;

    fakeAuthProvider.authorities = data.userDetails.authorities;
    fakeAuthProvider.token = data.token;
    fakeAuthProvider.date = data.date;
    fakeAuthProvider.lifeLong = data.lifeLong;

    fakeAuthProvider.basePath = "${ConfigObjects['artifactId']}";
  },
  
  async signout() {
    // await new Promise((r) => setTimeout(r, 500)); // fake delay

    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.username = '';
    fakeAuthProvider.password = '';

    fakeAuthProvider.firstName = '';
    fakeAuthProvider.lastName = '';
    fakeAuthProvider.email = '';

    fakeAuthProvider.authorities = [];
    fakeAuthProvider.token = '';
    fakeAuthProvider.date = '';
    fakeAuthProvider.lifeLong = '';

    fakeAuthProvider.activeProfile= {
      ${activeProfileProperties}
    }
    fakeAuthProvider.basePath = '';
  },
  
  getCredential() {
    return {
      isAuthenticated: fakeAuthProvider.isAuthenticated,
      userName: fakeAuthProvider.username,
      firstName: fakeAuthProvider.firstName,
      lastName: fakeAuthProvider.lastName,
      date: fakeAuthProvider.date,
      lifeLong: fakeAuthProvider.lifeLong,
      activeProfile: fakeAuthProvider.activeProfile,
    };
  },

  getActiveProfile(){
    return {
      ${getActiveProfileBody}
    }
  },
  setActiveProfile(
    ${activeProfileList}
  ) {
    ${setActiveProfileBody}
  },
  resetActiveProfile(){
    ${resetActiveProfileBody}
  },
  hasRole(role) {
    return fakeAuthProvider['authorities'].findIndex(authority => authority['authority'] == role) > -1
  }
};
`;
  createFile(`${sourcePath}`, `${'auth'}.js`, injectedContent);

  /********************************************************************************
   *                        globalErrorPage.js file
   ********************************************************************************/
  injectedContent = `import * as React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import errorPageLables from './globalErrorPageLables_fa';

export default function ErrorPage() {
  const navigate = useNavigate();
  //  provides the error that was thrown
  let error = useRouteError();
  // console.log(error);
  error = JSON.parse(error)
  // error = error.data;
  const onButtonClicked = () => {
    if (error?.status == 403) {
      navigate('/logout')
    } else {
      navigate(-1);
    }
  };
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="border-0 rounded-5 p-5 shadow-lg opacity-1 bg-body bg-opacity-50">
        <h3 className="pb-3 mb-4 border-bottom text-body-secondary fs-4">
          {errorPageLables.errorTitle}
        </h3>
        <p>{errorPageLables.errorOcurred}</p>

        <div className="row">
          <div className="col-3 text-body-secondary fs-6 fw-medium">
            <label className="text-lg-start">
              {errorPageLables.errorCode} :{' '}
            </label>
          </div>
          <div className="col">
            {/* <i>
              {error.data.status in errorPageLables
                ? error.data.status
                : errorPageLables.unkmnown}
            </i> */}
            <i>{error?.data?.status || error?.status}</i>
          </div>
        </div>

        <div className="row">
          <div className="col-3 text-body-secondary fs-6 fw-medium">
            <label className="text-lg-start">
              <i>{errorPageLables.errorDescription} : </i>
            </label>
          </div>
          <div className="col">
            <i>{error?.data?.message || error?.message}</i>
          </div>
        </div>

        <div className="row pt-3">
          <button className="btn btn-primary" onClick={onButtonClicked}>
            {errorPageLables.return}
          </button>
        </div>
      </div>
    </div>
  );
}
`;
  createFile(`${errorPath}`, `${'globalErrorPage'}.jsx`, injectedContent);

  /********************************************************************************
   *                        globalErrorPageLables_fa.js file
   ********************************************************************************/
  injectedContent = `const errorPageLables = {
  errorTitle: 'خطای برنامه!',
  errorOcurred: 'خطای غیرمنتظره ای در اجرای برنامه رخ داده است.',
  message: 'صفحه موردنظر پیدا نشد.',
  errorCode: 'کدخطا',
  errorDescription: 'توضیح',
  unkmnown: 'کدخطای نامشخص',
  ERR_NETWORK: 'خطای شبکه در اتصال به سرور',
  return: 'بازگشت به صفحه قبل',
};

module.exports = errorPageLables;
`;
  createFile(
    `${errorPath}`,
    `${'globalErrorPageLables_fa'}.js`,
    injectedContent
  );
};
module.exports = ClientProjectBaseFilesGenerator;
