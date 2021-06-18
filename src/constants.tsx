import * as Yup from 'yup';

export const BUCKET_URL =
  'https://remember-the-ralamo-images.s3.amazonaws.com/';

export const SUBTITLE = 'Crowdstart Countdown';

export const BUY_BUTTON_TEXT = 'Buy Now';
export const FREE_BUTTON_TEXT = 'Free Adventure';
export const SUBSCRIPE_BUTTON_TEXT = 'Subscribe';

export const BUY_CARD_TEXT = [
  'Get started easily. This game is designed for everyone!',
  'Create lasting memories with thousands of unique characters.',
  'A D20 RPG powered by tarot cards.',
  'The paid version is coming soon. I refuse to release a rushed product.',
];
export const SUBSCRIBE_CARD_TEXT = [
  'Follow me on Instagram and subscribe to our email list.',
  "Have a question? Comment in my most recent post! I'm obsessive about responding to the commuity.",
  'Send me a picture or video of your sessions. Lets get Instafamous together!',
];
export const STARTER_CARD_TEXT = [
  'Convert your friends into RPG fanatics with a 2 hour roleplay experience.',
  'A super simple ruleset you can easily explain.',
  'Everything you need to share your love of roleplaying games.',
];
export const FREE_CARD_TEXT = [
  'Intuitive and concise ruleset.',
  'Support homebrew content.',
  '5 minutes for an epic character.',
  '10 minutes to teach.',
  'Thousands of character possbilities.',
];
export const LANDING_CARD_TEXT = [
  'Never worry about how to introduce RPGs to new players again.',
  'FREE 2 hour experience to convert your friends into roleplay fanatics.',
  'Test whether your friends will LOVE this game as much as I do.',
  'Includes a 2 hour mini adventure and all required character materials.',
];

export const BUY_MODAL_TITLE = 'Your friends will Love it!';
export const FREE_MODAL_TITLE = 'Convert the nonbelievers!';
export const SUBSCRIBE_MODAL_TITLE = 'Never miss a thing.';

const API_URL = 'https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod';

export const BUY_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Playtest';
export const FREE_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Playtest';
export const SUBSCRIBE_TOPIC_ARN =
  'arn:aws:sns:us-east-1:451835830300:Subscribe';
export const CREATE_MONSTER_TOPIC_ARN =
  'arn:aws:sns:us-east-1:451835830300:CreateMonster';
export const LANDING_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Landing';

export const BUY_API = `${API_URL}/notify?TopicArn=${BUY_TOPIC_ARN}`;
export const FREE_API = `${API_URL}/notify?TopicArn=${FREE_TOPIC_ARN}`;
export const SUBSCRIBE_API = `${API_URL}/notify?TopicArn=${SUBSCRIBE_TOPIC_ARN}`;
export const CREATE_MONSTER_API = `${API_URL}/notify?TopicArn=${CREATE_MONSTER_TOPIC_ARN}`;
export const LANDING_API = `${API_URL}/notify?TopicArn=${LANDING_TOPIC_ARN}`;

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

export const STRING_VALIDATION = Yup.string()
  .required('Required')
  .matches(new RegExp('^[a-zA-Z0-9 @.]+$'), 'Invalid characters');
