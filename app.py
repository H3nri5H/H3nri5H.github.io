from flask import Flask, request, jsonify
import subprocess
import tempfile

app = Flask(__name__)

@app.route('/run', methods=['POST'])
def run_code():
    code = request.json.get('code')
    expected_output = "45\n"  # Erwartete Ausgabe für die Summe der Früchte: 10 + 15 + 12 + 8
    try:
        with tempfile.NamedTemporaryFile(suffix=".py", delete=False) as temp:
            temp.write(code.encode('utf-8'))
            temp.flush()
            result = subprocess.run(['python', temp.name], capture_output=True, text=True, check=True)
            output = result.stdout
            success = output.strip() == expected_output.strip()
        return jsonify({'output': output, 'success': success})
    except subprocess.CalledProcessError as e:
        return jsonify({'output': e.stderr, 'success': False})

if __name__ == '__main__':
    app.run(debug=True)
