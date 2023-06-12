import React from 'react';


const Member = () => {
  const members = [
    {
      id: 1,
      name: 'Member 1',
      education: 'Education 1',
      researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
      photo: './images/img-1.jpg',
    },
    {
        id: 2,
        name: 'Member 2',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-9.jpg',
      },
      {
        id: 3,
        name: 'Member 3',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-8.jpg',
      },
      {
        id: 4,
        name: 'Member 4',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-7.jpg',
      },
      {
        id: 5,
        name: 'Member 5',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-6.jpg',
      },
      {
        id: 6,
        name: 'Member 6',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-5.jpg',
      },
      {
        id: 7,
        name: 'Member 7',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-4.jpg',
      },
      {
        id: 8,
        name: 'Member 8',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-3.jpg',
      },
      {
        id: 9,
        name: 'Member 9',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest ',
        photo: './images/img-2.jpg',
      },
      {
        id: 10,
        name: 'Member 10',
        education: 'Education 1',
        researchInterest: 'Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest Research Interest  ',
        photo: './images/img-1.jpg',
      },
  ];

  return (
    <div>
      <p>Paragraph explaining about the members...Paragraph explaining about the members...Paragraph explaining about the members...Paragraph explaining about the members...Paragraph explaining about the members...Paragraph explaining about the members...Paragraph explaining about the members...Paragraph explaining about the members...Paragraph explaining about the members...</p>
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
