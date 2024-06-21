import React, { useEffect, useState } from "react";
import "./../App.css";
import logo from "./../assets/Logo.png";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/clerk-react";
import { Button, ButtonGroup } from "@chakra-ui/react";


import axios from "axios";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user } = useUser();
  const [name, setName] = useState();
  useEffect(() => {
    const signIn = async () => {
      try {
        console.log(user);
        let userName = user.username == null ? user.fullName : user.username;
        let userEmail = user.emailAddresses[0].emailAddress;
        setName(userName);
        const userdata = {
          userId: user.id,
          name: userName,
          email: userEmail,
        };
        console.log(userdata);
        await axios.post("https://talent-x.vercel.app/users", userdata);
      } catch (error) {
        console.log("Please sign in or check your network connection.");
      }
    };

    if (user) {
      signIn();
    }
  }, [user]);

  return (
    <div className="navbar">
    <Link to={"/"}>

      <div className="title">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="name">TalentX</div>
      </div>
    </Link>
      <div className="routes">
      <Link to={"/post"}>

        <div className="route">Post</div>
      </Link>
        <div className="route">FAQ</div>
        <div className="route">About Us</div>
        
      </div>
      <div className="sign-div">
        <SignedOut>
          <SignInButton>
            <Button
              backgroundColor="transparent"
              color="white"
              border="none"
              fontSize="1.35vmax"
            >
              SignIn
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button
              backgroundColor="#0171E2"
              border="none"
              color="white"
              borderRadius="13px"
              fontSize="1.35vmax"
            >
              SignUp
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          {/* <SignOutButton>
            <Button
              backgroundColor="#0171E2"
              border="none"
              padding="0.5vmax"
              color="white"
              borderRadius="45px"
              fontSize="1.35vmax"
            >
              LogOut
            </Button>
          </SignOutButton> */}
          <div className="user">
          <Link to={"/profile"}>

            <div>{name}</div>
          </Link>
            <div>
              <UserButton />
            </div>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
