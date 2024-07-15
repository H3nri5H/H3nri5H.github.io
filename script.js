let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");

function runCode() {
    let code = editor.getValue();
    // Verwende einen Service wie Brython oder eine API, um den Code auszuführen
    // Hier zeigen wir nur eine Simulation der Ausgabe
    document.getElementById('output').innerText = "Ausgabe:\n" + code;
}
