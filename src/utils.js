import axios from 'axios';

// GENETAL UTILS
export const rem = (val) => `${parseInt(val) / 16}rem`;

// QUOTE
export const defaultQuote = {
  id: 'default',
  content:
    'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
  author: 'Ada Lovelace',
};

export async function fetchQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/quotes/random');
    return response.data[0];
  } catch (error) {
    console.error('Error getting a quote', error);
  }
}

export async function updateQuote(setData) {
  try {
    setData(await fetchQuote());
  } catch (error) {
    console.error('Error setting a quote', error);
    setData(defaultQuote);
  }
}

export async function fetchTime() {
  try {
    const response = await axios.get('https://worldtimeapi.org/api/ip');
    return response.data;
  } catch (error) {
    console.error('Error getting time from World Time API.', error);
    return {
      abbreviation: 'ERR',
      datetime: new Date(),
      day_of_week: 0,
      day_of_year: 0,
      timezone: 'Err',
      week_number: 0,
    };
  }
}

export async function fetchIpBase() {
  try {
    const response = await axios.get(`https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_IPBASE_API_KEY}`);
    return response?.data?.data;
  } catch (error) {
    // console.error('Error fetching from Ipbase', error);
    return null;
  }
}

export const getTimeHours = (time) => new Date(time?.datetime || time).getHours();

export const getTimeMinutes = (time) => new Date(time?.datetime || time).getMinutes().toString().padStart(2, '0');

export const getTimeSeconds = (time) => new Date(time?.datetime || time).getSeconds().toString().padStart(2, '0');

export const isNightTime = (time) => {
  const hour = getTimeHours(time);
  if (isNaN(hour)) return;
  if (hour >= 5 && hour < 18) return false;
  return true;
};

export const getTimeOfDayIcon = (time) => (isNightTime(time) ? 'moon' : 'sun');

export const getTimeOfDayString = (time) => {
  const hour = getTimeHours(time);
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  if (hour >= 18 || hour < 5) return 'afternoon';
  return 'afternoon';
};

// THEME RELATED
export const themes = {
  light: {
    font: { hex: '#000000', rgb: 'rgb(0,0,0)', hsl: 'hsl(0, 0%, 0%)' },
    background: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    secondary: { hex: '#303030', rgb: 'rgb(48, 48, 48)', hsl: 'hsl(0, 0%, 19%)' },
    image: {
      desktop: '/images/bg-desktop-image-daytime.jpg',
      tablet: '/images/bg-tablet-image-daytime.jpg',
      mobile: '/images/bg-mobile-image-daytime.jpg',
    },
  },
  dark: {
    font: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    background: { hex: '#000000', rgb: 'rgb(0,0,0)', hsl: 'hsl(0, 0%, 0%)' },
    secondary: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    image: {
      desktop: '/images/bg-desktop-image-nighttime.jpg',
      tablet: '/images/bg-tablet-image-nighttime.jpg',
      mobile: '/images/bg-mobile-image-nighttime.jpg',
    },
  },
};

export const getTheme = (time) => themes[isNightTime(time) ? 'dark' : 'light'];
