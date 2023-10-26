import { useContext, useState } from "react";
import { context } from "../context-api/Context";
import '../CSS/SignupCard.css'; // Import component-specific styles

const initialData = {
  email: '',
  pass: '',
  cpass: ''
};

function SignupCard() {
  const { updateSignUp, updateLogin } = useContext(context);
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, pass, cpass } = formData;
    if (pass !== cpass) {
      alert("Password and confirm password didn't match");
    } else {
      const res = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password: pass }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      if (data?.message) {
        alert(data.message);
      } else {
        alert(data?.error);
      }
    }
    setFormData({ ...initialData });
    setLoading(false);
  };

  return (
    <div className="signup-card">
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-input">
            
            <input
              type="email"
              id="email"
              placeholder="youremail@example.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
            />
          </div>
          <div className="signup-input">
            
            <input
              type="password"
              id="password"
              placeholder="Your password"
              onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
              value={formData.pass}
            />
          </div>
          <div className="signup-input">
           
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={(e) => setFormData({ ...formData, cpass: e.target.value })}
              value={formData.cpass}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
        <p className="signup-login">
          Already have an account? <button onClick={() => {
            updateSignUp(false);
            updateLogin(true);
          }}>Log In</button>
        </p>
      </div>
    </div>
  );
}

export default SignupCard;
