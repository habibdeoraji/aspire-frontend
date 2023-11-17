import { generateCardDetails } from "../utils/helperFunctions";

const initialData = [
    {
      id: 80915373,
      name: "Mark Henry",
      card_number: ["4293", "6080", "2835", "4683"],
      cvv: 889,
      expiry_date: "03/30",
      card_frozen_status: false,
    },
    {
      id: 30618331,
      name: "Md Habib",
      card_number: ["1267", "2755", "7931", "7744"],
      cvv: 189,
      expiry_date: "05/28",
      card_frozen_status: false,
    },
    {
      id: 48423408,
      name: "John Doe",
      card_number: ["8407", "3348", "3737", "6138"],
      cvv: 112,
      expiry_date: "12/30",
      card_frozen_status: true,
    },
  ];
  

// Helper function to fetch data from localStorage
const fetchData = () => {
    const data = localStorage.getItem('cards');
    return data ? JSON.parse(data) : null;
};

// Helper function to save data to localStorage
const saveData = (data) => {
    console.log('data', data);
    localStorage.setItem('cards', JSON.stringify(data));
};

// Initialize data
export const initializeData = () => {
    if (!fetchData()) {
        saveData(initialData);
    }
};

// Get all cards
export const getCards = () => {
    return Promise.resolve(fetchData());
};

// Add a new card
export const addCard = (cardName) => {
    const data = fetchData();
    const newCard = generateCardDetails(cardName);
    const newData = [...data, newCard];
    saveData(newData);
    return Promise.resolve(newCard);
};

// Update an existing card
export const updateCard = (cards) => {
    saveData(cards);
    return Promise.resolve(cards);
};

// Delete a card
export const deleteCard = (id) => {
    const data = fetchData();
    const newData = data.filter(c => c.id !== id);
    saveData(newData);
    return Promise.resolve(id);
};
