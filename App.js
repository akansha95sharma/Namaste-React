   // const heading = React.createElement("h1",{ id:"heading"},"Hello World from React");
   const heading = React.createElement("parent",{},
   React.createElement("child",{},
   [React.createElement("h1",{},"Hello I'm H1 tag"),React.createElement("h2",{},"Hello I'm H2 tag")]));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);