
function CustomRender(ReactElement , container) {
    // const domElement = document.createElement(ReactElement.type);
    // domElement.innerHTML = ReactElement.children;
    // domElement.setAttribute('href' , ReactElement.props.href);
    // domElement.setAttribute('target' , ReactElement.props.target );
    // container.appendChild(domElement);

    const domElement = document.createElement(ReactElement.type);
    domElement.innerHTML = ReactElement.children;

    for (const key in ReactElement.props) {
        if (key === 'children') continue
       domElement.setAttribute(key , ReactElement.props[key]);
    }

    container.appendChild(domElement);

}

const ReactElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "click to run this code"
}

const mainContainer = document.getElementById('root');

CustomRender(ReactElement , mainContainer);



