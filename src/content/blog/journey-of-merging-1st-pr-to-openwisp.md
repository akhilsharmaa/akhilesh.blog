---
title: "Journey of merging 1st Pull-Request to Open-Source (openwisp)"
description: 'me casually documenting “whole journey of getting started with open-source contribution...'
pubDate: 'Mar 13 2025'
# updatedDate: 'Jan 3 2024'
heroImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*3cV4CUPbwsaSVRSO.jpeg"
---


Source: This blog is orignally published on [medium](https://akhilsharmaa.medium.com/journey-of-merging-1st-pr-to-openwisp-fa851330b602?source=friends_link&sk=e8ebae349577277a60d103cb6ede8fab). you can upvote or follow me there for more. 


*This is me documenting “whole journey of getting started with open-source contribution”. I am really new to the open source, so the first thing to do is to the select a organisation or project the really align with my goal.*

### How i choosed the my project ? 

In my previous internship, one developer “Who can literally solve every single bug“ have already done some contribution in 2-3 projects. I thought why not start from this. yes was inspired by him, and got the start. that’s how i got to know about this openwisp project. 

Going through the openwisp organisation. as i am going ahead i am writing the summary of whatever i am getting 

What is Openwisp? A Network management system which allows organization to deploy and manage their own network.  It’s focused on supporting an operating sytem openwrt (linux based distribution).

Got an overview of Openwisp from this video link. This video which is more toward hands on contibuting to the openwisp.  I got to know there is no need to buy the network device (router) to getting started, but all i just need is virtual box (by installing openwrt) with ubuntu. 

“Today i’m 21, when i got to know that the routers are actually fully working computer, on which we can setup the whole operating system, yes we can boot linux inside it.” 

##### Setting up Router  - 

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*-ww68AlbRn5Di2HG.png)

First I try to setup the OpenWrt in VM because i want to see that what actually happens in the OpenWRT?  I have tried various resources, but this (link) is much accurate & straight forward, after setting up the router, make sure that openwrt page is accessable as below at 192.168.56.2 (may be different for you). 

### Project Setup - 

At First, It’s better for me to get the project running as soon as possible, so i am setting up using **docker**. *(“if you are getting started, my suggest suggest you to setup using docker to see the project how it’s running. but it’s require some basic knowledge of docker & docker-compose.”)*

Now i have seen the components working together, now i am starting the setup for development. the whole project is disributed into various modules. this is very good visulization of the project. 

I am exicited to setup this and tweaking it, but as i am at my home, ans i don’t have my high-end pc, so it’s difficult to work on the virtualbox because i have 8gb ram in the my mac, so i am just trying to understand the code. instead of setup it first, as we have to get start from somewhere, i have started with the openwisp-radius repository. 

**openwisp-user** : responsible for managing the users, authentication. (Recommended using django v3.2.25.). 

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*6kxXb4NUlRlnv75W.png)

I have setuped it locally but, this module repo don’t have much recent issues to solve. I want issues which are maximum 2-3 months old, because it’s easy for maintiners to test it.  so going ahead for other modules. 

**openwisp-radius :**

Responsible for managing the csv batch-imports etc.  

while setting up, i got stuck in intstallation because of some dependency issue in `requirement.test.txt` file. After whole day of figuring out the problem, I messaged in the community channel and within 2-3 min (what a great community) one of the maintainer replied "that the documention is not updated (actually requirement.txt was outdated)." Finally after all this modules installed locally.  

Got my first issue to resolve, Couldn’t find a **“good first issue”**, so this issue almost taken me 5-6 days to resolve this issue (maybe because i’m newbie in django). 

Then, I have Raised a New PR & written a message in community chat, Got to know that i have to also write the unit testing for it. so, now i’m learning unit testing thing. 

After two day i got the decent about of knowledge of unit testing, i have written the unit testing, what i have done is just added 4-5 function to test my function. it was easy not that hard. 

I request for re-review my PR in community chat. yoo... this time maintainer replied with a thankyou message and reviewed my code. 

but, be replied “ok you have written the tests but the bug is not reproduced, so write a test which reproduce the bug“. 

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*8c8aDhE2zVboUi6o.png)

Now i have to reproduce the bug using code. previously, i was reproducing the bug manually (what a newbies). ok, now i started to write the test, the first problem was that how could i add the file ? where to add it ? like this a huge code and i could not add like i do in my personal project. here we are write only good & maintainable code. 

This way of approching will lead you to called as "newbie who don’t think before writing code” and this will lead to bad impression to the seniors and maintainers.

After, spending sometime i found the way, actually there was a specific folder to store bug/testing files. so, i just added it there. and 5-6 line of code added in the test to fetching it and testing it. done. 

Now, again i asked for review just by github request review feature. within 1-2 hour maintainer just asked for some minimal change (just to create a new test function instead of adding). 


Again, asked for review. this time maintainer was busy in realeasing major version. so, review was getting delay. after sometime maintainer replied “i will review it asap“. 

After 2 days he runned the build (github workflow) basically it’s testing my code quality & coverrage. and the build failed (i was like bro… now fix this) now i have to replicate the github workflow and then produce the error coming in the build & fix that. 

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*VU-g7j2QcNNyVAlT.png)

Ok, i replicated and fixed the error, now pushed &  requested to re-run the build. (i can’t re-run build it’s need permission of contributor) then this time boom it’s build success. All tests passed. now i am happy and waiting for the review (actually waiting for the pr to merge). 

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*HTUbAZ8Csz66ib-d.png)

again, now i’m waiting for the  review, But, now this is chrismas started so this month, so everything is slowdown. 

After one months, finally, I got a mail that the PR is MERGED. i was like…. bro… i am open source contributor.

![](https://miro.medium.com/v2/resize:fit:1308/format:webp/0*Y-7BPkp7q1HT90Es.png)

Thank you reading,  if you liked it,  please upvote this on [medium](https://akhilsharmaa.medium.com/journey-of-merging-1st-pr-to-openwisp-fa851330b602?source=friends_link&sk=e8ebae349577277a60d103cb6ede8fab), also follow me, this gives me energy to write the blog. 