import { Box, Image, Text, Button } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// function Homefour() {
//   const data = [
//     {
//       id: 1,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1",
//       title: "Dal Lake",
//       review: "4,218",
//       type: "Bodies of Water",
//     },
//     {
//       id: 2,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1",
//       title: "Paradise Beach",
//       review: "2,350",
//       type: "Beaches",
//     },
//     {
//       id: 3,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1",
//       title: "Double Decker Living Root Bridge",
//       review: "813",
//       type: "Bridges",
//     },
//     {
//       id: 4,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1",
//       title: "Tiger Hill",
//       review: "1,807",
//       type: "Lookouts",
//     },
//   ];

//   return (
//     <Box w="85%" m="auto" textAlign="left" mt="40px">
//       <Text fontWeight="600" fontSize="2xl">
//         Scenic autumn spots
//       </Text>
//       <Box
//         display="grid"
//         justifyContent="space-between"
//         gridTemplateColumns="repeat(4, 1fr)"
//         gap="15px"
//         mt="15px"
//       >
//         {data &&
//           data.map((el) => {
//             return (
//               <Box position="relative" key={el.id}>
//                 <Image src={el.img} alt="" />
//                 <Text fontWeight="600" fontSize="md">
//                   {el.title}
//                 </Text>
//                 <Box w="110px" display="flex" gap="2px" alignItems="center">
//                   <Box
//                     boxSize="12px"
//                     bg="green.400"
//                     rounded="50%"
//                     border="none"
//                   ></Box>
//                   <Box
//                     boxSize="12px"
//                     bg="green.400"
//                     rounded="50%"
//                     border="none"
//                   ></Box>
//                   <Box
//                     boxSize="12px"
//                     bg="green.400"
//                     rounded="50%"
//                     border="none"
//                   ></Box>
//                   <Box
//                     boxSize="12px"
//                     bg="green.400"
//                     rounded="50%"
//                     border="none"
//                   ></Box>
//                   <Box
//                     boxSize="12px"
//                     bg="green.400"
//                     rounded="50%"
//                     border="none"
//                   ></Box>
//                   <Text fontSize="sm" ml="5px">
//                     {el.review}
//                   </Text>
//                 </Box>
//                 <Text fontWeight="400" fontSize="md">
//                   {el.type}
//                 </Text>
//                 <Box
//                   p="10px"
//                   display="flex"
//                   justifyContent="center"
//                   alignItems="center"
//                   bg="white"
//                   rounded="50%"
//                   position="absolute"
//                   top="10px"
//                   right="10px"
//                 >
//                   <FavoriteBorderIcon />
//                 </Box>
//               </Box>
//             );
//           })}
//       </Box>
//     </Box>
//   );
// }
function Homefour() {
  return (
    <Box
      w="85%"
      m="auto"
      textAlign="left"
      mt="40px"
      bg="#F7F7F7"
      color="black"
      p="20px"
      borderRadius="8px"
    >
      <Text fontWeight="600" fontSize="2xl">
        Ask a Local
      </Text>
      <Text fontSize="md" mt="10px">
        Have questions about customs, etiquette, or local tips? Connect with a
        local resident or cultural expert directly through our live chat
        feature.
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        mt="20px"
        p="10px"
        borderRadius="8px"
        boxShadow="md"
        bg="#FFFFFF"
      >
        <Text fontWeight="500" fontSize="lg">
          How it works
        </Text>
        <Box mt="10px">
          <Text fontSize="md" mb="5px">
            1. Choose a destination or topic you need advice on.
          </Text>
          <Text fontSize="md" mb="5px">
            2. Connect with a local resident or expert who has knowledge about
            your query.
          </Text>
          <Text fontSize="md" mb="5px">
            3. Ask your questions and get personalized responses in real-time.
          </Text>
        </Box>
        <Box mt="20px">
          <Text fontWeight="500" fontSize="lg">
            Start Chatting Now
          </Text>
          <Button
            mt="40px"
            fontWeight="700"
            color="white"
            bg="black"
            rounded="25px"
            p="23px 23px"
            onClick={() => alert("Chat feature is under development")}
          >
            Connect with a Local
          </Button>
        </Box>
      </Box>
      <Box mt="40px" textAlign="center">
        <Text fontSize="lg" fontWeight="500">
          Have a question? Get in touch with us via our live chat!
        </Text>
      </Box>
    </Box>
  );
}

export default Homefour;
