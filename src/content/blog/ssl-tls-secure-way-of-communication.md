---
title: "SSL/TLS, the secure way of communication"
description: 'The secure technique of sending the message between two host.'
pubDate: 'Feb 9 2025'
# updatedDate: 'Jan 3 2024'
heroImage: "https://whc.ca/wp-content/uploads/blog_15418_large.jpg"
---

In a communication over internet, what are things we need to know to trust that the the message?

- **Authenticity:** Is the information is actually sent by the person who is supposed to be, (eg. can maybe the message is sent by someone else)
- **Integrity:** The message is not modified in between. (eg. maybe someone did the man in the middle attack and malfunctioned the data). 
- **Confidentaiallity:** The message is only accessed by you not anyone else, (eg. your secret code that can launch the mars mission, you don't want to share that with anyone except the crew members right).

#### How can we solve these ? 
Solving each problem, requires diffrent techniques…
##### **Certificate--** solves the Authenticity problem 
##### **Encryption--** 
Converting plain text to coded form (cipher text). 
we are using simple algorithm to understand encryction. 
**our encryption key: left shift charatcher by K place and mod with 26.**
(example - K=3, then,   a -> d, b -> e, z -> c) 
```
    ORIGINAL MESSAGE: DEMO 
    AFTER ENCRYPTION: DEMO -> GHPR
    SEND : GHPR
    .
    .
    RECIEVE: GHPR
    AFTER DECRYPTION: GHPR -> DEMO
    ORIGINAL MESSAGE: DEMO 
```

#### Types of encryption --
In the process of decryption we can understand the difference between the symmetric and assymetric 

- **Symetric** 
	- It's  easy to understand that, we can reverse the step we followed for the encryption, so, (eg. our decryption key: right shift charatcher by "**K=3**" place and mod with 26, 
(example - d -> a, e -> b, c -> z).
	- **AES, 3DES, RC4** are the most common algorithm used in symetric algo. 

- **Assymetric**  
	- This is the way in which reversing the algorithm will not work in decrypting. 
	- **DSA, RSA, ECC, ECDH** are the most common algorithm used in symetric algo. 

---

#### HOW SSL/TLS WORKS ? 

Before understanding the SSL/TLS we need to know the basic concept of Keys. 
In cryptography, every computer/host have there own unique keys 
- **Public Key** - As name suggest this is a type of key which is visible to public, Anyone can view this and use this to encrypt/decrypt message. 
- **Private Key** - This is secret key, not gonna share with anyone (the message encrypted by my key, can be only  decrypted by my public key - vise-versa). 

#### What is the role of SSL/TLS in client/Server network ? 

when server want to authenticate the users (vice-versa)
- STEP 1: our (server website) will send it's public key to the browser (our client). 
- STEP 2: client will encrypt the data using the the server's public key shared previously by the server. 
- STEP 3: when the server will recieve the encrypted text, which is encrypted by it's public key, and our server have it's private key to decrypt that.  & read the message. 

### What is certificate ? 
I am comparing the your ID card with certificate or understanding that. 
- You have a ID card in your college, which proff that you are a legit student, similarly every website have certificate for proff. 
-  like your id card include your public  information like (name phone), every certificate include the public key of the website. 
-  your ID card are issued by college right (which is an organzation), similarly every certificate is issued by an org. formally known as CA (certificate authority). some charges money. 

some of certificate authority i know are (godaddy, let's encrypt, Google, Sectigo Limited
). 

![Github screenshot](https://private-user-images.githubusercontent.com/74103314/411296969-ab30c251-7e0b-425b-bc34-01e28560eb8d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkwODk4OTMsIm5iZiI6MTczOTA4OTU5MywicGF0aCI6Ii83NDEwMzMxNC80MTEyOTY5NjktYWIzMGMyNTEtN2UwYi00MjViLWJjMzQtMDFlMjg1NjBlYjhkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA5VDA4MjYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQyODdkN2NlMWYyNTNhYzUzOTdiZWE2YjZlZjFjNTFmMjI1NDU5ZWMwM2RmNTljYWQ2MTQ2NDBkMmFmNWI4ZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.TYuibnE6AdOVnEvAymHsJJAOFENnk8bvr5pVLJbnNGw)

For example - github webite have certificate of "Sectigo Limited". 

- there is also a public key, certificate and many more details.

---

Thanks. For reading hoping you could gain some clarity. if you want to upvote this story this [medium blog.](https://medium.com/@akhilsharmaa/ssl-tls-the-secure-way-of-communication-bd1166ad0463?source=friends_link&sk=dfb780672c7f267a89320f5d5543dd6e). 