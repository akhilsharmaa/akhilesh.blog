---
title: "Advium, AI-Bloging Platform"
description: 'Blog platform utilizing NLP. It ensures content quality, scalability, and a seamless user experience while maintaining robust security.'
codeLink: ""
deploymentLink: "httpdemoac2awscom"
demoLink: ""
heroImage: ''
rank: "2"
tags:
	- "nodejs"
---

-  `LangChain` : Verify **"How much content is GPT generated ?"**  using LLM model. (*every blog should at least 60% human written* )
- `RabbitMQ`  for  queue management system - 
	- one blog testing at a time (reduce system failure by heavy load). 
	- **scalable** (we can easily increase the number of machines for LLM processing if load increases)
- Check via NLP if this similar content already exist in our database.
    - queue system for the the blog will go to testing `queue system` (not just directly call API and get the result). 
    - Udpate queue number using `WebSocket`  (eg. 5 in queue.. 4 in queue )
- Every Blog Requires `Beta Approval` before going public.
    - Every member can request for *Became beta member*.
    - Request predefined number of  `Beta Member` approval for publishing blog.
- **Blog writing editor** (support `.md` files).
	- Supports Embedding `Image, GIFs`
	- ` Drag & Drop Thumbnail`  image (reducing image size).
- `FORK` the blog. make you own version
- Each  **Public Blogs includes**: 
	-    `Title` ,  `Body` ,  `Thumbnail`, `DateOfPublish`,  
	-  `Upvotes`, `DownVotes`
	- `"LLM generated Summary"`  30-50 words ai generated summary. 
	-  `Tags` (eg. Java/DSA...) *Maximum 10 Tags* : 
		-  (5 `Tags`) will be **auto generated**, by LLM Model. 
		-  (5 `Tags`) can be added by the user.
	-  `Comment Section` ,  `views` (only logined user views are counted)
	-  Author detail  `uid`, `email`, `username` 
	-  **version control** of the blogs [after every edit] 