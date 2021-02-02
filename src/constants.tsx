export const BUCKET_URL = 'https://remember-the-ralamo-images.s3.amazonaws.com/';

export const DESCRIPTION = 'A super simple TableTop RPG';

export const PLAYTEST_BUTTON_TEXT = 'Become a Playtester!';
export const CONTEST_BUTTON_TEXT = 'Naming Contest';
export const SUBSCRIPE_BUTTON_TEXT = 'Subscribe';

export const PLAYTEST_CARD_TEXT = ['Create your character in 5 minutes',
  'Only 10 pages of rules', 'Perfect for your friends that hate reading!'];
export const CONTEST_CARD_TEXT = ['Gather and upgrade cards to improve '
  + 'your character!', 'Excited?', 'Win a Cash Prize!'];
export const SUBSCRIBE_CARD_TEXT = ['Explore your identity, talents and maneuvers',
  'Intrigued?', 'Learn more!'];

export const PLAYTEST_MODAL_TITLE = 'Try it for yourself!';
export const CONTEST_MODAL_TITLE = 'Naming Contest: Beat "Quickstart Adventures"';
export const SUBSCRIBE_MODAL_TITLE = 'Where shall we send the ravens?';

const API_URL = 'https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod';

export const PLAYTEST_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Playtest';
export const CONTEST_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Contest';
export const SUBSCRIBE_TOPIC_ARN = 'arn:aws:sns:us-east-1:451835830300:Subscribe';

export const PLAYTEST_API = `${API_URL}/notify?TopicArn=${PLAYTEST_TOPIC_ARN}`;
export const CONTEST_API = `${API_URL}/notify?TopicArn=${CONTEST_TOPIC_ARN}`;
export const SUBSCRIBE_API = `${API_URL}/notify?TopicArn=${SUBSCRIBE_TOPIC_ARN}`;

export const PLAYTEST_API_KEY = '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';
export const CONTEST_API_KEY = '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';
export const SUBSCRIBE_API_KEY = '3ILD8V8RHmg10Su7VXUl3JL9wvFOfnS7QZf26At7';

export const REMOVE_EMAIL_API = 'https://9oeq1w1vcf.execute-api.us-east-1.amazonaws.com/prod/remove';
export const REMOVE_EMAIL_KEY = 'myhpVktYdn6c1lyZ2iSrf13plIodKqab3cbQi1DS';

export const ADD_EMAIL_API = '';
export const ADD_EMAIL_KEY = '';

export const BLUE = '#ccffff';
