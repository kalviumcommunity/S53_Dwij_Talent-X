import React from "react";
import {
  Card,
  CardHeader,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import "./../App.css";
import background from "./../assets/home-back.png";
import newimg from "./../assets/newimg.png";
import connect from "./../assets/connect.png";
import donate from "./../assets/donate.png";
import share from "./../assets/share.png";
import contact from "./../assets/contact.png";
import whatsapp from "./../assets/whatsapp.png";
import gmail from "./../assets/gmail.png";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <div className="bg">
        <div className="bg-img">
          <img src={background} className="img" />
        </div>
        <div className="bg-text">The only place to get Quality Talent</div>
      </div>
      <div className="add-feature">
        <Card
          maxW={["70%", "60%", "30%"]}
          backgroundColor="black"
          color="white"
        >
          <CardBody>
            <Image
              src={newimg}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size={["md", "md", "xl"]} textAlign="center">
                We have added a new feature
              </Heading>
              <Text textAlign="center" color="#6D6D6D">
                Coming soon....
              </Text>
            </Stack>
          </CardBody>
          <CardFooter display="flex" justifyContent="center">
            <Button
              backgroundColor="#0171E2"
              color="white"
              borderRadius="61px"
              size={["sm", "md"]}
            >
              Learn more
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Stack mt="10" display="flex" justifyContent="center" alignItems="center">
        <Card
          direction={{ base: "column", sm: "column", md: "row" }}
          overflow="hidden"
          variant="outline"
          backgroundColor="#151415"
          borderRadius="36px"
          color="white"
          maxW="80%"
          border="none"
        >
          <Image
            objectFit="cover"
            w={{ base: "100%", md: "25vmax" }}
            src={connect}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody
              maxW="md"
              display="flex"
              flexDirection="column"
              gap="1vmax"
              pl="7"
            >
              <Text size="md" color="#6D6D6D">
                Feature
              </Text>
              <Heading size="xl">Connecting with more like you</Heading>
              <Text py="2" fontSize={["md", "x", "xl"]}>
                Whether you're a budding musician, an aspiring artist, a future
                filmmaker, or a talented writer, this is your platform to shine.
                Through posts, videos, and discussions, you can connect with
                others who share your talents and tastes, collaborate on
                projects, and inspire each other to reach new heights
              </Text>
              <Text size="md" color="#6D6D6D">
                Added 24-Apr-2024
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Stack>
      <HStack
        justifyContent="center"
        mt="5rem"
        flexDirection={{ base: "column", sm: "row" }}
        gap="5vmax"
      >
        <Card
          maxW={["70%", "60%", "30%"]}
          color="white"
          borderRadius="36px"
          backgroundColor="#151415"
        >
          <Image
            src={donate}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <CardBody>
            <Stack spacing="4">
              <Text size="md" color="#6D6D6D">
                Feature
              </Text>
              <Heading size="xl">Donate to Others</Heading>
              <Text size="md" color="#6D6D6D">
                Added 24-Apr-2024
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card
          maxW={["70%", "60%", "30%"]}
          backgroundColor="#151415"
          color="white"
          borderRadius="36px"
        >
          <Image
            src={share}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <CardBody>
            <Stack spacing="3">
              <Text size="md" color="#6D6D6D">
                Feature
              </Text>
              <Heading size="xl">Share to others</Heading>
              <Text size="md" color="#6D6D6D">
                Added 24-Apr-2024
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </HStack>
      <VStack mt="5rem">
        <Card
          direction={{ base: "column", sm: "column", md: "row" }}
          overflow="hidden"
          variant="outline"
          border="none"
          backgroundColor="#151415"
          color="white"
          borderRadius="36px"
          maxW={{ base: "70%", sm: "80%" }}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "25vmax" }}
            src={contact}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody
              minW="md"
              display="flex"
              flexDirection="column"
              gap="1.5vmax"
              pl="7"
            >
              <Heading size="xl">Contact</Heading>

              <Text py="2" display={"flex"} alignItems="center" color="#6D6D6D">
                <FaWhatsapp size="25" />
                &nbsp; +91 9784625391
              </Text>
              <Text py="2" display={"flex"} alignItems="center" color="#6D6D6D">
                <IoIosMail size="25" />
                &nbsp; Dwijjindal2005@gmail.com
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </VStack>
      <Footer/>
    </div>
  );
}
