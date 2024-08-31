import { Box, Image, Text } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom"; // Import Link from React Router

function Hometwo() {
  const data = [
    {
      id: 1,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=300&h=300&s=1",
      title: "Goa Beach and Water Sports Adventure",
      review: "78",
      price: "from ₹3,200 per adult",
    },
    {
      id: 2,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=300&h=-1&s=1",
      title: "Jaipur Cultural Walking Tour with Local Guide",
      review: "45",
      price: "from ₹1,500 per adult",
    },
    {
      id: 3,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=300&h=300&s=1",
      title: "Mumbai Street Food Tour",
      review: "59",
      price: "from ₹2,800 per adult",
    },
    {
      id: 4,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/82/bc/d0/caption.jpg?w=300&h=300&s=1",
      title: "Kerala Backwaters Houseboat Cruise",
      review: "87",
      price: "from ₹10,000 per adult",
    },
    {
      id: 5,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/78/a4/44/caption.jpg?w=300&h=300&s=1",
      title: "Rajasthan Desert Safari and Camel Ride",
      review: "68",
      price: "from ₹7,500 per adult",
    },
    {
      id: 6,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/07/dc/79/thangshing-valley-with.jpg?w=300&h=300&s=1",
      title: "Sikkim Mountain Trekking Adventure",
      review: "34",
      price: "from ₹12,000 per adult",
    },
    {
      id: 7,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/fb/23/rishikesh-river-rafting.jpg?w=300&h=300&s=1",
      title: "Rishikesh River Rafting and Camping",
      review: "102",
      price: "from ₹3,500 per adult",
    },
    {
      id: 8,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2d/b8/andaman-and-nicobar-islands.jpg?w=300&h=300&s=1",
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
              <Link
                key={el.id}
                to={`/details/${el.id}`} // Link to details page with item ID
                style={{ textDecoration: 'none' }}
              >
                <Box
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
              </Link>
            );
          })}
      </Box>
    </Box>
  );
}

export default Hometwo;
