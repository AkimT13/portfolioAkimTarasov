# NewsGram

## Link

[https://news-gram.vercel.app/]

## Type of Development - Full Stack

## Description

_NewsGram_ is a fullstack news application designed to condense extensive articles into easily digestible snippets. The goal is to empower users to quickly acquire information on current events without the cognitive load associated with reading lengthy articles.

## Problem Addressed

In an era dominated by short-form content on social media platforms, individuals often grapple with diminished attention spans. This trend discourages engagement with long-form media, including news articles and research papers. _NewsGram_ addresses this challenge by presenting concise descriptions for each article. Users can seamlessly scroll through their feeds, akin to platforms like Instagram or TikTok, to efficiently gather crucial information.

# Technical Specifications

The _NewsGram_ app was developed using the following technologies:

## Frontend

- **Framework:** React + Vite
- **Styling:** Tailwind CSS

## Backend

- **Platform:** Firebase

## API

- **News Articles:** NewsApi

## State Management

- **Library:** Zustand

## Lifecycle

The app opens with a login page. You start by choosing your username, email, and password for yout login. Your information will be stored in firestore and the authentication will be handled using firebase authentication. Once logged in, your information will be stored in local storage and the applications login state will be changed, thus revealing the homepage. The homepage is simple. It initially contains the top articles from the current day. A script on the serverside will run daily and fetch articles from newsApi and store them onto my firebase realtime database. Whenever a user opens the homepage the feed is populated by content that is fetched from the database rather than making uncessary api calls to newsapi. The way its ran once a day is due to vercel's serverless functions and cron jobs. The UI is simple and easy to use, simply find an article you are interested in and click on it, revealing its shortened description. If you want more information, you are also able to naviafgte to the original articles webpage.

## Issues

The most glaring issue is the security of the database. Firebase has a unqiue method of handling security rules. Rather than recommenid that you hide your databases api key, instead you must implement firebase rules to your database using their own SDK. As of right now I haven't quite figured out the best way to implemnt these rules properly, so I pretty much just disable writing pivallages manually after vercel runs the function that fecthes the newer articles.

## Future Development

I feel as if the descriptions provided by newsApi are often very short. So i think what I'll do is embedd some sort of LLM into my app that will read the html of each article page and summerize it in a more detailed manner. Of course I will also handle the issues with security as well. Also I want to allow users to sign in with google in addtion to their usernames and passwords.
