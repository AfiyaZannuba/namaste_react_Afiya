const parent = React.createElement("div", { id: "parent" },

    React.createElement("div", { id: "child" },

        [React.createElement("h1", {}, "Hi There"),
        React.createElement("h2", {}, "Hi There Again")]))

const heading = React.createElement("h1",
    { class: "heading", id: "main" },
    "Hello World"
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);