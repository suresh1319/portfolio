import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
// Replace 'your_public_key' with your actual EmailJS public key
export const initEmailJS = () => {
  init('your_public_key');
};
