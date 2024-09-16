import React, { useCallback, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useMediaQuery, Box, Text, Tooltip, Spinner } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { FaUtensils, FaHotel, FaLandmark } from 'react-icons/fa';

const containerStyle = {
    height: '84vh',
    width: '100%',
    marginTop: '2rem',
};

const getIcon = (type) => {
    switch (type) {
        case 'restaurants':
            return <FaUtensils color="red" fontSize="24px" />;
        case 'hotels':
            return <FaHotel color="blue" fontSize="24px" />;
        case 'attractions':
            return <FaLandmark color="green" fontSize="24px" />;
        default:
            return <MdLocationOn color="primary" fontSize="24px" />;
    }
};

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
    const [map, setMap] = useState(null);
    const [isDesktop] = useMediaQuery('(min-width: 600px)');
    const [famousFood, setFamousFood] = useState([]);
    const [isFoodLoading, setIsFoodLoading] = useState(false);

    const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDOtgXd-Sr9RsiSXcVMOER7kMgEgKHsV30';

    const onLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
        console.log('Map Loaded:', mapInstance);
    }, []);

    const onBoundsChanged = useCallback(() => {
        if (map) {
            const bounds = map.getBounds();
            if (bounds) {
                const ne = bounds.getNorthEast().toJSON();
                const sw = bounds.getSouthWest().toJSON();
                setBounds({ ne, sw });
                fetchFamousFood(coordinates); // Fetch food based on center of the map
            }
        }
    }, [map, setBounds, coordinates]);

    const onMapClick = (e) => {
        const newCoordinates = e.latLng.toJSON();
        setCoordinates(newCoordinates);
    };

    const fetchFamousFood = async (coordinates) => {
        setIsFoodLoading(true);
        try {
            const response = await fetch(GEMINI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `What is the famous food at latitude ${coordinates.lat} and longitude ${coordinates.lng}? If not found, mention famous food of a nearby place and give at least 2-3 food names.`,
                                },
                            ],
                        },
                    ],
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('API Data:', data);
    
                // Extract food text from API response
                const foodText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
                // Log the entire response for debugging
                console.log('Famous Food Text:', foodText);
    
                // Use regex to extract food names (assuming they are listed between **)
                const foodsArray = foodText
                    .match(/\*\*([^\*]+)\*\*/g) // Match any food names between double asterisks (**)
                    ?.map((food) => food.replace(/\*\*/g, '').trim()) || []; // Clean up the asterisks and trim spaces
    
                // Log only the extracted food names
                console.log('Extracted Food Names:', foodsArray);
    
                // Update the state with just the food names
                setFamousFood(foodsArray);
            } else {
                const errorText = await response.text();
                console.error('Error fetching famous food:', response.status, response.statusText, errorText);
            }
        } catch (error) {
            console.error('Error fetching famous food:', error);
        } finally {
            setIsFoodLoading(false);
        }
    };

    useEffect(() => {
        if (coordinates && coordinates.lat && coordinates.lng) {
            fetchFamousFood(coordinates);
        }
    }, [coordinates]);

    return (
        <div className="w-full h-full">
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coordinates}
                    zoom={14}
                    onLoad={onLoad}
                    onBoundsChanged={onBoundsChanged}
                    onClick={onMapClick}
                    options={{
                        disableDefaultUI: true,
                        zoomControl: true,
                    }}
                >
                    {/* Display places from the provided 'places' prop */}
                    {places?.map((place, i) => (
                        <Marker
                            key={i}
                            position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
                            icon={{
                                url: isDesktop ? '' : 'path_to_marker_icon.png',
                                scaledSize: new window.google.maps.Size(30, 30),
                            }}
                            onClick={() => setChildClicked(i)}
                        >
                            <Tooltip
                                label={
                                    <Box p={2}>
                                        <Text fontWeight="bold">{place.name}</Text>
                                        <Text fontSize="sm">Rating: {place.rating}</Text>
                                        <Text fontSize="sm">Price: {place.price_level}</Text>
                                        <Text fontSize="sm">Location: {place.address}</Text>
                                    </Box>
                                }
                            >
                                <div>{getIcon(place.type)}</div>
                            </Tooltip>
                        </Marker>
                    ))}

                    {/* Display weather data */}
                    {weatherData?.list?.map((data, i) => (
                        <Marker
                            key={i}
                            position={{ lat: data.coord.lat, lng: data.coord.lon }}
                            icon={{
                                url: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
                                scaledSize: new window.google.maps.Size(50, 50),
                            }}
                        />
                    ))}

                    {/* Famous Food Section on Map */}
                    {isFoodLoading ? (
                        <Spinner size="lg" />
                    ) : (
                        famousFood.length > 0 && (
                            famousFood.map((food, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: coordinates.lat, lng: coordinates.lng }} // Using the map center for now
                                    icon={{
                                        url: 'path_to_food_marker_icon.png', // Ensure this path is correct
                                        scaledSize: new window.google.maps.Size(30, 30),
                                    }}
                                >
                                    <Tooltip
                                        label={
                                            <Box p={2}>
                                                <Text fontWeight="bold">{food}</Text> {/* Display food name directly */}
                                                <Text fontSize="sm">Delicious local food</Text>
                                            </Box>
                                        }
                                    >
                                        <div>
                                            <FaUtensils color="red" fontSize="24px" />
                                        </div>
                                    </Tooltip>
                                </Marker>
                            ))
                        )
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
