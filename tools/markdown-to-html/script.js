var md = window.markdownit();

const input = document.getElementById("input")
const output = document.getElementById("output")

const render = () => {
    output.innerHTML = md.render(input.value);
}

input.onkeyup = render

render();