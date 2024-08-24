import {
  Box,
  Text,
  Image,
  Button,
  Select,
  Flex,
  VStack,
} from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Homefive() {
  const hotelData = [
    {
      id: 1,
      img: "https://example.com/hotel1.jpg",
      title: "Grand Luxury Hotel",
      rating: "4.5/5",
      price: "₹8,000 per night",
    },
    {
      id: 2,
      img: "https://example.com/hotel2.jpg",
      title: "Comfort Inn",
      rating: "4.0/5",
      price: "₹4,500 per night",
    },
    {
      id: 3,
      img: "https://example.com/hotel3.jpg",
      title: "Budget Stay",
      rating: "3.5/5",
      price: "₹2,500 per night",
    },
  ];

  return (
    <Box bg="#FAF1ED" p="10px 0px" mt="40px" pb="35px">
      <Box w="85%" m="auto" textAlign="left" mt="40px">
        <Text fontWeight="600" fontSize="2xl">
          Find Your Ideal Stay
        </Text>
        <Text fontSize="md" mt="5px" color="gray.600">
          Compare hotels based on budget, amenities, and quality.
        </Text>

        {/* Filter Options */}
        <Box
          mt="20px"
          mb="20px"
          p="20px"
          bg="white"
          borderRadius="8px"
          boxShadow="lg"
        >
          <Text fontWeight="500" fontSize="lg" mb="10px">
            Filter Options
          </Text>
          <Flex direction={{ base: "column", md: "row" }} gap="10px">
            <Select placeholder="Budget" mb="10px" flex="1">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
            <Select placeholder="Amenities" mb="10px" flex="1">
              <option value="wifi">WiFi</option>
              <option value="pool">Pool</option>
              <option value="parking">Parking</option>
            </Select>
            <Select placeholder="Quality" mb="10px" flex="1">
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
            </Select>
            <Button
              mt="md"
              fontWeight="700"
              color="white"
              bg="black"
              rounded="25px"
              p="23px 23px"
              flexShrink="0"
            >
              Apply Filters
            </Button>
          </Flex>
        </Box>

        {/* Hotel Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="15px"
        >
          {hotelData.map((hotel) => (
            <Box
              key={hotel.id}
              bg="white"
              borderRadius="8px"
              boxShadow="lg"
              overflow="hidden"
              position="relative"
              textAlign="center"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
            >
              <Image src={hotel.img} alt={hotel.title} />
              <Box p="15px">
                <Text fontWeight="600" fontSize="lg" mb="2">
                  {hotel.title}
                </Text>
                <Text fontWeight="500" fontSize="md" color="gray.600">
                  {hotel.rating}
                </Text>
                <Text fontWeight="400" fontSize="md" color="gray.700">
                  {hotel.price}
                </Text>
              </Box>
              <Box
                p="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="white"
                rounded="50%"
                position="absolute"
                top="10px"
                right="10px"
                boxShadow="md"
                _hover={{ bg: "gray.200" }}
              >
                <FavoriteBorderIcon />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// function Homefive() {
//   const data = [
//     {
//       id: 1,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/ab/94/ba/2de5214a-d5dc-42d2.jpg?w=400&h=-1&s=1",
//       title: "5 Beautiful hill stations in south India",
//     },
//     {
//       id: 2,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/20/d4/45276d36-cc36-4a32.jpg?w=400&h=-1&s=1",
//       title: "11 Beautiful places in India that have to be seen to be believed",
//     },
//     {
//       id: 3,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c8/2e/9a/2520956e-5665-4e9f.jpg?w=400&h=-1&s=1",
//       title: "Best time to visit Dubai for great weather and deals",
//     },
//   ];

//   return (
//     <Box bg="#FAF1ED" p="5px 0px" mt="40px" pb="35px">
//       <Box w="85%" m="auto" textAlign="left" mt="40px">
//         <Text fontWeight="600" fontSize="2xl">
//           More to Explore
//         </Text>
//         <Box
//           display="grid"
//           justifyContent="space-between"
//           gridTemplateColumns="repeat(3, 1fr)"
//           gap="15px"
//           mt="15px"
//         >
//           {data &&
//             data.map((el) => {
//               return (
//                 <Box
//                   bg="white"
//                   pb="30px"
//                   position="relative"
//                   textAlign="center"
//                   key={el.id}
//                 >
//                   <Image src={el.img} alt="" />
//                   <Text mt="20px" fontWeight="500" fontSize="md">
//                     From Tripadvisor
//                   </Text>
//                   <Text fontWeight="500" fontSize="lg">
//                     {el.title}
//                   </Text>
//                   <Box
//                     p="10px"
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                     bg="white"
//                     rounded="50%"
//                     position="absolute"
//                     top="10px"
//                     right="10px"
//                   >
//                     <FavoriteBorderIcon />
//                   </Box>
//                 </Box>
//               );
//             })}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

export default Homefive;
