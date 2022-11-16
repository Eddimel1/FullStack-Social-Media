
const webpack = require('webpack')
const path = require('path')
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PostcssPresetEnv = require('postcss-preset-env');





module.exports = {
    entry: '/src/index.tsx',
    devtool:"source-map",
    output: {
        path: path.join(__dirname,'/dist'),
        filename: "bundle.js",
        assetModuleFilename : 'images/[hash][ext][query]'
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HTMLWEBPACKPLUGIN({
            template : 'index.html'
        }), new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            // Make a global `process` variable that points to the `process` package,
            // because the `util` package expects there to be a global variable named `process`.
                 // Thanks to https://stackoverflow.com/a/65018686/14239942
            process: 'process/browser'})
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js' ,'.jsx' ,'css' ,'module.css','.scss','module.scss'],
        // fallback: {process:require.resolve('process')}
         fallback: { 'process/browser': require.resolve('process/browser'), } 
      },
     
    module:{
       
 rules:[{
    test: /.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use:[
        {loader:'babel-loader',
        options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        
    },]

},
 

{
    test: /\.(sc|sa|c)ss$/,
    use: ['style-loader', {
        loader:'css-loader',
        options:{
            importLoaders: 1,
            modules: true,
            modules: {
                localIdentName: '[local]_[hash:base64:5]'
              }
        }
    }, 'sass-loader',  'postcss-loader']
  },
{
    test: /\.(png|jpe?g|gif|svg)$/i,
    type: 'asset/resource'
},{
    test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
    type: 'asset/inline'
}   
],

    },
    devServer:{
        port: 9000,
        hot:true,
        open:true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '../assets'),
          },
          client: {
            overlay: {
              errors: false,
              warnings: false,
            }
          },
    },
    stats: 'errors-only',


    
}