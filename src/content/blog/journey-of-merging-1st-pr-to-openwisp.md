---
title: "Journey of merging 1st PR to Open-Source (openwisp)"
description: 'me casually documenting “whole journey of getting started with open-source contribution...'
pubDate: 'Mar 13 2025'
# updatedDate: 'Jan 3 2024'
heroImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*3cV4CUPbwsaSVRSO.jpeg"
---


Source: This blog is orignally published on [medium](https://akhilsharmaa.medium.com/journey-of-merging-1st-pr-to-openwisp-fa851330b602?source=friends_link&sk=e8ebae349577277a60d103cb6ede8fab). you can upvote or follow me there for more. 


*This is me casually documenting “whole journey of getting started with open-source contribution”. I am really new to open source, so the first thing to do is to select an organisation or project that really aligns with my goals.*

### How i choosed the my project ? 

In my previous internship, a developer (Who can literally solve every single bug) had already done some contribution in 2–3 projects. I thought why can’t I start that. Yes, I was inspired by him and started. That’s how I got to know about this openwisp project.

Going through the openwisp organisation. as i am going ahead i am writing the summary of whatever i am getting 

#### What is Openwisp?
It’s a Network management system which allows organizations to deploy and manage their own network. It’s focused on supporting an operating system **openwrt** (linux based distribution).


Got an overview of Openwisp from this video link. This video which is more towards hands on contibuting to the openwisp. I got to know there is no need to buy the network device (router) to getting started, and I need only a virtual box (by installing openwrt) with ubuntu.

“Today I’m 21, when i got to know that the routers are actually fully working computer, on which we can setup the whole operating system. Yes! We can boot linux inside it.”


##### Setting up Router  - 

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*-ww68AlbRn5Di2HG.png)

First I tried to setup the OpenWrt in VM because I wanted to see what actually happens in OpenWRT? I have tried various resources, but this (link) is much more accurate & straight forward. After setting up the router make sure that openwrt page is accessible as below at 192.168.56.2 (may be different for you).


### Project Setup - 

At First, it’s better for me to get the project running as soon as possible, so I set it up using docker **(if you are getting started, I suggest you to setup using docker to see how it’s running, but it requires some basic knowledge of docker & docker-compose).**


So, now I have seen the components working together. I am starting the setup for the development. The whole project is distributed into various modules. [This](https://openwisp.io/docs/dev/general/architecture.html) is a much better visualization of the project.

I am exicited to set this up and for tweaking it, but as I am at my home I don’t have my high-end pc, so it’s difficult to work on the virtualbox because i have 8gb ram in the my macbook. So I am just trying to understand the code, instead of setting it up first. As we have to get started from somewhere, I started with the openwisp-radius repository.

**openwisp-user** : responsible for managing the users and authentication. (Recommended using django v3.2.25.).

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*6kxXb4NUlRlnv75W.png)

I have set it up locally but this module repo doesn’t have much recent issues to solve. I want issues which are maximum 2–3 months old, because it’s easy for maintainers to test it. So going ahead for other modules.


**openwisp-radius :**

Responsible for managing the csv batch-imports etc.


While setting it up, I got stuck because of some dependency issue in `requirement.test.txt` file. After a whole day of figuring out the problem, I messaged in the community channel and within 2–3 min (what a great community!), one of the maintainers replied with a PR which was not merged, from this i got to know that the documention was not updated (actually requirement.txt was outdated).

Got my first issue to resolve, couldn’t find a **good first issue**. So it took me almost 5–6 days to resolve the issue (maybe because I’m a newbie in django).


Then, I raised a New PR & wrote a message in community chat. Then got to know that I have to also write the unit testing for it. So, now I’m learning the **unit testing** thing.


After two days I accumulated decent knowledge about unit testing, I have written the unit testing, what i have done was just adding 4–5 function to test my function. It was easy, not that hard.

I requested to re-review my PR in community chat. Yoo… this time the maintainer replied with a “thank you message” and reviewed my code.

But, he replied “ok you have written the tests but the bug is not reproduced, so write a test which reproduce the bug“.


![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*8c8aDhE2zVboUi6o.png)

This approach will lead you to be called as “a newbie who doesn’t think before writing a code” and a bad impression to the seniors and maintainers.

After, spending sometime I found a way. Actually there was a specific folder to store bug/testing files. So, I just added it there and 5–6 line of code in the test for fetching it and testing it. Done.

Now, again I asked to review just by github request review feature. Within 1–2 hour maintainer just asked for some minimal changes (just to create a new test function instead of adding).


Again, asked for review. this time maintainer was busy in releasing major version.
So, the review was getting delay. After sometime the maintainer replied “I will review it asap“.


After 2 days he ran the build (github workflow) basically its testing my code quality & coverage. And the build failed (I was like bro… now fix this). Now I had to replicate the github workflow and then produce the error coming in the build & fix that.


![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*VU-g7j2QcNNyVAlT.png)

Ok, I replicated and fixed the error, then pushed & requested to re-run the build. I can’t re-run build it needs permission of contributor, then this time boom it’s **build success**. All tests passed. Now I am happy and waiting for the review (actually waiting for the pr to merge).

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*HTUbAZ8Csz66ib-d.png)

Again, I’m waiting for the review, but now christmas started this month, so everything slowed down.

After one month, finally, I got a mail that the **PR is MERGED.** I was like…. bro… I am an open source contributor now.

![](https://miro.medium.com/v2/resize:fit:1308/format:webp/0*Y-7BPkp7q1HT90Es.png)

Thank you reading,  if you liked it,  please upvote this on [medium](https://akhilsharmaa.medium.com/journey-of-merging-1st-pr-to-openwisp-fa851330b602?source=friends_link&sk=e8ebae349577277a60d103cb6ede8fab), also follow me, this gives me energy to write the blog. 