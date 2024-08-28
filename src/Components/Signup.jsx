import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";

function Signup({ isOpen, onClose, onSignIn }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  function handleSignUp() {
    alert("Successfully Signed Up");
    // Add your signup logic here
    window.location.reload();
  }

  // Handle the transition to the Sign-in modal with a delay
  function handleSignInClick() {
    onClose(); // Close the current (Sign-up) modal
    setTimeout(() => {
      onSignIn(); // Open the Sign-in modal after a short delay
    }, 200); // Adjust the delay as necessary (200ms works well for smooth transition)
  }

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6} p="10px 60px">
          <Text fontSize="3xl" color="black" mb="20px" fontWeight="500">
            Create an Account
          </Text>

          <FormControl>
            <FormLabel fontWeight="600" fontSize="md">
              Username
            </FormLabel>
            <Input
              outline="none"
              ref={initialRef}
              placeholder="Username"
              type="text"
            />
          </FormControl>

          <FormControl mt={3}>
            <FormLabel fontWeight="600" fontSize="md">
              Email address
            </FormLabel>
            <Input outline="none" placeholder="Email" type="email" />
          </FormControl>

          <FormControl mt={3}>
            <FormLabel fontWeight="600" fontSize="md">
              Password
            </FormLabel>
            <Box display="flex" alignItems="center">
              <Input outline="none" type="password" placeholder="Password" />
              <ViewIcon ml="-25px" />
            </Box>
          </FormControl>

          <FormControl textAlign="center">
            <Button
              onClick={handleSignUp}
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
              Sign up
            </Button>
          </FormControl>

          <Text
            mt="20px"
            textAlign="center"
            fontSize="md"
            cursor="pointer"
            onClick={handleSignInClick} // Use the function with a delay for smooth transition
          >
            Already a member?{" "}
            <u>
              <b>Sign in</b>
            </u>
          </Text>

          <Text mt="25px" textAlign="center" fontSize="xs">
            By creating an account, you agree to our <u>Terms of Use</u> and
            confirm you have read our <u>Privacy and Cookie Statement</u>.
          </Text>

          <Text mt="15px" textAlign="center" mb="20px" fontSize="xs">
            This site is protected by reCAPTCHA and the Google{" "}
            <u>Privacy Policy</u> and <u>Terms of Service</u> apply.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Signup;
