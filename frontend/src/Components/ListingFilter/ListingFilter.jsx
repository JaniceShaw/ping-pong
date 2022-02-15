import { useState, useEffect } from 'react';
import { AddressAutoComplete } from '../AddressAutoComplete/AddressAutoComplete';
import { Category } from '../TailwindComp/CategorySelectJob';
import './style.scss';
import Moment from 'moment';

export const ListingFilter = (props) => {
  const [filterDistance, setFilterDistance] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);
  const user = JSON.parse(localStorage.getItem('userData'));

  const [coordUser, setCoordUser] = useState({
    lat: user.lat,
    lon: user.lon,
  });

  const distanceOptions = [10, 30, 50];

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
        // set distance to every entry like job or helper
        const d = getDistanceFromLatLonInKm(
          coordUser.lat,
          coordUser.lon,
          entry.member_lat || entry.lat,
          entry.member_lon || entry.lon
        );
        entry['distance'] = d;

        let categories = [];

        // check what kind of entry it is [Job OR Helper]
        if (entry.helper_categories) {
          categories = Array.from(
            entry.helper_categories,
            (category) => category.name
          );
        } else {
          categories = Array.from([entry.category_name]);
        }

        let matchCategory = false;

        if (!filterDistance || d < filterDistance) {
          if (!filterCategory || filterCategory === 'General') {
            return entry;
          }
          categories.forEach((category) => {
            if (category === filterCategory) {
              matchCategory = true;
            }
          });
          if (matchCategory) {
            return entry;
          }
        }
        return '';
      })
      .sort((a, b) => {
        if (a.created) {
          return (
            new Moment(b.created).format('YYYYMMDD') -
            new Moment(a.created).format('YYYYMMDD')
          );
        } else {
          return a.distance - b.distance;
        }
      });
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
      <div
        className={`filter-container top-8 w-full bg-white transition-all ease-in duration-200 shadow-md absolute  rounded-b-lg ${
          !props.showFilter ? '-translate-y-full' : ''
        }`}
      >
        <div className='location-filter filter-block'>
          <p className='filter_title'>Location</p>
          <AddressAutoComplete passAddress={getAddress} />
        </div>
        <div className='distance-filter filter-block'>
          <p className='filter_title'>Radius</p>
          <div id='distanceSelection'>
            <div className='radio-option'>
              <input
                type='radio'
                id='ch'
                name='distanceOptions'
                value=''
                onChange={handleDistanceInput}
                checked={!filterDistance ? true : false}
              />
              <label htmlFor='ch'>entire CH</label>
            </div>

            {distanceOptions.map((distanceOption, i) => {
              return (
                <div className='radio-option' key={i}>
                  <input
                    type='radio'
                    id={`${distanceOption} km`}
                    name='distanceOptions'
                    value={`${distanceOption}`}
                    onChange={handleDistanceInput}
                  />
                  <label htmlFor={`${distanceOption}`}>
                    {`${distanceOption}`} km
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className='filter-block'>
          <p className='filter_title'>Category</p>
          <Category
            onChange={handleCategory}
            selectedCategory={filterCategory}
          />
        </div>
        <div className='filter-block flex justify-center'>
          <button onClick={handleFilterReset} className='btn min-h-8 h-8'>
            reset filter
          </button>
        </div>
      </div>
    </>
  );
};
