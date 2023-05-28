const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello React World!!!"
);
const heading1 = React.createElement("h1", { className: "title" }, "Heading 1");
const heading2 = React.createElement(
  "h2",
  { style: { color: "red" } },
  "Heading 2"
);
const heading3 = React.createElement("h3", null, "Heading 3");
const heading4 = React.createElement("h4", {}, "Heading 4");
const heading5 = React.createElement("h5", "Heading 5"); //It's not coming we are not anything in props
const heading6 = React.createElement(
  "h6",
  { style: { color: "blue" }, hey: "Hello I'm Prop" },
  "Heading 6"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
]);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
root.render(container);
