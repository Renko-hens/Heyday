/* Base config:
   ========================================================================== */
   const path = require("path");
   const fs = require("fs");
   const MiniCssExtractPlugin = require("mini-css-extract-plugin");
   const CopyWebpackPlugin = require("copy-webpack-plugin");
   const HtmlWebpackPlugin = require("html-webpack-plugin");
   const ImageminPlugin = require('imagemin-webpack-plugin').default;

   // Main const. Feel free to change it
   const PATHS = {
     src: path.join(__dirname, "../src"),
     dist: path.join(__dirname, "../dist"),
     assets: "assets/"
   };
   
   // Pages const for HtmlWebpackPlugin
   // see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
   const PAGES_DIR = `${PATHS.src}/pug/pages/`;
   const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));
   
   module.exports = {
     externals: {
       paths: PATHS
     },
     entry: {
       app: PATHS.src
       // module: `${PATHS.src}/your-module.js`,
     },
     output: {
       filename: `${PATHS.assets}js/[name].js`,
       path: PATHS.dist,
       publicPath: ""
     },
     module: {
       rules: [
          // PUG
          {
          test: /\.pug$/,
          loader: 'pug-loader',
          query: { 
            pretty: true 
          } 
        },
         {
           // JavaScript
           test: /\.js$/,
           loader: "babel-loader",
           exclude: "/node_modules/"
         },
         {
           // Fonts
           test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
           loader: "file-loader",
           options: {
             name: "[name].[ext]"
           }
         },
         {
           // images / icons
           test: /\.(jpe?g|png|gif|svg)$/i,
           loader: "file-loader",
           options: {
             name: "[name].[ext]"
           }
         },
         {
           // scss
           test: /\.scss$/,
           use: [
             {
               loader: "style-loader",
             },
             MiniCssExtractPlugin.loader,
             {
               loader: "css-loader",
               options: { sourceMap: true, url: false }
             },
             {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: { path: `./postcss.config.js` }
              }
            },
             {
              loader: 'resolve-url-loader',
               options: { 
                 sourceMap: true,
                 removeCR: true,
               }
             },
             {
               loader: "sass-loader?sourceMap",
               options: { sourceMap: true }
             },
           ]
         },
         {
           // css
           test: /\.css$/,
           use: [
            {
              loader: "style-loader",
            },
             MiniCssExtractPlugin.loader,
             {
               loader: "css-loader",
               options: { 
                 sourceMap: true,
                 url: false 
              }
             },
             {
               loader: "postcss-loader",
               options: {
                 sourceMap: true,
                 config: { path: `./postcss.config.js` }
               }
             }
           ]
         }
       ]
     },
     plugins: [
       new MiniCssExtractPlugin({
         filename: `${PATHS.assets}css/[name].css`
       }),
      
       new CopyWebpackPlugin([
         { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
         { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
         { from: `${PATHS.src}/static`, to: "" }
       ]),

      // Make sure that the plugin is after any plugins that add images
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        pngquant: {
          quality: '95-100'
        }
      }),

       /*
         Automatic creation any html pages (Don't forget to RERUN dev server!)
         See more:
         https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
         Best way to create pages:
         https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
       */
      ...PAGES.map(page => new HtmlWebpackPlugin({
          filename: `./${page.replace(/\.pug/,'.html')}`, //html
          template: `${PAGES_DIR}/${page}`, //pug
          inject: true,
          minify: false
        })),


     ]
   };
