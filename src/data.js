import caption from "./assets/Punta.jpg";
import Costa from "./assets/Costa.jpg";
import Mahabaleswar from "./assets/Mahabaleshwar.jpg";
import Nashik from "./assets/Nashik.jpg";
import Puerto from "./assets/Puerto.jpg";
import Pahalgam from "./assets/Pahalgam.jpg";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";


const WHERETOGO = [
    {
        image: caption,
        name: "Punta Cena",
        location: "Caribbean"
    },
    {
        image: Mahabaleswar,
        name: "Mahabaleshwer",
        location: "India"
    },
    {
        image: Costa,
        name: "Costa Adeje",
        location: "Spain"
    },
    {
        image: Nashik,
        name: "Nashik",
        location: "India"
    },
    {
        image: Puerto,
        name: "Puerto Morelos",
        location: "Mexico"
    },
    {
        image: Pahalgam,
        name: "Pahalgam",
        location: "India"
    }
];
const TRIPTYPE = [
    {
        trip_type: "Solo Trip",
        icon: <CgProfile />
    },
    {
        trip_type: "Patner Trip",
        icon: <FaHeart />
    },
    {
        trip_type: "Friend Trip",
        icon: <FaUserFriends />
    },
    {
        trip_type: "Family Trip",
        icon: <MdOutlineFamilyRestroom />
    },
]
const INTEREST = [
    "Must - see Attractions",
    "Great Food",
    "Hidden Gems",
    "Historical Sites",
    "Beach Exploration",
    "Nature and Wildlife",
    "Art and Craft Shops",
    "Wellness Retreats",
    "Culture",
    "Wine & Beer",
    "Outdoors",
    "Arts & Theatre"
]

export { WHERETOGO, TRIPTYPE, INTEREST};
