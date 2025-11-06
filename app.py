from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import smtplib
import random






app = Flask(__name__)
CORS(app)

EMAIL_ADDRESS = "amritha2025j@gmail.com"
EMAIL_PASSWORD = "szwwyraaobpbrcpd"

otp_storage = {}  # Temporary in-memory OTP storage



@app.route('/login')
def login():
    return render_template('login.html')  # Make sure login.html exists in templates/



@app.route('/')
def index():
    return render_template('index.html')  # Make sure login.html exists in templates/


@app.route('/')
def home():
    return render_template('Pos.html')  # Your HTML template name


@app.route('/send_otp', methods=['POST'])
def send_otp():
    data = request.get_json()
    email = data.get("email")

    if not email:
        return jsonify({"success": False, "message": "Email is required"}), 400

    otp = random.randint(100000, 999999)
    otp_storage[email] = otp

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            msg = f"Subject: OTP Verification\n\nYour OTP is {otp}"
            server.sendmail(EMAIL_ADDRESS, email, msg)

        print(f"✅ OTP for {email}: {otp}")
        return jsonify({"success": True, "message": "OTP sent successfully!"}), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "message": "Failed to send OTP"}), 500


@app.route('/verify_otp', methods=['POST'])
def verify_otp():
    data = request.get_json()
    email = data.get("email")
    otp = data.get("otp")

    if not email or not otp:
        return jsonify({"success": False, "message": "Email and OTP required"}), 400

    if email in otp_storage and str(otp_storage[email]) == str(otp):
        del otp_storage[email]
        return jsonify({"success": True, "message": "OTP verified successfully!"}), 200
    else:
        return jsonify({"success": False, "message": "Invalid OTP"}), 400


if __name__ == '__main__':
    app.run(debug=True)
