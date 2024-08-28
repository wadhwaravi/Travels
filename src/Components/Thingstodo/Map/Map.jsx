
import React, { useCallback, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useMediaQuery, Box, Image, Text, Tooltip } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { FaUtensils, FaHotel, FaLandmark } from 'react-icons/fa'; // Use available icons

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

    const onLoad = useCallback((mapInstance) => {
        setMap(mapInstance);
        console.log('Map Loaded:', mapInstance);
    }, []);

    const onBoundsChanged = useCallback(() => {
        if (map) {
            const bounds = map.getBounds();
            if (bounds) {
                setBounds({
                    ne: bounds.getNorthEast().toJSON(),
                    sw: bounds.getSouthWest().toJSON(),
                });
            }
        }
    }, [map, setBounds]);

    const onMapClick = (e) => {
        console.log('Map clicked', e.latLng.toJSON());
        setCoordinates(e.latLng.toJSON());
    };

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
                                        <Image 
                                            src={place.photo ? place.photo.images.large.url : ""} 
                                            alt={place.name}
                                            boxSize="100px" 
                                            objectFit="cover" 
                                            mb={2}
                                        />
                                        <Text fontSize="sm">Rating: {place.rating}</Text>
                                        <Text fontSize="sm">Price: {place.price_level}</Text>
                                        <Text fontSize="sm">Ranking: {place.ranking}</Text>
                                        <Text fontSize="sm">Location: {place.address}</Text>
                                    </Box>
                                } 
                                aria-label="Place details"
                            >
                                <div>
                                    {getIcon(place.type)}
                                </div>
                            </Tooltip>
                        </Marker>
                    ))}
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
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
