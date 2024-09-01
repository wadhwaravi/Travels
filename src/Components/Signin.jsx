import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Signup from "./Signup"; // Import Signup component

function Signin({ isOpen, onClose, onOpen }) {
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure(); // For Sign-up Modal

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    alert("Successfully Logged in");
    window.location.reload();
  };

  // Function to handle Sign-up transition
  const handleJoinClick = () => {
    onClose(); // Close Sign-in Modal
    setTimeout(() => {
      onSignupOpen(); // Open Sign-up Modal after Sign-in closes
    }, 200);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6} p="10px 60px">
            <Text fontSize="3xl" color="black" mb="20px" fontWeight="500">
              Welcome.
            </Text>

            <FormControl>
              <FormLabel fontWeight="600" fontSize="md">
                Email address
              </FormLabel>
              <Input
                outline="none"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel fontWeight="600" fontSize="md">
                Password
              </FormLabel>
              <Box display="flex" alignItems="center">
                <Input
                  outline="none"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ViewIcon ml="-25px" />
              </Box>
            </FormControl>

            <Text
              mt="10px"
              ml="5px"
              textDecoration="underline"
              color="black"
              fontWeight="400"
              fontSize="md"
            >
              Forgot Password?
            </Text>

            <FormControl textAlign="center">
              <Button
                onClick={handleSignIn}
                fontWeight="700"
                bg="black"
                p="27px 25px"
                w="80%"
                m="auto"
                mt="20px"
                borderRadius="3xl"
                color="white"
                fontSize="md"
              >
                Sign in
              </Button>
            </FormControl>

            <Box
              w="97%"
              m="auto"
              mt="25px"
              display="flex"
              gap="8px"
              alignItems="center"
            >
              <Divider />
              <Text w="100%" fontSize="md">
                Not a member?
              </Text>
              <Divider />
            </Box>

            {/* Trigger Sign-up Modal */}
            <Text
              mt="20px"
              textAlign="center"
              fontSize="md"
              cursor="pointer"
              onClick={handleJoinClick} // Using the function to handle Sign-up transition
            >
              <u>
                <b>Join</b>
              </u>{" "}
              to unlock the best
            </Text>

            <Text mt="25px" textAlign="center" fontSize="xs">
              By proceeding, you agree to our <u>Terms of Use</u> and confirm
              you have read our <u>Privacy and Cookie Statement</u>.
            </Text>

            <Text mt="15px" textAlign="center" mb="20px" fontSize="xs">
              This site is protected by reCAPTCHA and the Google{" "}
              <u>Privacy Policy</u> and <u>Terms of Service</u> apply.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Sign Up Modal */}
      <Signup
        isOpen={isSignupOpen}
        onClose={onSignupClose}
        onSignIn={onOpen}
      />{" "}
      {/* Passing onOpen prop correctly */}
    </>
  );
}

export default Signin;
