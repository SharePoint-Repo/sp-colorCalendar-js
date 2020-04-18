# sp-rollup-base-template
Opinionated SharePoint starter template for client-side JavaScript development. 
This project uses [rollup](https://github.com/rollup), [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy), [@pnp/sp](https://pnp.github.io/pnpjs/sp/), and [babel](https://github.com/babel/babel), among other packages. 

Although your code will work with most modern browsers, the project was designed specifically to work on IE 10, as SharePoint's default masterpage still targets IE 10 with a meta tag.  

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit SharePoint-Repo/sp-rollup-base-template my-app-name
cd my-app-name
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*
---

### Prerequisites

Requires [Node.js](https://nodejs.org/)
It's very helpful if you have access to SharePoint, since this is a SharePoint development starter kit template.
The generated project will work with SharePoint 2013, SharePoint 2016, SharePoint 2019, and SharePoint Online. 

## Getting started

Install the dependencies...

```bash
cd my-app-name
npm install
```

Configure sp-rest-proxy 
````
npm run proxy
```` 
then answer the interactive questions to configure the proxy connection to your SharePoint site. Recommend selecting On-Demand Credentials for the authentication strategy. 
Ctrl-c to end task.

Start development 
````
npm run dev 
````
(uses concurrently), to start the proxy and dev server simultaneously
* Develop interactively, with real SharePoint data. Enjoy!

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Acknowledgments
Special thanks to
* [Rich Harris](https://github.com/Rich-Harris)
* [Andrew Koltyakov](https://github.com/koltyakov)
