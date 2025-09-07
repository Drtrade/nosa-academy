import React from 'react';
import TeamHero from '../components/team/TeamHero';
import TeamMembers from '../components/team/TeamMembers';
import Partners from '../components/team/Partners';

const Team = () => {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <TeamMembers />
      <Partners />
    </div>
  );
};

export default Team;