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
export const defaultTime = {
  abbreviation: 'EDT',
  client_ip: '185.199.102.104',
  datetime: '2024-03-16T13:44:31.289554-04:00',
  day_of_week: 6,
  day_of_year: 76,
  dst: true,
  dst_from: '2024-03-10T07:00:00+00:00',
  dst_offset: 3600,
  dst_until: '2024-11-03T06:00:00+00:00',
  raw_offset: -18000,
  timezone: 'America/New_York',
  unixtime: 1710611071,
  utc_datetime: '2024-03-16T17:44:31.289554+00:00',
  utc_offset: '-04:00',
  week_number: 11,
};

// TODO: Temporarily disabled api calls
export async function fetchTime() {
  return defaultTime;
  // try {
  //   const response = await axios.get('http://worldtimeapi.org/api/ip');
  //   return response.data;
  // } catch (error) {
  //   console.error('Error getting time', error);
  // }
}

export const defaultIpBase = {
  ip: '1.1.1.1',
  hostname: null,
  type: 'v4',
  range_type: {
    type: 'PUBLIC',
    description: 'Public address',
  },
  connection: {
    asn: 13335,
    organization: 'Cloudflare, Inc.',
    isp: 'Cloudflare, Inc',
    range: '1.1.1.0/24',
  },
  location: {
    geonames_id: 85922347,
    latitude: 37.33938980102539,
    longitude: -121.89495849609375,
    zip: '95101',
    continent: {
      code: 6255149,
      name: 'North America',
      name_translated: 'North America',
      geonames_id: 6255149,
      wikidata_id: 'Q49',
    },
    country: {
      alpha2: 'US',
      alpha3: 'USA',
      calling_codes: ['+1'],
      currencies: [
        {
          symbol: '$',
          name: 'US Dollar',
          symbol_native: '$',
          decimal_digits: 2,
          rounding: 0,
          code: 'USD',
          name_plural: 'US dollars',
          type: 'fiat',
        },
      ],
      emoji: ':flag_us:',
      ioc: 'USA',
      languages: [
        {
          name: 'English',
          name_native: 'English',
        },
      ],
      name: 'United States',
      name_translated: 'United States',
      timezones: [
        'America/New_York',
        'America/Detroit',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Indiana/Indianapolis',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Vevay',
        'America/Chicago',
        'America/Indiana/Tell_City',
        'America/Indiana/Knox',
        'America/Menominee',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/North_Dakota/Beulah',
        'America/Denver',
        'America/Boise',
        'America/Phoenix',
        'America/Los_Angeles',
        'America/Anchorage',
        'America/Juneau',
        'America/Sitka',
        'America/Metlakatla',
        'America/Yakutat',
        'America/Nome',
        'America/Adak',
        'Pacific/Honolulu',
      ],
      is_in_european_union: false,
      fips: 'US',
      geonames_id: 85633793,
      hasc_id: 'US',
      wikidata_id: 'Q30',
    },
    city: {
      fips: '0668000',
      alpha2: null,
      geonames_id: 85922347,
      hasc_id: null,
      wikidata_id: 'Q16553',
      name: 'San Jose',
      name_translated: 'San Jose',
    },
    region: {
      fips: 'US06',
      alpha2: 'US-CA',
      geonames_id: 85688637,
      hasc_id: 'US.CA',
      wikidata_id: 'Q99',
      name: 'California',
      name_translated: 'California',
    },
  },
  tlds: ['.us'],
  timezone: {
    id: 'America/Los_Angeles',
    current_time: '2024-03-16T10:41:38-07:00',
    code: 'PDT',
    is_daylight_saving: true,
    gmt_offset: -25200,
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

export const getTimeHours = (time) => (time?.datetime ? new Date(time?.datetime)?.getHours() : '00');

export const getTimeMinutes = (time) => (time?.datetime ? new Date(time?.datetime)?.getMinutes().toString().padStart(2, '0') : '00');

export const getTimeSeconds = (time) => (time?.datetime ? new Date(time?.datetime)?.getSeconds().toString().padStart(2, '0') : '00');

export const isNightTime = (time) => {
  const hour = getTimeHours(time);
  if (hour >= 5 && hour < 18) return false;
  if (hour >= 18 && hour < 5) return true;
};

export const getTimeOfDayIcon = (time) => (isNightTime(time) ? 'moon' : 'sun');

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
