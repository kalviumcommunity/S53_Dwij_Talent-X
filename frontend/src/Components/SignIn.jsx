import React, { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useSession,
  useUser,
} from "@clerk/clerk-react";
import axios from "axios";

export default function SignIn() {
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
    <header>
      <div>H1</div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
