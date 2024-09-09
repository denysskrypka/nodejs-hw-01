import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    throw error;
  }
};

(async () => {
  console.log(await getAllContacts());
})();
