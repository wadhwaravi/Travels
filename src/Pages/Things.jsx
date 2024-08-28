import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Components/Thingstodo/Header/Header'; 
import Map from '../Components/Thingstodo/Map/Map'; 
import List from '../Components/Thingstodo/List/List'; 
import { getPlacesData } from '../api';

const Things = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);
    const [autocomplete, setAutocomplete] = useState(null);

    // Fetch current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        }, (error) => {
            console.error('Error fetching location:', error);
        });
    }, []);

    useEffect(() => {
        if (places) {
            setFilteredPlaces(places.filter((place) => place.rating > rating));
        }
    }, [rating, places]);

    useEffect(() => {
        if (bounds?.sw && bounds?.ne) {
            setIsLoading(true);
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data || []);  
                    setFilteredPlaces([]);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching places data:', error);
                    setIsLoading(false);
                });
        }
    }, [type, bounds, coordinates]);

   
    const onLoad = useCallback((autoC) => setAutocomplete(autoC), []);

    const onPlaceChanged = useCallback(() => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                setCoordinates({ lat, lng });
            }
        }
    }, [autocomplete]);

    return (
        <>
            <Header
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            />
            <div style={{ display: 'flex', height: 'calc(100vh - 64px)', marginTop: '2rem' }}>
                {/* Left Side: List */}
                <div style={{ flex: 1, padding: '1rem', backgroundColor: '#f0f0f0', overflow: 'auto' }}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </div>

                {/* Right Side: Map */}
                <div style={{ flex: 1, padding: '1rem', height: '100%', overflow: 'hidden' }}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </div>
            </div>
        </>
    );
};

export default Things;
