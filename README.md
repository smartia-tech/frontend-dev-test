# Smartia Frontend Developer Challenge

This repository contains the Smartia frontend challenge.

## Setup

In this repository you will find a vanilla [Create React App](https://create-react-app.dev/) project created using [Yarn](https://yarnpkg.com/).

If you are unfamilar with Create React App and the tooling it provides, please see `CRA_README.md` at the root of this repository.

This is intended as a starting point. To start the app, run...

```sh
yarn start
```

## Your Task

### Description

Having taken a keen interest in SpaceX launches recently :rocket:, you've discovered a [public API](https://github.com/r-spacex/SpaceX-API) where you can query for launch, rocket, launchpad, landing pad data and more.

- [SpaceX API README](https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md)
- Example: [Past launches](https://api.spacexdata.com/v4/launches/past)

The API is REST and does not require any authenitcation.

> `past_launches.json` is provided at the root of this repository as a static example of the data

Armed with your newly discovered API you've tasked yourself with writing a simple application to **list and query past launches**.

### The Requirements

You've decided the application _must have_ the following features:

- List of past SpaceX launches displaying:
  - Flight patch image (`links.patch.small`)
  - Name (`name`)
  - Launch date (`date_utc` or `date_local`)
  - Whether all the cores successfully landed (`cores.landing_success`)
- Search allowing you to query for:
  - Launch name (`name`)

### The Fun Part

#### The UX

This is :100: percent in your control!

Feel free to put as much energy into the UX as you are comfortable. If UX and a sleak design is where you feel you shine, feel free to focus here (as long as the application basically works of course).

Don't worry if UX isn't your thing, it's :100:% fine to use an off the shelf library or maybe even go for a super minimalistic look using plain HTML.

> Note! Don't worry about responsiveness or mobile screens for this exercise.

#### The Code

We have provide you with a base template in a Create React App to get you started.

From this point onwards the codebase is :100:% in your control to take it in any direction you wish to complete the task.

This could include:

- Installing any library of your choice to help you complete the task
- Changing the directory structure
- Add TypeScript support (if you're more comfortable with TS)
- ...

> Tip! Consider that others might work on this application in the future.

## Final notes

While the aim is for the basic application to work, keep in mind other possible functionality or features you added (or wish you had time to add).

For example:

- :muscle: More powerful search
- :page_with_curl: Pagination
- :dizzy: Overall UX
- :detective: Debugging tools
- :test_tube: Testing tools
- This list could go on forever...

Please don't spend more than 3-4 hours working on this task, it will not net you extra points, and we do not want you to spend enormous amounts of time on a throw-away test.

Our primary focus is to verify that you know how to code, and give thought to the huge array of considerations any engineer must take when writing front end code. _You are not expected to have covered every scenario_, the guide time limit is to focus you on what you feel is most worth the time and energy.

Everyone's approach to this task will be unique, we cannot wait to hear your thoughts on how to solve it! :D

### Submission

Once you are ready, submit a pull-request with your solution and shoot me an email at `phil.ostler@smartia.tech` with a link to your pull-request and copy of your up-to-date CV. We will then schedule a call with you as soon as we receive it to discuss your solution (this call usually lasts about 1-2 hours, as we want to get to know one another well). **If you have submitted a PR with a solution to the task, you will be invited for the call** as we believe that it’s only fair to put in the same amount of time as do the candidates.

We hope that you will have fun with it!

## Deploy

The production version of this test is on netlify
Here's the link: https://blissful-goldstine-a78089.netlify.app/
