const inputPane = document.getElementById("input-pane")
const outputPane = document.getElementById("output-pane")

inputPane.addEventListener("input", (e) => {
    outputPane.classList.remove("text-gray")
    outputPane.innerHTML = marked.parse(inputPane.value)
})

function clearInput() {
    inputPane.value = ''
    outputPane.innerHTML = 'Your output will appear here.'
    outputPane.classList.add("text-gray")
}
