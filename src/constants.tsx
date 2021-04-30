export const BUCKET_URL =
  'https://remember-the-ralamo-images.s3.amazonaws.com/';

export const SUBTITLE = 'Crowdstart Countdown';

export const BUY_BUTTON_TEXT = 'Buy Now';
export const FREE_BUTTON_TEXT = 'Claim Free Tier';
export const SUBSCRIPE_BUTTON_TEXT = 'Subscribe';

export const BUY_CARD_TEXT = [
  'A fantasy TTRPG you can start in 10 minutes.',
  'Grow your party with a roleplaying game designed for newcomers.',
  'Core Rules, Character Sheet, and Spellbook are free.',
  'Buy Now to recieve the full set of Power Cards.',
];
export const SUBSCRIBE_CARD_TEXT = [
  'Online Monster Maker: May',
  'Share and rate Monsters: July',
  'Create, share and rate Homebrew Rules: September',
  'Subscribe to keep up with our improvements!',
];
export const FREE_CARD_TEXT = [
  'Intuitive and concise ruleset.',
  'Support homebrew content.',
  '5 minutes for an epic character.',
  '10 minutes to teach.',
  'Thousands of character possbilities.',
];

export const BUY_MODAL_TITLE = 'Your Friends Will Want to Play';
export const FREE_MODAL_TITLE = 'Everything you need to play with friends!';
export const SUBSCRIBE_MODAL_TITLE = 'Where shall we send the ravens?';

const API_URL = 'https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod';

export const BUY_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Playtest';
export const FREE_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Playtest';
export const SUBSCRIBE_TOPIC_ARN =
  'arn:aws:sns:us-east-1:451835830300:Subscribe';
export const CREATE_MONSTER_TOPIC_ARN =
  'arn:aws:sns:us-east-1:451835830300:CreateMonster';

export const BUY_API = `${API_URL}/notify?TopicArn=${BUY_TOPIC_ARN}`;
export const FREE_API = `${API_URL}/notify?TopicArn=${FREE_TOPIC_ARN}`;
export const SUBSCRIBE_API = `${API_URL}/notify?TopicArn=${SUBSCRIBE_TOPIC_ARN}`;
export const CREATE_MONSTER_API = `${API_URL}/notify?TopicArn=${CREATE_MONSTER_TOPIC_ARN}`;

export const API_KEY = '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';
export const BUY_API_KEY = '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';
export const FREE_API_KEY = '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';
export const SUBSCRIBE_API_KEY = '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';
export const CREATE_MONSTER_API_KEY =
  '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';

export const REMOVE_EMAIL_API =
  'https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod/remove';
export const REMOVE_EMAIL_KEY = 'myhpVktYdn6c1lyZ2iSrf13plIodKqab3cbQi1DS';

export const ADD_EMAIL_API = '';
export const ADD_EMAIL_KEY = '';

export const OLD_BLUE = '#ccffff';
export const BLUE = '#0088cc';
export const YELLOW = '#ffcc00';
export const RED = '#800000';
export const PURPLE = '#cc00cc';
export const ORANGE = 'orange';
export const WHITE = '#f2f2f2';
