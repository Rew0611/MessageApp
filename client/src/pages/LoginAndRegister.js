import React, { useEffect } from "react";
import { useState } from "react";
import { PreLoader} from "../components";
import { useUserContext } from "../context/userContext";
import useMounted from "../hooks/useMounted";
import img1 from "./img/log.svg";
import img2 from "./img/register.svg";
import "./login.css";
import "font-awesome/css/font-awesome.min.css";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
const initialCredential = {
  email: "",
  password: "",
};
function Homepage() {
  const [active, setActive] = useState(false);
  const { login } = useUserContext();
  const { register } = useUserContext();
  const [credentials, setCredentials] = useState(initialCredential);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const toast = useToast();
  const mounted = useMounted();

  const handleShow = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  const handleRegister = async () => {
    const { name, email, password, confirmPassword, avatar } = credentials;
    if (!name || !email || !password) {
      return toast({
        position: "top",
        title: "Invalid Input",
        description: "Provide all the credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    if (password !== confirmPassword) {
      return toast({
        position: "top",
        title: "Invalid Input",
        description: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(true);
    await register(name, email, password, avatar);
    if (mounted.current) {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    const { email, password } = credentials;
    if (!email || !password) {
      return toast({
        position: "top",
        title: "Invalid Input",
        description: "Provide all the credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(true);
    await login(email, password);
    if (mounted.current) {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCredentials((prev) => {
        return { ...prev, [name]: reader.result };
      });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };
  useEffect(() => {
    document.title = "MessageApp | Login/Register";
  }, []);
  const routeChange = () => {
    setActive((active) => !active);
  };

  const { authLoading } = useUserContext();

  if (authLoading) {
    return <PreLoader />;
  }

  let classx = active ? "sign-up-mode" : null;

  return (
    <div className={`container ${classx}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fa fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Username"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <Button onClick={handleLogin} style={{backgroundColor:"#4d84e2"}} className="btn">Login</Button>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fa fa-user"></i>
              <input
                name="name"
                placeholder="Enter your name"
                value={credentials.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input
                name="confirmPassword"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                value={credentials.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={handleImageUpload}
                style={{ opacity: "0.4", paddingTop: "1rem" }}
              />
            </div>
            <Button onClick={handleRegister} style={{backgroundColor:"#4d84e2"}} className="btn">SIGNUP</Button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={routeChange}
            >
              Sign up
            </button>
          </div>
          <img src={img2} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={routeChange}
            >
              Sign in
            </button>
          </div>
          <img src={img1} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
