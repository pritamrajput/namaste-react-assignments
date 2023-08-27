# Basic questions
Dist folder :- when we write npx parcel index.html, it just create development build for us and it hosts in our server

How do I tell parcel to make a production build ? We tell using build command 
i.e we write npx parcel build index.html . 

# Difference between npx parcel index.html and npx parcel build index.html ?
### npx parcel index.html:

This command is used to run Parcel in development mode. When you run npx parcel index.html, Parcel will start a development server and serve your web application on a local development URL (usually something like http://localhost:1234). It watches your files for changes and automatically updates the browser as you make edits. This mode is suitable for active development and debugging.

It performs tasks like:

Bundling your application's assets.
Handling hot module replacement (HMR) for instant updates in the browser.
Providing a development-friendly environment with error messages and source maps.

### npx parcel build index.html:

This command is used to create a production-ready build of your web application. When you run npx parcel build index.html, Parcel will optimize your application's assets for production. It performs tasks like:

Minification of HTML, CSS, and JavaScript files.
Asset hashing for cache-busting.
Tree-shaking to eliminate unused code.
Extracting CSS into separate files for better performance.
Generating source maps for debugging in production.
The output of this command is a set of optimized and minified files that you can deploy to a web server or a hosting service.

In summary, the main difference is that npx parcel index.html is used for local development with features like hot module replacement, while npx parcel build index.html is used to generate a production-ready build with optimizations for performance and smaller file sizes.


# What are minified files ?
Minified files refer to code files, typically JavaScript, CSS, and sometimes HTML, that have undergone a process called "minification." Minification involves removing unnecessary characters from the source code without changing its functionality. The primary goal of minification is to reduce the file size, which leads to faster loading times and improved website or application performance.

During the minification process, various types of characters and structures are typically removed or modified:

Whitespace: Spaces, tabs, line breaks, and other forms of whitespace that are used for formatting and readability are removed. These characters are not essential for the code to function and can be safely eliminated.

Comments: Both single-line and multi-line comments are stripped from the code. Comments are intended for developers' understanding and are not required for the code's execution.

Unused code: Portions of code that are never executed or accessed are removed. This can include unused functions, variables, and other code blocks.

Shortening identifiers: Variable and function names are often replaced with shorter alternatives, like single letters or very short names. This doesn't affect the code's functionality but helps reduce the size of the file.

Simplification: Code structures and expressions might be simplified, like converting multi-line code blocks to a single line or using shorter syntax when applicable.

Minification is especially useful for production environments because it reduces the amount of data that needs to be transferred over the internet. Smaller file sizes result in faster loading times, lower bandwidth usage, and better user experiences. However, minified code can be challenging to read and debug for developers, which is why it's essential to keep a non-minified version of the code for development purposes.

# Does node modules are shipped to the website ?
No, the node_modules directory is typically not shipped to the website when deploying a web application.

When you develop a web application using tools like npm (Node Package Manager) and bundlers like Parcel, Webpack, or Rollup, the node_modules directory contains all the dependencies your application requires. These dependencies include libraries, frameworks, and other packages that your application relies on to function properly.

During development, the bundler takes care of including the necessary parts of these dependencies into your final application bundle. The bundler analyzes your code, figures out which parts of the dependencies are actually used, and includes only those parts in the bundle. This process is called tree shaking, and it helps optimize the size of your final JavaScript bundle.

When you're ready to deploy your web application to a production environment, you typically run a build process that creates optimized and minified versions of your code. During this build process, the bundler generates a bundle that includes your application code and the portions of the dependencies that are used by your application. The node_modules directory itself is not deployed because it's not needed in the production environment and can significantly increase the size of your deployment.

So, in summary, the node_modules directory is used for development and build processes but is not shipped to the website when deploying the application. The build process takes care of including only the necessary parts of the dependencies into the final application bundle and that too after minification.

# Why are React App performant ? Why is React App  so fast ?

React is fast in itself but react need a lot things to make it fast. When we are saying that we are building a fast web application than react is just small part of it, react uses so many more things. Example :- React uses parcel, and parcel uses dependency. Parcel acts as a catalyst i.e your bundler acts as a catalyst

