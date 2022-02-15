import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import './style.scss';
import { useEffect, useState } from 'react';
import { getData } from '../../Hooks/DataFetching';

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
    setUser(JSON.parse(localStorage.getItem('userData')));
    // getData('user/helper/me/', setUser, setError);
  }, [setUser]);

  return (
    <>
      <div className=''>
        <p>{error}</p>
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
            // position={`${(user.lat, user.lon)}`}
            // position={position}
            // countryCodes={countryCodes}
            // filterByCircle={filterByCircle}
            // filterByRect={filterByRect}
            biasByLocation={`${(user.lat, user.lon)}`}
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
