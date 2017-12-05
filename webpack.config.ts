import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].bundle.js", // Using hash in bundle name enables cache-busting
    publicPath: "/" // Path to where the output is on the server, using "/" ensures history deep-links still loads bundled output from absolute path
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // Load TypeScript files (see tsconfig.json)
      { test: /\.tsx?$/, use: "ts-loader" },

      // Load CSS files as CSS modules
      { test: /\.css$/,
        exclude: /(global|bootstrap)\.css/,
        use: [
          { loader: "style-loader", }, // Adds CSS to the DOM by injecting a <style> tag
          { loader: "css-loader", // Interprets @import and url() like import/require()
            options: {
              modules: true, // Enable CSS modules (import scoped CSS class names into JS)
              camelCase: true, // Convert JS imported class names to "camelCase"
              localIdentName: "[name]__[local]", // Namespace to use for processed CSS class names
              sourceMap: process.env.NODE_ENV == "development", // CSS source-maps cause "Flash of Unstyled Content" so disable in production
              importLoaders: 1 // Allows 1 following loader (postcss-loader) to be processed for @import statements
            }
          },
          { loader: "postcss-loader" } // Process CSS with PostCSS/CSSNext (see postcss.config.js)
        ]
      },

      // Load global CSS files
      { test: /(global|bootstrap)\.css/,
        use: [
          { loader: "style-loader", }, // Adds CSS to the DOM by injecting a <style> tag
          { loader: "css-loader" }, // Interprets @import and url() like import/require()
          { loader: "postcss-loader" } // Process CSS with PostCSS/CSSNext (see postcss.config.js)
        ] 
      },

      // Load static assets and emit as files, or as base64 data-url if small
      { test: /\.(eot|woff|woff2|ttf|svg)$/, use: "url-loader" }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    historyApiFallback: { index: "/" } // Enables router deep-links to load index.html, a production server would need similar deep-link configuration
  },
  plugins: [
    // Create the HTML entry page with injected JS bundle
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    }),

    // Create a "vender" JS bundle with all external libraries
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: (module, count) => {
        return module.resource && module.resource.indexOf("node_modules") !== -1
      }
    }),

    // Pass NODE_ENV (development, production) through the build, used to optimize
    new webpack.EnvironmentPlugin(["NODE_ENV"])
  ]
}
export default config;