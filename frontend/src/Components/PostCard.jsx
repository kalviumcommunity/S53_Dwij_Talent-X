import { Button, Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BiLike } from 'react-icons/bi'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";

export default function PostCard({e}) {
  return (
    <div>
      <Card 
      backgroundColor="#151415"

      >
        <CardBody
        display="flex"
        justifyContent="center"

        >
            <Image
            objectFit='cover'
            w="100%"
            boxSize="20vmax"
            src={e.image}
            alt='No Post found'
            color={'white'}

            >

            </Image>
        </CardBody>
        <CardFooter
        alignItems="center"
        justifyContent="space-evenly"
        >
            <Button leftIcon={<FaRegHeart />}
            backgroundColor="#151415"
            color="white"
            _hover={{
                bg:"#151415"
            }}
            >
                Like
            </Button>
            <Text color="white"
            display="flex"
            alignItems="center"
            >
            <MdOutlineModeComment />
                Comments
            </Text>
        </CardFooter>
      </Card>
      
    </div>
  )
}
