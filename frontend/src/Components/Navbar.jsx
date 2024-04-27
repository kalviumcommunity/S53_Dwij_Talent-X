import React, { useEffect } from "react";
import "./../App.css";
import logo from "./../assets/Logo.png";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";

export default function Navbar() {
  const { user } = useUser();
  useEffect(() => {
    const signIn = async () => {
      try {
        console.log(user);
        let userName = user.username == null ? user.fullName : user.username;
        let userEmail = user.emailAddresses[0].emailAddress;
        const userdata = {
          userId: user.id,
          name: userName,
          email: userEmail,
        };
        console.log(userdata);
        await axios.post("http://localhost:6996/users", userdata);
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
      <div className="title">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="name">TalentX</div>
      </div>
      <div className="routes">
        <div className="route">Routes</div>
        <div className="route">Routes</div>
        <div className="route">Routes</div>
        <div className="route">Routes</div>
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
              padding="0.5vmax"
              color="white"
              borderRadius="45px"
              fontSize="1.35vmax"
            >
              SignUp
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
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
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
}
