<p align='center'>
<img src='./client/public/logo192.png'  width='25%'>
</p>
<p align='center'>
<b>Message Web App build using MERN stack</b>
</p>
<p align='center'>
<a href='https://tomper-chat.onrender.com/' target='_blank'>messageapp-harshit1.onrender.com</a>
</p>

---

<p align='center'>
This is the frontend + backend of MessageApp build with MERN stack and hosted with <a href='https://www.render.com/' target='_blank'>Render</a>
</p>

#### 🧾 Description

MessageApp is a chatting application. Its build using MERN stack and uses <a href='https://socket.io/'>socket.io</a> for realtime messaging, online statuses, typing indicators, notifications etc.

#### ✨ Features

1. **Authentication of Users**: Ensure secure registration and login of users.

2. **User Discovery**: Enable users to search for other users for communication.

3. **Group Chat Creation**: Allow users to form group chats.

4. **Admin Control in Group Chats**: Grant administrative rights exclusively to group-chat admins for editing chat details, such as the chat name or managing members.

5. **Voluntary Departure from Group Chats**: Permit users to leave group chats at their discretion.

6. **Real-time Messaging**: Facilitate real-time conversations using Socket.IO for instant message delivery.

7. **Online/Offline Status in Private Chats**: Display the real-time online/offline status of users during private conversations.

8. **Typing Indicators in Real-time**: Provide real-time typing indicators in both private and group chats.

9. **Real-time Chat Notifications**: Offer real-time notifications for private and group chats to keep users updated on new messages and activities.

10. **Responsive Design**: Ensure the application is optimized for all screen sizes, delivering a user-friendly experience across various devices.


#### ⚙ Tools and Technologies used

###### Frontend

1. [React.js](https://reactjs.org/)
2. [Chakra-ui](https://chakra-ui.com/)
3. [React-icons](https://react-icons.github.io/react-icons/)

###### Backend

1. [Node.js](https://nodejs.org/en/)
2. [Express.js](https://expressjs.com/)
3. [MongoDB](https://www.mongodb.com/)
4. [JWT](https://jwt.io/)
5. [Socket.io](https://socket.io/)
6. [Cloudinary](https://cloudinary.com/)
7. [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

#### Installation and setup

1. Clone the repo to your local machine.
2. Install the required dependency for server using :

   ```javascript
   npm install
   ```

3. Install the required dependency for client using :

   ```javascript
   cd client
   npm install
   ```

4. Create a .env file inside the root folder and provide the following environment variables:

   ```env
   PORT=5000
   DB_URI=<mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   JWT_EXPIRE=5d
   COOKIE_EXPIRE=5
   NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloudname>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   FRONTEND_URL=http://localhost:3000
   ```

5. Start the express server using :

   ```javascript
   npm start
   ```

6. Start the react development server using:

   ```javascrip
   cd client
   npm start
   ```

#### 🏎 Creating production built

1. Create a production build react app using the command :

   ```javascript
   cd client
   npm run build
   ```

2. Change the value of following environment variables:

   ```env
   NODE_ENV=production
   ```

<br>
<br>
<br>
