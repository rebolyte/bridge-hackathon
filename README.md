# Bridge 

App built for Austin Diversity Hackathon 2017. **Recipient of the prize for best UI/UX!**

The basic idea is a location-based chat app. So if two people are sitting in the same coffee shop (or anywhere within 100 meters) and have the app open, it will alert them saying "Hey, there's someone nearby! Want to chat?" They get paired to chat anonymously for a while, and then encouraged to meet in person. 

This was for a diversity hackathon, so the secret sauce here is that they will be paired with people as different as possible from them, but with shared interests. To facilitate this, each user profile has two parts: private info for matching based on greatest difference, and a public list of interests.

The aim is to get users to talk to people they might not usually think they'd get along with. We start people off talking about things they have in common (say, soccer and coding), and then be surprised that they're so different when they meet in person (e.g., "I had no idea I was talking to a woman from Korea"), thus _expanding their horizons._ ;)


### Getting it running

Backend:  
https://github.com/b-rays/nomadjs-chat-server  
$ npm i  
$ node app.js  

Frontend:  
https://github.com/rebolyte/bridge-hackathon  
$ git checkout platypus  
$ cd perspectivequasar  
$ npm i  
$ npm run dev  
