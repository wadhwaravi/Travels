import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Stepper,
  StepIndicator,
  StepTitle,
  StepDescription,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import StageOneForm from "./StageOneForm";
import StageTwoForm from "./StageTwoForm";
import StageThreeForm from "./StageThreeForm";
import StageFourForm from "./StageFourForm";
import { Interests } from "@mui/icons-material";

const steps = [
  { title: "First Step", description: "Enter your details" },
  { title: "Second Step", description: "Select the dates" },
  { title: "Third Step", description: "Enter Trip Type" },
  { title: "Final Step", description: "Select your Interests" },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handlePlaceSelection = () => {
    handleNext();
  };
  const handleDateSelection = () => {
    handleNext();
  };

  const handleTripSelect = () => {
    handleNext();
  };

  const handleSubmit = async () => {
    // Simulate API call or any other logic before navigation
    // Example: Save form data, generate itinerary, etc.
    console.log("Form submitted:", formData);
    const question = `Create a detailed travel itinerary for a ${
      formData.trip_Type
    } trip to ${formData.selectedPlace} from ${formData.startDate} to ${
      formData.endDate
    } Consider my interests, which include ${[...formData.interests]}`;
    console.log(question);
    const itenary = await axios({
      url: "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyCR27oPsrNw77sxbxCKJCUT8TAF9H_Jisc",
      method: "post",
      data: {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
      },
    });
    // Redirect to itinerary page with the formData

    const tripData =
      itenary["data"]["candidates"][0]["content"]["parts"][0]["text"];

    navigate("/itinerary", { state: { plannedItinerary: tripData } });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Flex direction="column" align="center" h="100vh">
      <Box
        width="100%"
        p={4}
        boxShadow="md"
        borderWidth={1}
        borderRadius="md"
        bg="white"
      >
        <Center mb={6}>
          <Box width="100%" mt={15}>
            <Stepper size="lg" index={activeStep} mb="40px" width="100%">
              <Flex width="100%" align="center">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <Flex direction="column" align="center" flex="1">
                      <StepIndicator>
                        <Box
                          w="40px"
                          h="40px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="full"
                          bg={index <= activeStep ? "green.500" : "gray.300"}
                          color="white"
                          fontWeight="bold"
                        >
                          {index + 1}
                        </Box>
                      </StepIndicator>
                      <Box mt={2} textAlign="center">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </Box>
                    </Flex>
                    {index < steps.length - 1 && (
                      <Box
                        flex="1"
                        height="2px"
                        bg={index < activeStep ? "green.500" : "gray.300"}
                        mx={2}
                      />
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            </Stepper>
          </Box>
        </Center>

        <Box>
          {activeStep === 0 && (
            <StageOneForm
              formData={formData}
              handleChange={handleChange}
              onPlaceSelect={handlePlaceSelection}
            />
          )}
          {activeStep === 1 && (
            <StageTwoForm
              formData={formData}
              handleChange={handleChange}
              onPlaceSelect={handleDateSelection}
            />
          )}
          {activeStep === 2 && (
            <StageThreeForm
              formData={formData}
              handleChange={handleChange}
              onTripSelect={handleTripSelect}
            />
          )}
          {activeStep === 3 && (
            <StageFourForm formData={formData} handleChange={handleChange} />
          )}
        </Box>

        <Flex mt={4} justify="space-between">
          <Button onClick={handleBack} isDisabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MultiStepForm;
