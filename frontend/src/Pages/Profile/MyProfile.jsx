import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../Hooks/DataFetching';
import { HelperProfilePage } from './HelperProfile/HelperProfile';
import { MemberProfilePage } from './MemberProfile/MemberProfile';

export const MyProfilePage = (props) => {
  const { profileID } = useParams();
  const userData = JSON.parse(localStorage.getItem('userData'));

  //   useEffect(() => {
  //     if (userData.type === 2) {
  //       getData();
  //     }
  //   });

  return (
    <>{userData.type === 2 ? <HelperProfilePage /> : <MemberProfilePage />}</>
  );
};
