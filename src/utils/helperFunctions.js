const generateId = () => {
  return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
};

const generateCardPart = () => {
  return String(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
};

const generateCVV = () => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};


const generateExpiryDate = () => {
  const month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  const year = Math.floor(Math.random() * (30 - 22 + 1)) + 23;
  return `${month.toString().padStart(2, "0")}/${year}`;
};

export const generateCardDetails = (cardName) => {
  const cardData = {
    id: generateId(),
    name: cardName,
    card_number: Array.from({ length: 4 }, generateCardPart),
    cvv: generateCVV(),
    expiry_date: generateExpiryDate(),
  };
  return cardData;
};


export const isValidName=(name)=> {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
}