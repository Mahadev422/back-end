import {readFile} from 'fs/promises';

export const movies_30 = async (req, res) => {
  try {
    const data = await readFile('./data/movies30.json', 'utf8');
    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to read the JSON file' });
  }
};

export const movies_100 = async (req, res) => {
  try {
    const data = await readFile('./data/movies100.json', 'utf8');

    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to read the JSON file' });
  }
};

export const languages = async (req, res) => {
  try {
    const data = await readFile('./data/languages.json', 'utf8');

    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to read the JSON file' });
  }
};

export const countryCode = async (req, res) => {
  try {
    const data = await readFile('./data/countryCode.json', 'utf8');
    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to read the JSON file' });
  }
};
export const currency = async (req, res) => {
  try {
    const data = await readFile('./data/currency.json', 'utf8');
    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Unable to read the JSON file' });
  }
};