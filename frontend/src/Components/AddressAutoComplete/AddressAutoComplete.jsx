import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

export const AddressAutoComplete = (props) => {
  const geocoderToken = '0dda38a2ffe34c53a35e8a91a1fd6b75';

  function onPlaceSelect(location) {
    if (!location) {
      props.passAddress({
        lat: 47.4007317,
        lon: 8.537520210699132,
      });
    } else {
      props.passAddress(location.properties);
    }
  }

  function onSuggectionChange(value) {
    // console.log(value);
  }

  return (
    <>
      <div>
        <GeoapifyContext apiKey={geocoderToken}>
          <GeoapifyGeocoderAutocomplete
            placeholder="Enter address here"
            // type={['amenity']}
            skipIcons={true}
            // lang={language}
            // position={`${(coordUser.lat, coordUser.lon)}`}
            // value="Heinrichstrasse 200, 8005 Zürich"
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
