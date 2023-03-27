# Article Notes

You and I read a lot or else we wouldn't be taking so many notes. I have a premium subscription to [Readwise](https://readwise.io) which grants me access to [Readwise Reader Beta](https://reader.readwise.io). I was using [Matter](https://hq.getmatter.com/) but the Readwise client is *so robust*; pdfs, epubs, articles, tweets so much stuff.

Here you'll find some of my Readwise highlights on the articles I've read.

---
## [[Composing Software An Introduction]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[Eric Elliott]]
- Full Title: Composing Software: An Introduction
- Category: #articles
- URL: https://medium.com/p/27b72500d6ea

## Highlights
- Likewise, every time you chain array method calls, lodash methods, observables (RxJS, etc…) you’re composing functions. If you’re chaining, you’re composing. If you’re passing return values into other functions, you’re composing. If you call two methods in a sequence, you’re composing using this as input data.
- The process of software development is breaking down large problems into smaller problems, building components that solve those smaller problems, then composing those components together to form a complete application.
- In 2013, a jury found Toyota’s software development team guilty of “reckless disregard” after an accident investigation revealed spaghetti code with 10,000 global variables.

---
## [[Essential Skills Every Developer Should Master]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Jean-Paul Delimat]]
- Full Title: Essential Skills Every Developer Should Master
- Category: #articles
- URL: https://medium.com/p/80e40e084241

## Highlights
- Regardless, you should know how to write unit tests for your code and be proactive about writing them. If you don’t have time to actually do it, you should at least be aware that it’s wrong.
---

---
## [[Everything You Need to Know About CSS Variables]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Ohans Emmanuel]]
- Full Title: Everything You Need to Know About CSS Variables
- Category: #articles
- URL: https://medium.com/p/c74d922ea855

## Highlights
- In this case, the properties that differ are the background-color and border-color of the variant.
---

---
## [[GitHub Broke My 1,000 Day Streak]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Jed Watson]]
- Full Title: GitHub Broke My 1,000 Day Streak
- Category: #articles
- URL: https://medium.com/p/6ec0c4c3a7d9

## Highlights
- Starting an Open Source project and dedicating yourself to it can get you some great friends and unique experiences. Lesson #6
- If you’re going to do something hard, be smart about it, and set it up to be sustainable. Lesson #5
- Turns out being disciplined can be social and fun. Lesson #4
- If things are good for you, the people who love you will notice and encourage them. Lesson #3
---

---
## [[How I Turned a Rejected Conference Talk Into 300K Views on Medium and YouTube]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Beau Carnes]]
- Full Title: How I Turned a Rejected Conference Talk Into 300K Views on Medium and YouTube
- Category: #articles
- URL: https://medium.com/p/33e8a0fc7caf

## Highlights
- How should I change my future plans to include this experience?
- How can I turn this into a success?
- What can I learn from this experience?
- After a failure or a rejection, I’ve found that it’s good to ask three questions to help make the best of the experience:
---

---
## [[How Node and Javascript Handle Asynchronous Functions]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Jason Arnold]]
- Full Title: How Node and Javascript Handle Asynchronous Functions
- Category: #articles
- URL: https://medium.com/p/7feb9fc8a610

## Highlights
- The execution order of asynchronous actions along side synchronous actions can seem like a bit of a mystery when you first start using Javascript. But the built in workflow and mechanisms of the call stack, event loop, and callback queue are there to handle these requests at appropriate times.
- This is why callback functions show up after all of the functions in the main part of the program. Because they have to go through the callback queue and only get put into the call stack by the event loop once the call stack is empty.
- This is what causes output from a callback function to appear after all of the other non-callback functions. The non-callback functions are like VIPs that don’t have to wait in line to get executed. Meanwhile, those callback functions are being held in a separate queue until it is their turn.
- As you can see, we still get the ‘first’ and ‘last’ logged to the screen before the data from the Google API is returned. This is because when data is returned from the Axios call, it is in the form of a Promise and that Promise can have callback functions applied to it.
- You might think that the callback gets executed out of order due to the delay in setTimeout(). That’ what I thought at first, but take a look at this example:
- Here, the console of ‘second’ happened after ‘last’. Why? Because that console.log() statement is in a callback function which gets executed out of order. And since Javascript is non-blocking it continues on executing more functions. In this case, the ‘last’ console.log() gets executed and then finally the callback function is fired and ‘second’ is seen on the screen.
- In order to mimic something like an asynchronous call we can use the ‘setTimeout’ method. This takes two arguments; the first is a function which will be a callback function, and the second is the amount of time to delay calling that function in milliseconds.
- This necessity happens most often with programs that make requests over the network to retrieve data.
- A blocking function can be bad since everything in the program stops and waits for that function to finish before it can continue. They can also be necessary since sometimes you have to wait for one part of a program to finish before continuing on to the next.
- Callback functions are part of what is referred to as ‘asynchronous’ operations in Javascript. Asynchronous operations are those that are done in a different order than how they are listed in the program. Javascript has the ability to handle functions this way so that none of them, if written correctly, become a ‘blocking’ function.
- When a function is called, it is added to the top of the stack and run. If that function calls another function, it is then added to the top of the stack and then it is run. Only the function at the top of the stack is the one that can be run.
- The call stack is a mechanism in Javascript used to keep track of where it is in a program.
- It knows which functions are currently being run and which to call next.
- callback queue...

---
## [[How the “Golden Rule” of React Components Can Help You Write Better Code]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Rico Kahler]]
- Full Title: How the “Golden Rule” of React Components Can Help You Write Better Code
- Category: #articles
- URL: https://medium.com/p/127046b478eb

## Highlights
- Create and define components in the most natural way, solely considering what they need to function.
---

---
## [[How to Trim Strings in JavaScript]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Dr. Derek Austin 🥳]]
- Full Title: How to Trim Strings in JavaScript
- Category: #articles
- URL: https://medium.com/p/3823070c9316

## Highlights
- A trim function is useful for removing extra spaces typed by users. Often times, users aren’t even aware that they typed extra spaces. This fact could also lead to login problems if, for example, a user registered himself with trailing whitespace. — “Trimming Strings in JavaScript” by @AurelioDeRosa
---

---
## [[I’m a Boring Programmer]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Dan Kim]]
- Full Title: I’m a Boring Programmer
- Category: #articles
- URL: https://medium.com/p/d4ac3dd2defe

## Highlights
- And like a carpenter, I really enjoy building things. Sometimes that means following a specific plan, and other times you just work with what you’ve got.
- Like an artist I need to occasionally think outside the box, tap my creativity, and be able to see in abstracts. I want to embrace imperfection.
- Like a scientist I enjoy analyzing problems, trying different angles to solve them, and then sharing my findings. I want to understand how things work, and I want others to benefit from that understanding.
---

---
## [[JavaScript Arrays and Objects Are Just Like Books and Newspapers]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Kevin Kononenko]]
- Full Title: JavaScript Arrays and Objects Are Just Like Books and Newspapers
- Category: #articles
- URL: https://medium.com/p/6e1cbd8a1746

## Highlights
- You want to use arrays when order is the most important factor for organizing the information.
---

---
## [[Javascript Passing by Value vs. Reference Explained in Plain English]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Chris D’Ascoli]]
- Full Title: Javascript Passing by Value vs. Reference Explained in Plain English
- Category: #articles
- URL: https://medium.com/p/8d00fd06a47c

## Highlights
- When we create variable (b) and assign it the value of (a) the equals operator notices we’re dealing with a primitive value (5 in this case) and creates a NEW location in memory, points (b) to the NEW address, and fills it with a copy of (a)’s value (5). The console.log() of each variable prints what we would expect (5) at this point. However, when we change the value of (a) to 1 and console.log both variables (a) prints 1 as expected, but (b) is still equal to 5. Why? Because as discussed earlier when we assigned (b) to equal (a) a new location in memory was created, the equals operator did not simply have (b) point to the same spot in memory that (a) does, (b) was given its own location filled with the value of (a) at that time (5). So when (a) was changed (b) does not follow suit because it’s pointing to it’s OWN spot in memory, it has no idea that (a)’s value has changed since that is an entirely separate address in memory.
---

---
## [[My Daughter Was a Creative Genius, Then We Bought Her an iPhone]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Stephanie Gruner Buckley]]
- Full Title: My Daughter Was a Creative Genius, Then We Bought Her an iPhone
- Category: #articles
- URL: https://medium.com/p/bf617c0b6ca0

## Highlights
- We told ourselves she only wanted one because her friends had them. It was a status symbol. We didn’t want her to be like one of those people who are denied TV or candy in childhood, only to become addicts later. She’d grow bored soon enough, just like with the TV. We gave her an iPod Touch that Christmas.
---

---
## [[My So-Called (Millennial) Entitlement]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Stephanie Georgopulos]]
- Full Title: My So-Called (Millennial) Entitlement
- Category: #articles
- URL: https://medium.com/p/9be84343c713

## Highlights
- I’ll go: I don’t expect to own a home. I don’t expect to retire well, or at all. I don’t expect anyone to give me anything I haven’t explicitly asked for, and even then. I don’t expect it will ever be affordable to continue my education in any formal way. If a package gets lost in the mail, I don’t expect to see it again. I don’t expect the government or the banks or the universities to do anything that benefits regular people. I don’t expect them to hold each other accountable on our behalf. I don’t expect them to expel abusers from their ranks, or to put my safety over their legacy. I don’t expect to feel safe in large crowds or alone late at night. And I don’t expect that my privacy will be respected, online or in general.
---

---
## [[One Side Note, You Can’t Crowdsource Writing a Good Movie Script or Writing Good Music.]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Robert Clegg]]
- Full Title: One Side Note, You Can’t Crowdsource Writing a Good Movie Script or Writing Good Music.
- Category: #articles
- URL: https://medium.com/p/4f666f92b80d

## Highlights
- One side note, you can’t crowdsource writing a good movie script or writing good music. To the extent products rely on creative insight or inspiration (video game dev for example) you can’t focus group your way to success. Once the core product is created you can use user feedback. But too often focus groups happen too early in the product development process and dilute the direction and potential impact.
---

---
## [[React PropsState Explained Through Darth Vader’s Hunt for the Rebels]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Kevin Kononenko]]
- Full Title: React Props/State Explained Through Darth Vader’s Hunt for the Rebels
- Category: #articles
- URL: https://medium.com/p/8ee486576492

## Highlights
- State allows you to dynamically change many elements at once based on one variable. State encompasses the key parts of your UI that change basic on user input.
- When state changes, many components may change in accordance based on the one variable.
---

---
## [[Simple Timer in React]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Egor Egorov]]
- Full Title: Simple Timer in React
- Category: #articles
- URL: https://medium.com/p/df85d0867553

## Highlights
- We want to use Date.now() to get the timestamp in milliseconds and only use the setInterval() for updating as fast as it lets us. For this we will need to remember the timestamp when we start the timer and compare it to the current timestamp to get the milliseconds that have passed. We will need to add another property to our state object, the start time. We will set the start time to the current timestamp when start button is clicked.
---

---
## [[Structures in Go]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Uday Hiwarale]]
- Full Title: Structures in Go
- Category: #articles
- URL: https://medium.com/p/76377cc106a2

## Highlights
- A struct or structure can be compared with the class in the Object-Oriented Programming paradigm. If you don’t know what OOP is, then imagine struct being a recipe that declares the ingredients and the kind of each ingredient.
---

---
## [[The Curse of Free]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Nick Heer]]
- Full Title: The Curse of Free
- Category: #articles
- URL: https://www.inoreader.com/article/3a9c6e75e0bf05e6-the-curse-of-free

## Highlights
- Amazon is burning billions on Alexa because voice assistants need massive infrastructure but can’t be monetized. Google Cloud is $700 million in the red as of last earnings and heading south to a state of madness like a New Jersey retiree. These are mature products in saturated markets. You don’t need an MBA to know what will happen. But even the dean of Harvard Business School can’t say when.
- Goodwins’ post reminded me of the other curse of free-to-user services, though, which is their inherently predatory quality. Google was able to buy up a bunch of other companies to...

---
## [[The Junior Developer’s Guide to Writing Super Clean and Readable Code]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Chris Blakely]]
- Full Title: The Junior Developer’s Guide to Writing Super Clean and Readable Code
- Category: #articles
- URL: https://medium.com/p/cd2568e08aae

## Highlights
- Moved the displayOutput() logic into its own method - if the output needs to change, we only need to change it one place
---

---
## [[The Real Reason Quirky Failed]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Ben Einstein]]
- Full Title: The Real Reason Quirky Failed
- Category: #articles
- URL: https://medium.com/p/c362b3a3abd7

## Highlights
- Quirky was competing on all levels with all brands in every product category. This is a losing strategy for any startup.
- Quirky systematically broke the cardinal rule of startups: iterate rapidly to build a product people love.
---

---
## [[The Truth About Your Source of Truth]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Dave Taubler]]
- Full Title: The Truth About Your Source of Truth
- Category: #articles
- URL: https://medium.com/p/a1eb833c2d70

## Highlights
- Common wisdom has it that every domain entity in our enterprise should live in exactly one centralized location. If you want to fetch an instance of that entity, you go to that location
---

---
## [[The Two Pillars of JavaScript]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Eric Elliott]]
- Full Title: The Two Pillars of JavaScript
- Category: #articles
- URL: https://medium.com/p/ee6f3281e7f3

## Highlights
- The copy mechanism is another form of prototypal inheritance. Sources of clone properties are a specific kind of prototype called exemplar prototypes, and cloning an exemplar prototype is known as concatenative inheritance.
- If constructor behavior is the frying pan, classical inheritance isn’t the fire; it’s the fire from Dante’s seventh circle of hell.
- JavaScript doesn’t need constructor functions because any function can return a new object. With dynamic object extension, object literals and `Object.create()`, we have everything we need — with none of the mess. And `this` behaves just like it does in any other function. Hurray!
- In JavaScript, factory functions are simply constructor functions minus the `new` requirement, global pollution danger and awkward limitations (including that annoying initial capitalized letter convention)...

---
## [[Understanding State and Props in React]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Ruairidh Wynne-McHardy]]
- Full Title: Understanding State and Props in React
- Category: #articles
- URL: https://medium.com/p/94bc09232b9c

## Highlights
- State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.
- Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed.
- Props and State do similar things but are used in different ways. The majority of your components will probably be stateless.
- So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast...

---

---
## [[Use a Render Prop]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Michael Jackson]]
- Full Title: Use a Render Prop!
- Category: #articles
- URL: https://medium.com/p/50de598f11ce

## Highlights
- A render prop is a function prop that a component uses to know what to render.
---

---
## [[What I’m Telling Business People About Why Relational Databases Are So Bad]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Lance Gutteridge]]
- Full Title: What I’m Telling Business People About Why Relational Databases Are So Bad
- Category: #articles
- URL: https://medium.com/p/6f38d3d6c995

## Highlights
- In fact, the mathematical theory of relations eschews the concept of a connection between the related objects and defines relationship just as the set of the related things.
---

---
## [[When I’m Hiring, I Find Most People Don’t Understand the Purpose of Commenting.]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[Brian Lee Yung Rowe]]
- Full Title: When I’m Hiring, I Find Most People Don’t Understand the Purpose of Commenting.
- Category: #articles
- URL: https://medium.com/p/4f1ca936640a

## Highlights
- most people comment on the “what" and not the “why". Code that is self-documenting rarely needs an explanation of what it is doing.
---

---
## [[When the Racist Is Someone You Know and Love…]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Katherine Fugate]]
- Full Title: When the Racist Is Someone You Know and Love…
- Category: #articles
- URL: https://medium.com/p/2933c7049182

## Highlights
- Like most kids from dysfunctional homes, I’ve never felt good enough...
---

---
## [[Why Creators Are in Less of a Rush to Quit Their Day Jobs]]

![rw-book-cover](https://substackcdn.com/image/fetch/w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fad127a5d-7397-4297-b51b-902e3d856022_256x256.png)

## Metadata
- Author: [[Simon Owens]]
- Full Title: Why Creators Are in Less of a Rush to Quit Their Day Jobs
- Category: #articles
- URL: https://simonowens.substack.com/p/why-creators-are-in-less-of-a-rush

## Highlights
- A small percentage will make enough to quit their 9-to-5 and pursue content creation full-time. However, a growing number of so-called “influencers” are rejecting this move, even when their follower count indicates they could be earning enough off social media alone. Instead, they are opting to keep their day jobs, and, for some, it’s proving lucrative. ([View Highlight](https://read.readwise.io/read/01gphaxcky165v1vxsp6943vzn))
    - Tags: [[favorite]] 

---

---
## [[Why Everyone Is Talking About Isomorphic  Universal JavaScript and Why It Matters]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Azat Mardan]]
- Full Title: Why Everyone Is Talking About Isomorphic / Universal JavaScript and Why It Matters
- Category: #articles
- URL: https://medium.com/p/38c07c87905

## Highlights
- Isomorphism as applied to web development means rendering pages on both the server and client side.
---

---
## [[Why Most Fitness Apps Don’t Work]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

## Metadata
- Author: [[Nir Eyal]]
- Full Title: Why Most Fitness Apps Don’t Work
- Category: #articles
- URL: https://medium.com/p/736feda86507

## Highlights
- Evidence that the calories in, calories out theory is too simplistic is plentiful. For example, doctors have known for some time that certain medications cause patients to gain or lose weight by changing hormone levels in the body. If putting on pounds was just a matter of “energy balance” then these medications shouldn’t make people heavier. But they do.
---

---
## [[Why the Founder of Rails Automatically Rejects 80 Percent of Software Engineer Applicants]]

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Christophe Limpalair]]
- Full Title: Why the Founder of Rails Automatically Rejects 80% of Software Engineer Applicants
- Category: #articles
- URL: https://medium.com/p/4e2a4d255f58

## Highlights
- Before you show off code to an employer, go through it line by line and clean it up: Have more meaningful names, delete commented out lines of code, leave meaningful comments but don’t overdo it.
- follow standards even if it takes more time and slows you down.
---


