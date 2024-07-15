let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");

function runCode() {
    let code = `
aepfel = 10
orangen = 15
karotten = 7
bananen = 12
tomaten = 5
trauben = 8
` + editor.getValue();
    
    fetch('/run', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = "Ausgabe:\n" + data.output;
        if (data.success) {
            alert('Aufgabe erfolgreich abgeschlossen! Du kommst ins nächste Level.');
            // Logik zum Wechseln zum nächsten Level
        } else {
            alert('Aufgabe nicht erfüllt. Versuche es noch einmal.');
        }
    });
}
