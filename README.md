<img width="1913" height="1004" alt="Screenshot 2025-08-29 114002" src="https://github.com/user-attachments/assets/406d4f63-950b-4598-b407-01a4df090729" />

# VIT Full Stack API:

## Objective:
A REST API built for the VIT Full Stack question paper.  
It accepts an array as input and returns processed results including numbers, alphabets, and special characters.



## Hosted URL:
POST → [API Endpoint](https://vit-fullstack-gjkh0bgpu-pratibha-priyadarshinis-projects.vercel.app/bfhl) (verify through POSTMAN)



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
