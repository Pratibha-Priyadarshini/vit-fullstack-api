const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FULL_NAME = "pratibha_priyadarshini";
const DOB = "10012005"; // ddmmyyyy
const EMAIL = "pratibha.p2022@vitstudent.ac.in";
const ROLL_NUMBER = "22BCB0056";

const isNumeric = (str) => {
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const alternatingCaps = (str) => {
  let res = "";
  let toggle = true;
  for (let ch of str) {
    res += toggle ? ch.toUpperCase() : ch.toLowerCase();
    toggle = !toggle;
  }
  return res;
};

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let alphaConcat = "";

    data.forEach((item) => {
      if (isNumeric(item)) {
        let num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        alphaConcat += item;
      } else {
        special_characters.push(item);
      }
    });

    let concat_string = alternatingCaps(alphaConcat.split("").reverse().join(""));

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (error) {
    return res.status(500).json({ is_success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
