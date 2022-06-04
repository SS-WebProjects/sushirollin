The website of Sushi Rollin
The sushi roll restaurant is currently offering franchise opportunities in Texas.

## Getting Started

First, clone the repo:

```bash
git clone https://github.com/SS-WebProjects/sushirollin.git
```

Second, installs a package, and any packages that it depends on:

```bash
git clone https://github.com/SS-WebProjects/sushirollin.git
npm i
```

Third, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Netlify

Please visit https://sushirollin.netlify.app/.

## AWS Amplify - Backend
After your email is added to the project, click the invitation link. The title of email is "Welcome to Amplify Studio | Your temporary account details"
<ul>
<li>Copy the link of "Local setup instructions" and execute it to the terminal.

`amplify pull --appId xxxxx --envName xxx`



<li> This will initialize the Amplify. 

`Do you plan on modifying this backend?`  `Yes` 

This will create `aws-exports.js`
</ul>

