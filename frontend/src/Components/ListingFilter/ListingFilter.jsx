import { useState, useEffect } from 'react';
import { AddressAutoComplete } from '../AddressAutoComplete/AddressAutoComplete';
import { Category } from '../TailwindComp/CategorySelect';

export const ListingFilter = (props) => {
  const [filterDistance, setFilterDistance] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);

  const [coordUser, setCoordUser] = useState({
    lat: 47.4007317,
    lon: 8.537520210699132,
  });

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

  const filterEntries = () => {
    const filteredEntries = [...props.unfilteredList]
      .filter((entry) => {
        // entry is a job
        if (entry.title) {
          const d = getDistanceFromLatLonInKm(
            coordUser.lat,
            coordUser.lon,
            entry.member_lat,
            entry.member_lon
          );
          entry['distance'] = d;

          if (!filterDistance || d < filterDistance) {
            if (filterCategory === 'General' || !filterCategory) {
              return entry;
            }
            if (entry.category_name === filterCategory) {
              return entry;
            }
          }
          // entry is a job
        } else {
          const categories = entry.helper_categories;
          let matchCategory = false;

          if (!filterCategory || filterCategory === 'General') {
            return entry;
          }
          categories.forEach((mobile) => {
            if (mobile.name === filterCategory) {
              matchCategory = true;
            }
          });
          if (matchCategory) {
            return entry;
          }
        }

        return '';
      })
      .sort((a, b) => a.distance - b.distance);
    props.filteredList(filteredEntries);
  };

  const getAddress = (data) => {
    return setCoordUser(data);
  };

  const handleDistanceInput = (event) => {
    setFilterDistance(event.target.value);
  };
  const handleCategory = (category) => {
    setFilterCategory(category.label);
  };

  const handleFilterReset = () => {
    setFilterCategory(null);
    setFilterDistance(null);
  };

  useEffect(() => {
    filterEntries();
  }, [filterDistance, filterCategory, coordUser, props.unfilteredList]);

  return (
    <>
      <div>
        <h1 className='font-bold text-2xl'>Filter</h1>
        <div className='distance-filter mb-8'>
          <AddressAutoComplete passAddress={getAddress} />
          <div id='distanceSelection' className='flex justify-between'>
            <div>
              <input
                type='radio'
                id='ch'
                name='distanceOptions'
                value=''
                onChange={handleDistanceInput}
                checked={!filterDistance ? true : false}
              />
              <label htmlFor='ch'>whole CH</label>
            </div>

            <div>
              <input
                type='radio'
                id='10km'
                name='distanceOptions'
                value='10'
                onChange={handleDistanceInput}
              />
              <label htmlFor='10km'>10 km</label>
            </div>

            <div>
              <input
                type='radio'
                id='30km'
                name='distanceOptions'
                value='30'
                onChange={handleDistanceInput}
              />
              <label htmlFor='30km'>30 km</label>
            </div>
            <div>
              <input
                type='radio'
                id='50km'
                name='distanceOptions'
                value='50'
                onChange={handleDistanceInput}
              />
              <label htmlFor='50km'>50 km</label>
            </div>
          </div>
        </div>
        <Category onChange={handleCategory} />
        <button onClick={handleFilterReset} className='btn btn-blue'>
          reset filter
        </button>
      </div>
    </>
  );
};
