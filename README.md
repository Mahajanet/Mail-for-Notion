# Mail-for-Notion

#Description
------------
Mail-for-Notion allows user to 1. send messgaes to another user, 2. receive messages from another user and read them. 
1. Send a Message: A user can send a message by specificying the sender, the recipeint, and the message to be sent. At the time of sending the message, the timestamp of the message send is recorded. All properties added as a new entry to Notion-Mail-Database. 
2. Read messages: A user can read a message received from another user. The user can see properties: sender, timestamp, and the message. This is retrived from the Notion-Mail-Database. 

#How to install and run Mail-for-Notion
---------------------------------------
Enter 'npm install' in bash/zsh to install all dependencies. 
Enter 'npm start' to start the program. 


#List of references
-------------------
1. Notion API on Integrations
2. Notion API Property Values
3. Notion API Working with databases
4. Stackoverflow/other sites for lots of debugging
5. Random google searches for syntax whenever I forgot


#What are some future improvements you might make to this program or its code?
------------------------------------------------------------------------------
1. Being able to send the same message to multiple users (both CC and BCC capabilities).
2. Seeing if I can use concurrency to make it faster.
3. Making the command line more user friendly for the user prompt and inputs. 
4. Input validation!
5. Storing messages in a more secure way.
6. Logging for debugging purposes.


#What were some of the product or technical choices you made and why?
--------------------------------------------------------------------
1. I wanted the code to be modular so I organized the codebase based on functionality. 
2. I made the read and send functions ansyc to ensure that the user does not get prompted for a new action before the functions finished executing.
3. In the read function, I added a lot of checks for error handling in order to successfully show the user a message even if it missed a few properties. 
4. I used readline-sync for synchronous user input so that the program waits for user input before proceeding with actions like sending or reading messages.
5. Basic try-catch blocks to handle errors during message sending and retrieval.
6. I used a while loop with a running flag so that the user can continue performing actions (send/read messages) until they choose to exit.