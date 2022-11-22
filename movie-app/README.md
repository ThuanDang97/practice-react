# React Practice Two

## Overview

Build a movie web application

## Timeline

- **8 Days (12/05 - 23/05)**

## Team size

- **1 developer**

## Estimation

- [Link here](https://cut-jumpsuit-4d3.notion.site/Estimate-document-React-TypeScript-practice-4f2b4ee58ae94ef6b9628e099358b9df)

## Target

- **Apply Storybook and Unit-testing with Jest**

## Requirements

- **Using React hooks**
- **User can view list movie and list movie favorite**
- **User can add and remove favorite movie**
- **User can search a movie by sort and filter**

## Tech Stack

- **React ES6**
- **TypeScript**
- **API**
- **Vite**
- **HTML5 / CSS3**

## Setup Development Environment

- **Vite**
- **ESLint**
- **SWR**
- **Prettier**
- **Storybook**
- **Jest**

## Main Features

- **View list movie**
- **Search movie by sort and filter**
- **Add and remove favorite movie**
- **View info single movie**

## Component

- [link here](https://cut-jumpsuit-4d3.notion.site/Component-Movie-APP-cd6b14d2e5b24925ab747c884b23ec00)

## Getting Started

- Clone project:

  ```bash
  git clone git@gitlab.asoft-python.com:thuan.dang/react-training.git
  ```

- Checkout branch:

  ```bash
  git checkout feature/practice-two
  ```

- Change directory:

  ```bash
  cd movie-app
  ```

- Install packages:

  ```bash
  pnpm install
  ```

- Start project: <br>

  ```bash
  pnpm run dev
  ```

- Start Storybook: <br>

  ```bash
  pnpm run storybook
  ```

- Open on web: <http://localhost:3000> and <http://localhost:6006/>

## Unknown issue

1. I don't know how to block Router re-render
2. My features are using most of the existing state, do I need to use useCallback to prevent re-render?
3. I can't reset sorting to default after another page redirect
4. I have more than 20 movies but list favorite returns only 19 movie, I try fetch by Thunder but API still return 19 movies. List is Empty but total_results return 1 (NEED: return 20 movies)
