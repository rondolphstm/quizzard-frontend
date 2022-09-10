import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { Form, Button, message } from 'antd';

export default function Login() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const { setUser } = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider) // function takes in auth and provider from firebase
      .then((result) => { // returns the result and
        setUser(result.user); // setUser sets the result value (the uuid) to the user property
        navigate("/dashboard"); // then navigates to dashboard
      })
      .catch((error) => alert(error.message)); // if error is returned then display alert with the error in the message
  };

  const warning = () => {
    message.warning('Please log in, or cancel to return to home page.', 1.5);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/")
  };
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleClickLogin = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <>
    {!user ? (
        <span>
          <Button type="primary" onClick={handleClickLogin}>
            Sign in!
          </Button>
        </span>
      ) : (
        <span>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          <Button onClick={handleLogout}>Sign Out</Button>
        </span>
      )}
      <Form title="To continue, please log in below:" visible={isModalVisible} onOk={warning} onCancel={handleCancel}>
      <Button type='primary' onClick={() => login()}>Sign In with Google</Button>
      </Form>
    </>
  );
};