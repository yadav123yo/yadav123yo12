import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  HStack,
  Tag,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const Type = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} spacing={2} marginTop={props.marginTop}>
      {props.tags.map((type) => {
        return (
          <Tag
            size={"md"}
          
            colorScheme="red"
            _hover={{ bgColor: "red.700" , color:"white" }}
            key={type}
          >
            {type}
          </Tag>
        );
      })}
    </Flex>
  );
};

const Tech = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="red"
            marginTop={"20px"}
            _hover={{ bgColor: "teal.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export default function Card({
  img,
  tag,
  heading,
  features,
  content,
  deploy,
  git,
  tsTags,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        h={[, "xl"]}
        bg={useColorModeValue("red.50", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        >
        <Box
        className="cardZoom"
          h={["160px", "210px"]}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          
          <Image src={img} layout={"fill"} />
        </Box>
        <Stack pt={[1, 20]}>
          <Type tags={tag} />
       
          <Heading
            color={useColorModeValue("gray.700", "red")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {heading}
          </Heading>
          <Text color={"gray.500"}>{content}</Text>
          <Text color={"grey.700"}>{features}</Text>
        </Stack>
        <Stack direction={"row"} pt={5}>
          <Button
            bg={"red.300"}
            size={"sm"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "red.600" }}
            rightIcon={<BsGithub />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={git}
            >
              Github
            </Link>
          </Button>
          <Button
            bg={"red.300"}
            color={"white"}
            size={"sm"}
            rounded={"full"}
            _hover={{ bg: "red.600" }}
            rightIcon={<BsLink45Deg />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={deploy}
            >
              Deployment
            </Link>
          </Button>
          
        </Stack>
        <Tech tags={tsTags} />
      </Box>
    </Center>
  );
}
