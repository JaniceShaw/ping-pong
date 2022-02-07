import { useState, useEffect } from 'react';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
// import { HelperCard } from '../../Components/BigCards/HelperCard';

export const MapPage = () => {
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [filterDistance, setFilterDistance] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);

  const [coordUser, setCoordUser] = useState({
    lat: 47.4007317,
    lon: 8.537520210699132,
  });
  const categoriesArray = [
    { title: 'IT' },
    { title: 'Mechanic' },
    { title: 'Plumber' },
    { title: 'Transport' },
  ];
  const jobsArray = [
    { title: 'job 1', lat: 47.4, lon: 8.4, category: categoriesArray[0].title },
    {
      title: 'job 2',
      lat: 47.45,
      lon: 8.5,
      category: categoriesArray[1].title,
    },
    { title: 'job 3', lat: 47.3, lon: 8.5, category: categoriesArray[2].title },
    { title: 'job 4', lat: 47.3, lon: 8.2, category: categoriesArray[3].title },
    {
      title: 'job 5',
      lat: 47.45,
      lon: 9,
      category: categoriesArray[1].title,
    },
  ];

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const deg2rad = (deg) => deg * (Math.PI / 180);

    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const geocoderToken = '0dda38a2ffe34c53a35e8a91a1fd6b75';

  function onPlaceSelect(location) {
    if (location) {
      setCoordUser(location.properties);
      filterEntries();
    }
    console.log(location.properties);
  }

  function onSuggectionChange(value) {
    // console.log(value);
  }

  function preprocessHook(value) {
    console.log(value);
    return `${value}, Munich, Germany`;
  }

  const filterEntries = () => {
    const initialEntriesList = [...jobsArray];
    setFilteredEntries(
      initialEntriesList
        .filter((job) => {
          const d = getDistanceFromLatLonInKm(
            coordUser.lat,
            coordUser.lon,
            job.lat,
            job.lon
          );
          job['distance'] = d;
          if (!filterDistance || d < filterDistance) {
            if (!filterCategory) {
              return job;
            }
            if (job.category === filterCategory) {
              return job;
            }
          }
          return '';
        })
        .sort((a, b) => a.distance - b.distance)
    );
  };

  const handleDistanceInput = (event) => {
    setFilterDistance(event.target.value);
  };
  const handleCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleFilterReset = () => {
    setFilterCategory(null);
    setFilterDistance(null);
  };

  useEffect(() => {
    filterEntries();
  }, [filterDistance, filterCategory, coordUser]);

  return (
    <>
      <div>
        <h1 className="font-extrabold text-3xl uppercase">Search</h1>
        <GeoapifyContext apiKey={geocoderToken}>
          <GeoapifyGeocoderAutocomplete
            placeholder="Enter address here"
            type={['amenity']}
            skipIcons={true}
            // lang={language}
            position={`${(coordUser.lat, coordUser.lon)}`}
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
            preprocessHook={preprocessHook}
          />
        </GeoapifyContext>
        <p>
          {!filteredEntries
            ? 'no jobs found here'
            : `${filteredEntries.length} jobs found`}
        </p>
        <button onClick={handleFilterReset} className="btn btn-blue">
          reset filter
        </button>
        <div id="distanceSelection">
          <input
            type="radio"
            id="ch"
            name="distanceOptions"
            value=""
            onChange={handleDistanceInput}
            checked={!filterDistance ? true : false}
          />
          <label htmlFor="ch">whole CH</label>

          <input
            type="radio"
            id="10km"
            name="distanceOptions"
            value="10"
            onChange={handleDistanceInput}
          />
          <label htmlFor="10km">10 km</label>
          <input
            type="radio"
            id="30km"
            name="distanceOptions"
            value="30"
            onChange={handleDistanceInput}
          />
          <label htmlFor="30km">30 km</label>
          <input
            type="radio"
            id="50km"
            name="distanceOptions"
            value="50"
            onChange={handleDistanceInput}
          />
          <label htmlFor="50km">50 km</label>
        </div>
        <div id="categorySelection">
          <label htmlFor="cat-select">Category</label>

          <select
            name="categories"
            id="cat-select"
            onChange={handleCategory}
            value={!filterCategory ? '' : filterCategory}
          >
            <option value="">all categories</option>
            {categoriesArray.map((category, i) => {
              return (
                <option key={i} value={category.title}>
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>

        {filteredEntries.map((job, i) => {
          return (
            <div key={i} className="border-2 border-blue-400 mb-6">
              <h2 className="font-bold">{job.title}</h2>
              <h2 className="">{job.category}</h2>
              <p>{`distance ${job.distance.toFixed(1)} km`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
