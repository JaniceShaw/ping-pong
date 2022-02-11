import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import './style.scss';
import { useEffect } from 'react';
import { getData } from '../../Hooks/DataFetching';
import { useState } from 'react';

export const AddressAutoComplete = (props) => {
  const geocoderToken = '0dda38a2ffe34c53a35e8a91a1fd6b75';
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  function onPlaceSelect(location) {
    if (!location) {
      props.passAddress({
        lat: user.member_lat,
        lon: user.member_lon,
      });
    } else {
      props.passAddress(location.properties);
    }
  }

  function onSuggectionChange(value) {
    // console.log(user);
  }

  useEffect(() => {
    getData('user/helper/me/', setUser, setError);
  }, [setUser]);

  return (
    <>
      <div className='grid grid-cols-4 border-b border-primary_light'>
        <p className='border-r border-primary_light flex items-center pl-4'>
          location
        </p>
        <GeoapifyContext apiKey={geocoderToken}>
          <GeoapifyGeocoderAutocomplete
            placeholder='Enter address here'
            skipIcons={true}
            value={`${user.street}, ${user.zip} ${user.city}`}
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
            filterByCountryCode={['ch']}
            // type={['amenity']}
            // lang={language}
            // position={`${(coordUser.lat, coordUser.lon)}`}
            // position={position}
            // countryCodes={countryCodes}
            // filterByCircle={filterByCircle}
            // filterByRect={filterByRect}
            // biasByCountryCode={biasByCountryCode}
            // biasByCircle={biasByCircle}
            // biasByRect={biasByRect}
            // biasByProximity={biasByProximity}
            // preprocessHook={preprocessHook}
          />
        </GeoapifyContext>
      </div>
    </>
  );
};
