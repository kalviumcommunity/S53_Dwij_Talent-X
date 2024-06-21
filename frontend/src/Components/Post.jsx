import React, { useEffect, useState } from "react";
import "./../App.css";
import axios from "axios";
import { Button, Card, CardBody, Heading, Image, Input, SimpleGrid, Stack, Text, useDisclosure } from "@chakra-ui/react";
import PostCard from "./PostCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import newPost from "./../assets/newPost.png"
import Navbar from "./Navbar";
import { BiDollar } from "react-icons/bi";

export default function Post() {
  

    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  

  const [post,setPost]= useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay]=React.useState(<OverlayOne />)
  useEffect(()=>{
    axios
    .get("https://talent-x.vercel.app/post")
    .then((res)=>{
      console.log(res.data);
      setPost(res.data);
    })
    .catch((err)=>console.log(err));
  },[])



  return (
    <>
    <Navbar/>
    <div className="post-parent">
      <div className="explore">
        <Text color="white">Explore</Text>
      </div>
      <div>
        <SimpleGrid spacing={10} 
        columns={[1,2,3]}
        pt={3}
        >
        {post.map((e)=>{
          return(
            <>
            <PostCard e={e}/>
            </>
          )
        })}
        </SimpleGrid>
        <div className="donation">
        <Button
        colorScheme="blue"
        >
        <BiDollar />
        </Button>
        </div>
        <div className="new-post">
        <Button
        colorScheme="blue"
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
        >
          New Post
        </Button>
        </div>
        <Modal isCentered isOpen={isOpen} onClose={onClose}
        
      >
        {overlay}
        <ModalContent
        backgroundColor="transparent"
        maxW={{base:"50vmax"}}
        
        >
          <Card
          direction={{ base: "column", sm: "column", md: "row" }}
          overflow="hidden"
          variant="outline"
          backgroundColor="#151415"
          borderRadius="36px"
          color="white"
          maxW="100%"
          border="none"
        >
          <Image
            objectFit="cover"
            w={{ base: "100%", md: "20vmax" }}
            src={newPost}
            alt="Caffe Latte"
          />

          {/* <Stack> */}
            <CardBody
              // maxW=""
              display="flex"
              flexDirection="column"
              gap="1vmax"
              pl="7"
            >
              <Text size="md" color="">
                Title
              </Text>
              <Input
              w="100%"
              >

              </Input>
              <Text>
                Description
              </Text>
              <Input>

              </Input>
              <Text>
                Image
              </Text>
              <Input>

              </Input>
              <Button
              colorScheme="blue"
              >
                Share
              </Button>
            </CardBody>
          {/* </Stack> */}
        </Card>
        </ModalContent>
      </Modal>
      </div>
    </div>
    </>
  );
}
