import Input from './Input';
import Button from './Button';
import logo1 from "./assets/f.png";
import logo2 from "./assets/g.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-box">
        <h1>Welcome<br/>back!</h1>
          <Input label="Email" placeholder="Enter your email"/><br></br>
          <Input label="Password" placeholder="Enter your password"/>
        <div className="forgot">
          <a href="#" target="_blank">Forgot your password?</a>
        </div>
        <div className="text-center">
          <Button 
            btnWidth="100%"  
            btnHeight="40px"
            bgColor="#000"
            label="Login"
            btnRadius = "4px"
          />
        </div>
        <p id="no-link-text">or</p>
        <div id="social">
          <Button
            btnWidth="140px"
            bgColor="white"
            btnColor="black"
            label="Facebook"
            btnRadius = "4px"
            isTrue={true}
            imgSrc={logo1}
            borderColor="rgba(0,0,0,0.4)"
          />
          <Button
            btnWidth="140px"
            bgColor="white"
            btnColor="black"
            btnRadius = "4px"
            label="Google"
            isTrue={true}
            imgSrc={logo2}
            borderColor="rgba(0,0,0,0.4)"
            /> 
        </div>
        <h5>Don't have an account?</h5>
          <div className="text-center">
            <Button 
              btnWidth="100%"  
              btnHeight="40px"
              bgColor="#E5E5E5"
              btnColor="black"
              btnRadius = "4px"
              label="Create Account" 
            />
          </div>
      </div>
    </div>
  );
}

export default App;
