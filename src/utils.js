import axios from 'axios';

// GENETAL UTILS
export const lowerCase = (t) => `${t}`.toLowerCase();

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

// TIME
export const defaultTime = null; // TODO

export async function fetchTime() {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/ip');
    return response.data;
  } catch (error) {
    console.error('Error getting time', error);
  }
}

export const defaultIpBase = { location: { city: { name: 'London' }, country: { alpha2: 'UK' } } };

export async function fetchIpBase() {
  try {
    const response = await axios.get(`https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_IPBASE_API_KEY}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching from Ipbase', error);
  }
}

export const getTimeHours = (time) => (time?.datetime ? new Date(time?.datetime)?.getHours() : '00');

export const getTimeMinutes = (time) => (time?.datetime ? new Date(time?.datetime)?.getMinutes().toString().padStart(2, '0') : '00');

export const getTimeSeconds = (time) => (time?.datetime ? new Date(time?.datetime)?.getSeconds().toString().padStart(2, '0') : '00');

export const isNightTime = (time) => {
  const hour = getTimeHours(time);
  if (hour >= 5 && hour < 18) return false;
  if (hour >= 18 && hour < 5) return true;
};

export const getTimeOfDayIcon = (time) => isNightTime(time) ? 'moon' : 'sun';

export const getTimeOfDayString = (time) => {
  const hour = getTimeHours(time);
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  if (hour >= 18 && hour < 5) return 'afternoon';
  return 'ERR';
};

// THEME RELATED
export const themes = {
  light: {
    font: { hex: '#000000', rgb: 'rgb(0,0,0)', hsl: 'hsl(0, 0%, 0%)' },
    background: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    image: {
      desktop: '/images/bg-desktop-image-daytime.jpg',
      tablet: '/images/bg-tablet-image-daytime.jpg',
      mobile: '/images/bg-mobile-image-daytime.jpg',
    },
  },
  dark: {
    font: { hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', hsl: 'hsl(0, 0%, 100%)' },
    background: { hex: '#000000', rgb: 'rgb(0,0,0)', hsl: 'hsl(0, 0%, 0%)' },
    image: {
      desktop: '/images/bg-desktop-image-nighttime.jpg',
      tablet: '/images/bg-tablet-image-nighttime.jpg',
      mobile: '/images/bg-mobile-image-nighttime.jpg',
    },
  },
};

export const getTheme = (time) => themes[isNightTime(time) ? 'dark' : 'light'];
