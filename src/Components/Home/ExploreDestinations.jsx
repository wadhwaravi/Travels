import { Box, Image, Text } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Hometwo() {
  //   const data = [
  //     {
  //       id: 1,
  //       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3d/6b/0d/caption.jpg?w=300&h=300&s=1",
  //       title: "Kolkata-Sounds and Sights-Private Full Day City Tour",
  //       review: "32",
  //       price: "from ₹4,800 per adult",
  //     },
  //     {
  //       id: 2,
  //       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c7/d9/ea/caption.jpg?w=300&h=300&s=1",
  //       title: "Private Half-Day Kolkata Tour",
  //       review: "23",
  //       price: "from ₹2,595 per adult",
  //     },
  //     {
  //       id: 3,
  //       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8c/36/6b/caption.jpg?w=300&h=300&s=1",
  //       title: "One Day Guided Kolkata Local Sightseeing Trip by Cab",
  //       review: "5",
  //       price: "from ₹6,000 per adult",
  //     },
  //     {
  //       id: 4,
  //       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/42/4f/caption.jpg?w=300&h=300&s=1",
  //       title:
  //         "Day trip from Kolkata to Bishnupur for Terracotta Temples and Silk",
  //       review: "8",
  //       price: "from ₹13,496 per adult",
  //     },
  //   ];
  const data = [
    {
      id: 1,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/df/a1/d4/caption.jpg?w=300&h=300&s=1",
      title: "Goa Beach and Water Sports Adventure",
      review: "78",
      price: "from ₹3,200 per adult",
    },
    {
      id: 2,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/22/95/19/caption.jpg?w=300&h=300&s=1",
      title: "Jaipur Cultural Walking Tour with Local Guide",
      review: "45",
      price: "from ₹1,500 per adult",
    },
    {
      id: 3,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6c/46/f8/caption.jpg?w=300&h=300&s=1",
      title: "Mumbai Street Food Tour",
      review: "59",
      price: "from ₹2,800 per adult",
    },
    {
      id: 4,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6c/46/f7/caption.jpg?w=300&h=300&s=1",
      title: "Kerala Backwaters Houseboat Cruise",
      review: "87",
      price: "from ₹10,000 per adult",
    },
    {
      id: 5,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3f/58/0d/caption.jpg?w=300&h=300&s=1",
      title: "Rajasthan Desert Safari and Camel Ride",
      review: "68",
      price: "from ₹7,500 per adult",
    },
    {
      id: 6,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6c/46/f6/caption.jpg?w=300&h=300&s=1",
      title: "Sikkim Mountain Trekking Adventure",
      review: "34",
      price: "from ₹12,000 per adult",
    },
    {
      id: 7,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/01/5b/2d/caption.jpg?w=300&h=300&s=1",
      title: "Rishikesh River Rafting and Camping",
      review: "102",
      price: "from ₹3,500 per adult",
    },
    {
      id: 8,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6c/46/f9/caption.jpg?w=300&h=300&s=1",
      title: "Andaman Islands Scuba Diving Experience",
      review: "55",
      price: "from ₹8,000 per adult",
    },
  ];

  return (
    <Box w="85%" m="auto" textAlign="left" mt="40px" marginBottom="100px">
      <Text fontWeight="600" fontSize="2xl">
        Explore Top Destinations
      </Text>
      <Text fontSize="md" color="gray.600">
        Discover the best things to do at your chosen destination.
      </Text>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap="20px"
        mt="20px"
      >
        {data &&
          data.map((el) => {
            return (
              <Box
                key={el.id}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                position="relative"
                _hover={{
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                  transition: "0.3s ease-in-out",
                }}
              >
                <Image
                  src={el.img}
                  alt={el.title}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Box p="10px">
                  <Text fontWeight="600" fontSize="lg" mb="2">
                    {el.title}
                  </Text>
                  <Box display="flex" alignItems="center" mb="2">
                    <Box
                      display="flex"
                      gap="2px"
                      alignItems="center"
                      color="green.400"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Box
                          key={i}
                          boxSize="12px"
                          bg={i < 4 ? "green.400" : "gray.300"} // Example rating logic
                          rounded="50%"
                        />
                      ))}
                    </Box>
                    <Text fontSize="sm" ml="5px">
                      {el.review} reviews
                    </Text>
                  </Box>
                  <Text fontWeight="500" fontSize="md" color="gray.700">
                    {el.price}
                  </Text>
                </Box>
                <Box
                  p="8px"
                  bg="white"
                  borderRadius="full"
                  boxShadow="md"
                  position="absolute"
                  top="10px"
                  right="10px"
                  cursor="pointer"
                >
                  <FavoriteBorderIcon />
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

// export default Hometwo;

// function Hometwo() {
//   const data = [
//     {
//       id: 1,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3d/6b/0d/caption.jpg?w=300&h=300&s=1",
//       title: "Kolkata-Sounds and Sights-Private Full Day City Tour",
//       review: "32",
//       price: "from ₹4,800 per adult",
//     },
//     {
//       id: 2,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c7/d9/ea/caption.jpg?w=300&h=300&s=1",
//       title: "Private Half-Day Kolkata Tour",
//       review: "23",
//       price: "from ₹2,595 per adult",
//     },
//     {
//       id: 3,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8c/36/6b/caption.jpg?w=300&h=300&s=1",
//       title: "One Day Guided Kolkata Local Sightseeing Trip by Cab",
//       review: "5",
//       price: "from ₹6,000 per adult",
//     },
//     {
//       id: 4,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/42/4f/caption.jpg?w=300&h=300&s=1",
//       title:
//         "Day trip from Kolkata to Bishnupur for Terracotta Temples and Silk",
//       review: "8",
//       price: "from ₹13,496 per adult",
//     },
//   ];

//   return (
//     <Box w="85%" m="auto" textAlign="left" mt="40px">
//       <Text fontWeight="600" fontSize="2xl">
//         Discover Top Destinations
//       </Text>
//       <Text fontSize="md">
//         Find the best things to do at your chosen destination.
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
//                 <Text fontWeight="600" fontSize="lg">
//                   {el.title}
//                 </Text>
//                 <Box w="90px" display="flex" gap="2px" alignItems="center">
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
//                 <Text fontWeight="500" fontSize="md">
//                   {el.price}
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

export default Hometwo;
