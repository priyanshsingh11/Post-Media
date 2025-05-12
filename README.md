his is a simple social media backend built using Node.js, Express, MongoDB, Multer, and EJS, with Tailwind CSS for styling the frontend.

• Features
🔐 User Authentication
Users can register and log in securely. Passwords are hashed using bcrypt, and JWT tokens (stored in cookies) are used for session management.

📝 Create, Edit, and View Posts
Logged-in users can create new posts, edit their own posts, and view posts made by others.

👍 Like/Unlike Posts
Users can like or unlike any post. Like counts are tracked and updated in real-time.

👤 User Profiles
Each user has a dedicated profile page displaying their posts and like history.

🖼️ Profile Picture Upload
Users can upload and update their profile photo. This is handled using Multer, a middleware for handling multipart/form-data.

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose for object modeling

Frontend: EJS templates styled with Tailwind CSS

Authentication: JWT (stored in cookies), bcrypt for password hashing

File Uploads: Multer for profile photo uploads
