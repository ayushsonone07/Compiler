let editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
    mode: "text/x-c++src",
    theme : "dracula",
    lineNumbers : true,
    autoCloseBracket : true
})

let width = window.innerWidth
editor.setSize(0.7*width, "500")

let option = document.getElementById("inlineFormSelectPref")
option.addEventListener("change",function(){
    if(option.value == Java){
        editor.setOption("mode","text/x-java")
    }
    else if(option.value == Python){
        editor.setOption("mode","text/x-java")
    }
    else{
        editor.setOption("mode","text/x-c++src")
    }
})