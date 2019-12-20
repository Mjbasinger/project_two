
Description: The Kaiju Tracker app will be a two model setup for users and their data on currently tracked kaiju. The app will allow users to see specific kaiju being studied as well as data like name, nick names, heigh and/or length, approx weight, first spotted and potentially last known location. 


User Story:

-Users should be able to go to the website and a home page. 
- users should be able to see list of kaiju (index). 
-Users should be able to register for website and input name and email address and create username.
-users should be able to update profile with picture (potentially stretch goal), bio, see list of kaiju, and tracked kaiju (also potential stretch goal)
-users should be able to add new kaiju with appropriate information that adheres to schema and its requirements.
-users should be able to edit and update kaiju pages and add data where necessary
-users should be able to sign in and out of page as desired. 
-users should be able to got back home at any point

 
 and, at a minumum, view kaiju index. Users should also be able to register as a user and add/edit/delet shark information. 


Will be one to many (sharks being created by a single user), potentially many to many if sharks can be tracked by multiple users. 

user model will contain id, name, password, username
shark model will contain id/tag, name, nickname, height, approx weight, first seen, last seen (potential use of google API), and notable info. 