import React from 'react';
import member12Photo from '../images/img-6.jpg';
import member13Photo from '../images/img-7.jpg';
import member14Photo from '../images/img-8.jpg';
import member15Photo from '../images/img-3.jpg';
import member16Photo from '../images/img-5.jpg';
import member17Photo from '../images/img-9.jpg';
import member18Photo from '../images/img-2.jpg';
import member11Photo from '../images/img-1.jpg';

const Member = () => {
  const members = [
    {
      id: 1,
      name: 'Member 1',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo:member11Photo,
    },
    {
      id: 2,
      name: 'Member 2',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo:member12Photo,
    },
    {
      id: 3,
      name: 'Member 3',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo:member13Photo,
    },
    {
      id: 4,
      name: 'Member 4',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo:member14Photo,
    },
    {
      id: 5,
      name: 'Member 5',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo:member15Photo,
    },
    {
      id: 6,
      name: 'Member 6',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo:member16Photo,
    },
    {
      id: 7,
      name: 'Member 7',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo: member17Photo,
    },
    {
      id: 8,
      name: 'Member 8',
      education: 'Education 1',
      researchInterest: 'Research Interest...',
      photo:member18Photo,
    },
  ];

  return (
    <div>
      <br /><br />
      <p>Paragraph explaining about the members...</p>
      <div>
        {members.map((member) => (
          <div key={member.id}>
            <img src={member.photo} alt={member.name} className='IFMASA-Leadership-photo' />
            <h3 className='IFMASA-Leadership-subtitle'>{member.name}</h3>
            <p>Education: {member.education}</p>
            <p>Research Interest: {member.researchInterest}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
