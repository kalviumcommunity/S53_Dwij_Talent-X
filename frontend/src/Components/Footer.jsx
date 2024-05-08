"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import logo from "./../assets/Logo.png";
import { Divider } from "@chakra-ui/react";
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box backgroundColor="#151415" color="white" mt="10rem">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 3fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box display="flex" alignItems="center">
              <Image src={logo} w="3.5vmax" />
              <Text fontSize="xl" pl={2}>
                TalentX
              </Text>
            </Box>
            <Text fontSize={"sm"} color="#888888">
              Made by Dwij jindal
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Github"} href={"https://github.com/Dwij13"}>
                <FaGithub size="md" />
              </SocialButton>
              <SocialButton
                label={"Linkdin"}
                href={"https://www.linkedin.com/in/dwij-jindal/"}
              >
                <FaLinkedin size="md" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram size="md" />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"} ml={{ base: "0", md: "10rem" }}>
            <Box as="a" href={"#"} color="#888888">
              About us
            </Box>
            <Box as="a" href={"#"} color="#888888">
              Customer Support
            </Box>
            <Box as="a" href={"#"} color="#888888">
              Contact us
            </Box>
            <Box as="a" href={"#"} color="#888888">
              Privacy Policy
            </Box>
            <Box as="a" href={"#"} color="#888888">
              Testimonials
            </Box>
          </Stack>
          <Stack>
            <SignedOut>
              <SignInButton>
                <Button colorScheme="blue">SignIn</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link to={"/post"}>
                <Button colorScheme="blue">Explore</Button>
              </Link>
            </SignedIn>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider colorScheme="red" />
      <br />
      <Stack align={"center"} pb={2}>
        <Text>© 2024 TalentX. All rights reserved</Text>
      </Stack>
    </Box>
  );
}
