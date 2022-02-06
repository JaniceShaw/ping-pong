import { Link } from "react-router-dom";

export const RegisterHomepage = () => {
    return (
      <>
        <h1>Register as a</h1>
        <br/>
        <Link to='/member-register'>
            <p>Member</p>
        </Link>
        <br/>
        <p>or</p>
        <br/>
        <Link to='/helper-register'>
            <p>Helper</p>
        </Link>
        <br/>
        <Link to='/login'>
            <p>Have an account? Log in</p>
        </Link>
        <br/>
        <Link to='/about'>
          <p>What is ping-pong?</p>
        </Link>
      </>
    );
  };
  