# VIT Full Stack API:

## Objective:
A REST API built for the VIT Full Stack question paper.  
It accepts an array as input and returns processed results including numbers, alphabets, and special characters.



## Hosted URL:
POST → [API Endpoint](https://vit-fullstack-gjkh0bgpu-pratibha-priyadarshinis-projects.vercel.app/bfhl)



## Tech Stack:
- Node.js
- Express.js
- Vercel (for hosting)



## Request Format:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}



## Response Format:
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
