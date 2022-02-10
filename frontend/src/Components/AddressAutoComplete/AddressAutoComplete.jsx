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
      <div className='flex justify-between'>
        <p>location</p>
        <GeoapifyContext apiKey={geocoderToken}>
          <GeoapifyGeocoderAutocomplete
            placeholder='Enter address here'
            // type={['amenity']}
            skipIcons={true}
            // lang={language}
            // position={`${(coordUser.lat, coordUser.lon)}`}
            value={`${user.street}, ${user.zip} ${user.city}`}
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
            // position={position}
            // countryCodes={countryCodes}
            filterByCountryCode={['ch']}
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
