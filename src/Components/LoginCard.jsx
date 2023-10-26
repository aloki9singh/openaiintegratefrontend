import { useContext, useState } from "react";
import { context } from "../context-api/Context";
import '../CSS/LoginCard.css'; // Import the custom CSS file

const initialData = {
  email: '',
  pass: '',
};

function LoginCard() {
  const { updateSignUp, updateLogin, updateUser } = useContext(context);
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, pass } = formData;
    const res = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password: pass }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (data?.message) {
      alert(data.message);
      const name = email.split('@')[0];
      updateUser({ name });
    } else {
      alert(data?.error);
    }
    setFormData({ ...initialData });
    setLoading(false);
  };

  return (
    <div className="login-container"> 
      <div className="card"> 
        <h1 className="custom-heading">Login</h1> 
        <form className="custom-form" onSubmit={handleSubmit}> 
          <div className="form-group"> 
          
            <input
              type="email"
              id="email"
              className="form-input" 
              placeholder="youremail@example.com"
              onChange={(e) => setFormData({
                ...formData, email: e.target.value
              })}
              value={formData.email}
            />
          </div>
          <div className="form-group"> 
          
            <input
              type="password"
              id="password"
              className="form-input" 
              placeholder="Your password"
              onChange={(e) => setFormData({
                ...formData, pass: e.target.value
              })}
              value={formData.pass}
            />
          </div>
          <button
            className="button" // Custom class
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Log In'}
          </button>
        </form>
        <p className="text-gray">Don't have an account? <button className="text-blue" onClick={() => {
          updateLogin(false);
          updateSignUp(true);
        }}>Sign Up</button></p>
      </div>
    </div>
  );
}

export default LoginCard;
