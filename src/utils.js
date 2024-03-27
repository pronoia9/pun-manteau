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

// TIME
export const defaultTime = {
  abbreviation: 'GMT',
  datetime: new Date(),
  day_of_week: 6,
  day_of_year: 76,
  timezone: 'Europe/London',
  week_number: 11,
};

export async function fetchTime() {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/ip');
    return response.data ? response.data : defaultTime;
  } catch (error) {
    console.error('Error getting time', error);
  }
}

export const defaultIpBase = {
  ip: '91.196.223.134',
  hostname: null,
  type: 'v4',
  range_type: {
    type: 'PUBLIC',
    description: 'Public address',
  },
  connection: {
    asn: 136787,
    organization: 'TEFINCOM S.A.',
    isp: 'Tefincom S.A.',
    range: '91.196.220.0/22',
  },
  location: {
    geonames_id: 101750367,
    latitude: 51.50852966308594,
    longitude: -0.12574000656604767,
    zip: 'WC2N',
    continent: {
      code: 'EU',
      name: 'Europe',
      name_translated: 'Europe',
      geonames_id: 6255148,
      wikidata_id: 'Q46',
    },
    country: {
      alpha2: 'GB',
      alpha3: 'GBR',
      calling_codes: ['+44'],
      currencies: [
        {
          symbol: '£',
          name: 'British Pound Sterling',
          symbol_native: '£',
          decimal_digits: 2,
          rounding: 0,
          code: 'GBP',
          name_plural: 'British pounds sterling',
          type: 'fiat',
        },
      ],
      emoji: ':flag_gb:',
      ioc: 'GBR',
      languages: [
        {
          name: 'English',
          name_native: 'English',
        },
        {
          name: 'Cornish',
          name_native: 'Kernewek',
        },
        {
          name: 'Irish',
          name_native: 'Gaeilge',
        },
        {
          name: 'Gaelic',
          name_native: 'Gaelic',
        },
        {
          name: 'Welsh',
          name_native: 'Cymraeg',
        },
      ],
      name: 'United Kingdom',
      name_translated: 'United Kingdom',
      timezones: ['Europe/London'],
      is_in_european_union: false,
      fips: 'UK',
      geonames_id: 85633159,
      hasc_id: 'GB',
      wikidata_id: 'Q145',
    },
    city: {
      fips: null,
      alpha2: null,
      geonames_id: 101750367,
      hasc_id: null,
      wikidata_id: 'Q84',
      name: 'London',
      name_translated: 'London',
    },
    region: {
      fips: null,
      alpha2: null,
      geonames_id: 1360698645,
      hasc_id: null,
      wikidata_id: null,
      name: 'Greater London',
      name_translated: 'Greater London',
    },
  },
  tlds: ['.uk'],
  timezone: {
    id: 'Europe/London',
    current_time: '2024-03-16T17:51:30+00:00',
    code: 'GMT',
    is_daylight_saving: false,
    gmt_offset: 0,
  },
  security: {
    is_anonymous: null,
    is_datacenter: null,
    is_vpn: null,
    is_bot: null,
    is_abuser: null,
    is_known_attacker: null,
    is_proxy: null,
    is_spam: null,
    is_tor: null,
    proxy_type: null,
    is_icloud_relay: null,
    threat_score: null,
  },
  domains: {
    count: null,
    domains: [],
  },
};

// TODO: Temporarily disabled api calls
export async function fetchIpBase() {
  return defaultIpBase;
  // try {
  //   const response = await axios.get(`https://api.ipbase.com/v2/info?apikey=${import.meta.env.VITE_IPBASE_API_KEY}`);
  //   return response.data.data;
  // } catch (error) {
  //   console.error('Error fetching from Ipbase', error);
  // }
}

export const getTimeHours = (datetime) => new Date(datetime || null).getHours();

export const getTimeMinutes = (datetime) => new Date(datetime || null).getMinutes().toString().padStart(2, '0');

export const getTimeSeconds = (datetime) => new Date(datetime || null).getSeconds().toString().padStart(2, '0');

export const isNightTime = (datetime) => {
  const hour = getTimeHours(datetime);
  if (hour >= 5 && hour < 18) return false;
  if (hour >= 18 && hour < 5) return true;
};

export const getTimeOfDayIcon = (datetime) => (isNightTime(datetime) ? 'moon' : 'sun');

export const getTimeOfDayString = (datetime) => {
  const hour = getTimeHours(datetime);
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
