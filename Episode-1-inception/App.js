'use strict';

const header1 = React.createElement("h1",{},"Namaste everyone");
const header2 = React.createElement("h2",{},"Hello, everyone");

const container = React.createElement("div",{id:"container"}, [header1, header2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);