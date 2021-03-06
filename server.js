const express = require('express');

// We are going to fill these out in the sections to follow.
function renderFullPage(html, css) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>My page</title>
          <style id="jss-server-side">${css}</style>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
    `;
}

function handleRender(req, res) {
    const sheets = new ServerStyleSheets();

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(
      sheets.collect(<App />),
    );
  
    // Grab the CSS from the sheets.
    const css = sheets.toString();
  
    // Send the rendered page back to the client.
    res.send(renderFullPage(html, css));
}

const app = express();

app.use('/build', express.static('build'));

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = 3000;
app.listen(port);