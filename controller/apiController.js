import { readFile } from "fs/promises";
import fs from 'fs';
import path from 'path';

export const movies_30 = async (req, res) => {
  try {
    const data = await readFile("./data/movies30.json", "utf8");
    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Unable to read the JSON file" });
  }
};

export const movies_100 = async (req, res) => {
  try {
    const data = await readFile("./data/movies100.json", "utf8");

    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Unable to read the JSON file" });
  }
};

export const languages = async (req, res) => {
  try {
    const data = await readFile("./data/languages.json", "utf8");

    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Unable to read the JSON file" });
  }
};

export const countryCode = async (req, res) => {
  try {
    const data = await readFile("./data/countryCode.json", "utf8");
    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Unable to read the JSON file" });
  }
};

export const currency = async (req, res) => {
  try {
    const data = await readFile("./data/currency.json", "utf8");
    const movies = JSON.parse(data);

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Unable to read the JSON file" });
  }
};

export const feedback = async (req, res) => {
  const { feedback, rating } = req.body;

  const newEntry = {
    feedback,
    rating,
    timestamp: new Date().toISOString(),
  };

  const filePath = path.resolve('data/FEEDBACK_FILE.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading file.' });

    let feedbacks = [];
    try {
      feedbacks = JSON.parse(data);
    } catch {
      return res.status(500).json({ message: 'Corrupted JSON file.' });
    }

    feedbacks.push(newEntry);

    fs.writeFile(filePath, JSON.stringify(feedbacks, null, 2), (err) => {
      if (err) return res.status(500).json({ message: 'Write error.' });
      res.status(200).json({ message: 'Feedback saved!' });
    });
  });
};

export const getFeedbacks = (req, res) => {
  const filePath = path.resolve('data/FEEDBACK_FILE.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ message: 'Error reading feedback file.', error: err.message });
    }

    try {
      const feedbacks = JSON.parse(data);
      res.status(200).json(feedbacks);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).json({ message: 'Corrupted feedback file.' });
    }
  });
};

