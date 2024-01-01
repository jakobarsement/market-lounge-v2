Market Lounge is an open source, interactive, data visualization app that helps users identify important financial metrics and trends before they invest in public companies.

## Getting Started

[Intro to React and Next](https://www.youtube.com/watch?v=h2BcitZPMn4&ab_channel=LeeRobinson) (1h 20min)

1. [Clone this repository](https://support.atlassian.com/bitbucket-cloud/docs/clone-a-repository/) to a local directory of your choice.
2. Navigate to that new repository directory with your terminal.
3. In your terminal, run `npm install` to download all the `package.json` dependencies for the project. You should now have a `node_modules` folder in your local repository with the data `npm install` downloaded.
4. In your terminal, run the development server with `npm run dev`. After the script completes, your terminal should show which location your code is running on, such as localhost:3000.
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
6. Request access to the Jira board [here](https://entremont.atlassian.net/jira/software/c/projects/ML/boards/1/backlog?issueLimit=100&view=detail) where we manage tasks
7. Join the slack channel [here](https://join.slack.com/t/simplemarkets/shared_invite/zt-29lp1xm5v-wImtuUt8j3DvvRm_UzQpwQ) and tell us what you're passionate about in the `#general` channel 😊

### Pages

This project codes pages within the `src/app` directory. For example, `src/app/page.tsx` is the code for the home page (`/`), where `src/app/example/page.tsx` is the code for the example page (`/example`). See the Next.js routing docs [here](https://nextjs.org/docs/app/building-your-application/routing/defining-routes).

```text
/
├── src/
│   └── app/
|       ├── company
|       |   ├── [slug]
|       |   |   └── page.tsx <- based on the url slug (page has access to `slug` value)
|       |   └── page.tsx    <- /company homepage
│       └── page.tsx    <- root page
└── package.json
```

### Components

Our [React](https://www.youtube.com/watch?v=Tn6-PIqc4UM&ab_channel=Fireship) components contain the view (HTML/[JSX](https://www.youtube.com/watch?v=Tn6-PIqc4UM&ab_channel=Fireship)), the logic (TypeScript), and the styles ([TailwindCSS](https://www.youtube.com/watch?v=mr15Xzb1Ook&t=4s&ab_channel=Fireship)) all in one file. This makes it easy to locate the primary code for a component inside of one single file!

```text
/
├── src/
│   └── components/
└── package.json
```

### Some tips

1. Next.js uses React.js, and it is important to understand how components render and rerender in React. Understanding the [useState](https://react.dev/reference/react/useState) and [useEffect](https://react.dev/reference/react/useEffect#useeffect) hooks is very important for this. If you want an introduction to more hooks, watch this [video](https://www.youtube.com/watch?v=TNhaISOUy6Q&ab_channel=Fireship).

## Reasons for Next.js

### Next.js is a modern, desired skill

Many large and successful companies use Next.js ([showcase](https://nextjs.org/showcase)), and it is currently seen as a capable solution for building frontend systems, largely thanks to 1) the [React team](https://www.youtube.com/watch?v=8pDqJVdNa44&ab_channel=Honeypot) that started at Facebook, 2) open-source contributors [[1](https://github.com/facebook/react)][[2](https://github.com/vercel/next.js)], and 3) the current team behind Next.js at [Vercel](https://vercel.com/). A documentary on the creation of React can be found [here](https://youtu.be/8pDqJVdNa44?si=WDw8pvZxuVxT3s7f).

### Automatic image resizing

We can rely primarily on native image optimization that Next provides, documented [here](https://nextjs.org/docs/pages/building-your-application/optimizing/images). The Next team worked very hard on this for many months and now we get to use it with just a couple lines of code!

### Automatic network response caching

Next.js has extended the [web standard fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) with new caching functionality that works automatically for deployed sites. You can read more about Next's fetch API [here](https://nextjs.org/docs/app/api-reference/functions/fetch). For a dive into all Next caching features (both client- and server-side) see [here](https://nextjs.org/docs/app/building-your-application/caching).

### Automatic polyfills

Next automatically [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) for browsers that need them, preventing us from configuring our own. Read more on this [here](https://nextjs.org/docs/architecture/supported-browsers#polyfills).

### Better code organization

Next.js uses React.js, which makes organizing pages and components far easier. It is currently the most popular method for building rich, reactive frontend applications ([read here](https://nextjs.org/showcase)), which has a lot to do with how code is organized and maintained in React, and the server-side abilities that Next enables.

## Tech

### Next.js (Next)

[Next.js](https://nextjs.org/) is the full-stack framework that this project revolves around.

### TailwindCSS (Tailwind)

[TailwindCSS](https://www.youtube.com/watch?v=mr15Xzb1Ook&ab_channel=Fireship) is an alternative to BEM syntax and CSS modules, and enables easy dark-mode and faster development. It is recommended to use an extension like [this](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to make Tailwind usage easier.

### Prettier

[Prettier](https://prettier.io/) makes consistent formatting for our code easy. Our configuration can be found in the `package.json`. To enable auto formatting on-save, see these prettier [docs](https://prettier.io/docs/en/editors).

### Vercel

This application will be hosted in production on Vercel's servers

### Jest

Unit testing helps us debug and refactor our highly constrained functions. See [this article](https://medium.com/@jakobarsement/unit-test-your-javascript-with-jest-bc553fdbeb39) on Jest testing.

```text
/
├── src/
│   ├── components/
│   └── utils/
│       └── convertNumberToAbbreviation/
│           ├── convertNumberToAbbreviation.js
│           └── convertNumberToAbbreviation.test.ts    <- this is a Jest test file
└── package.json
```

### Future tech Considerations

- For asynchronous error handling: [here](https://www.youtube.com/shorts/ITogH7lJTyE)
- For synchronous error handling: [react-error-boundaries](https://www.npmjs.com/package/react-error-boundary)
- Next's microfrontend monorepo support documented [here](https://github.com/vercel/examples/tree/main/solutions/microfrontends)
- [Storybook](https://storybook.js.org/) for isolated component work / demo
- Project-wide code formatting (with Prettier)
- Pre-push hooks for linting, [not pre-commit](https://www.youtube.com/watch?v=RAelLqnnOp0&ab_channel=Theo-t3%E2%80%A4gg)
- State management: While libraries like Zustand and Jotai are tempting, we want to explore event-based state update systems to enable a [microfrontend](https://vercel.com/templates/next.js/microfrontends). A hybrid approach will likely be taken for state mgmt.
- To begin operating like a product company rather than a builder service company, we will need to enable detailed user monitoring (such as with [Segment](https://www.youtube.com/watch?v=-5nUITqOz3Y&ab_channel=Segment)) and [A/B testing](https://medium.com/jonathans-musings/ab-testing-101-5576de6466b) so we can develop what _actually_ generates more leads vs what we _think_ will.
- Add @components, @utils, [aliases](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases) to tsconfig.json (simplifies imports)
- To transfer reroute logic: [middleware.ts](https://nextjs.org/docs/app/building-your-application/routing/middleware#nextresponse)
- To prevent adding code that decreases Learning Center performance, we can time automated tests and compare the test time for the destination branch (main/master branch) with the test time for the merging branch (such as a feature/bug-fix branch) during pull requests, similar to [this article](https://medium.com/front-end-weekly/run-lighthouse-performance-audits-on-every-pull-request-6907645d2005) topic and as some open source projects do ([example](https://github.com/vercel/next.js/pull/59861#issuecomment-1867001990)).
- [Unlighthouse](https://unlighthouse.dev/): free SEO performance tool
- [NextAuth](https://next-auth.js.org/) for authentication
- To build in our future pipeline, can remove `--profile` flag from package.json `build` script to increase performance
- [Next bundle analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- Accessible, unstyled component libraries: [Radix UI](https://www.radix-ui.com/), [Headless UI](https://headlessui.com/), [React Aria](https://react-spectrum.adobe.com/react-aria/)
- Great copy/paste UI library from Vercel team: [shadcn](https://ui.shadcn.com/)
- Animation libaries: [AutoAnimate](https://create.t3.gg/en/other-recs#autoanimate), [https://create.t3.gg/en/other-recs#framer-motion](https://create.t3.gg/en/other-recs#framer-motion)
- tsconfig [example](https://github.com/t3-oss/create-t3-app/blob/main/tsconfig.json)
- prettier to sort import statements
- Eslint plugins such as SonarJS [here](https://github.com/dustinspecker/awesome-eslint?tab=readme-ov-file#code-quality)

## Learn More

### Videos

- [Deeper dive into Next.js basics (15min)](https://www.youtube.com/watch?v=gSSsZReIFRk&ab_channel=Vercel)

### Readings

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [3 core Next.js Scripts in package.json](https://medium.com/@zahidbashirkhan/whats-the-difference-between-npm-run-dev-npm-run-build-and-npm-run-start-in-next-js-7baf9b7c5d39)
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
