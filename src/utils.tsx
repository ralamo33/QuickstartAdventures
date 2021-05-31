import axios from 'axios';
import * as Constants from './constants';

/**
 * Generates a sum equation with variables between 1 and 10
 * @return {[string, number]} equation as a string and the answer as a number
 */
export function randomEquationAndAnswer(): [string, number] {
  const randNum1 = Math.floor(Math.random() * 10);
  const randNum2 = Math.floor(Math.random() * 10);
  const answer = randNum1 + randNum2;
  const equation = `${randNum1.toString()} + ${randNum2.toString()} = `;
  return [equation, answer];
}

/**
 * Make a post request with our api key.
 * @param apiUrl The url the api goes to.
 */
export async function post(apiUrl: string): Promise<void> {
  console.log(apiUrl);
  axios
    .post(
      apiUrl,
      {},
      {
        headers: { 'x-api-key': Constants.API_KEY },
      }
    )
    .then((response) => console.log(response))
    .catch((error) => alert(error));
}
