let editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
    mode: "text/x-c++src",
    theme : "dracula",
    lineNumbers : true,
    autoCloseBracket : true
})

let width = window.innerWidth
editor.setSize(0.7*width, "500")