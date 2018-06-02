import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import calendarLogo from '../../img/calendar-logo.svg';
import localeLogo from '../../img/locale-logo.svg';
import locationLogo from '../../img/location-logo.svg';
import rankLogo from '../../img/rank-logo.svg';

const getImageSrc = (className, count) => {
  if (className.includes('profile-row-1')) {
    return (count === 0 && calendarLogo) || (count === 1 && rankLogo);
  }
  return (count === 0 && locationLogo) || (count === 1 && localeLogo);
};

const getItemText = (className, count) => {
  if (className.includes('profile-row-1')) {
    return (count === 0 && 'Registration date') || (count === 1 && 'Rank');
  }
  return (count === 0 && 'Location') || (count === 1 && 'Locale');
};

const ProfileRow = ({ className }) => (
  <div className={className}>
    {_.range(2).map(number => (
      <ProfileItem key={`profile-item-${number + 1}`}>
        <Logo src={getImageSrc(className, number)} />
        {getItemText(className, number)}
      </ProfileItem>
    ))}
  </div>
);

const ProfileItem = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  display: block;
  margin-bottom: 8px;
`;

const StyledProfileRow = styled(ProfileRow)`
  width: 100%;
  height: 100px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export default StyledProfileRow;
