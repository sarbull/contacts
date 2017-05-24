const contacts = [
  {
    id: 1,
    name: 'Reginald Gonzalez',
    telephone: '+6333598095'
  },
  {
    id: 2,
    name: 'Evelyn King',
    telephone: '+2431133690'
  },
  {
    id: 3,
    name: 'Lloyd Thompson',
    telephone: '+9203578783'
  }
];

export const getContacts = () => {
  return new Promise((resolve)=> {
    setTimeout((resolve(contacts)), 1000);
  });
};
