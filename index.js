const posts = {
  1: {
    title: "Top 10 Web Development Trends Every Beginner Should Know",
    authorname: "Shreyanshu Soni",
    date: "12 May | 5 min read",
    image: "photo2.jpg",

    authorimg: "SH-photo.png",
    authorrole: "Full Stack Developer & Tech Blogger",
    authorbio:
      "I love sharing knowledge about web development, programming, and modern technologies to help beginners learn easily.",

    content: `
Web development is constantly evolving. New frameworks and technologies appear every year, making it exciting for developers and beginners.

If you are just starting your journey, it's important to stay updated with the latest trends in the industry.

In this article, we explore the top web development trends every beginner should know in 2025.

AI-powered tools, responsive design, serverless architecture, and no-code platforms are becoming very popular among developers.

Learning these trends early can help beginners build modern and future-ready websites.
`
  },

  2: {
    title: "How AI Is Changing Modern Technology and Student Learning",
    authorname: "Rahul Kumar",
    date: "10 May | 7 min read",
    image: "home.svg",

    authorimg: "rahul.jpeg",
    authorrole: "AI Enthusiast & Tech Writer",
    authorbio:
      "Rahul writes about Artificial Intelligence, future technologies, and how students can use modern tools for learning.",

    content: `
Artificial Intelligence is transforming the modern world rapidly.

Students are now using AI tools for coding, research, writing, and productivity improvement.

Technologies like ChatGPT, machine learning, and automation are helping industries work faster and smarter.

AI is also improving personalized learning systems and making education more interactive for students.

Understanding AI tools has become an important skill for every modern learner.
`
  },

  3: {
    title: "Beginner’s Guide to HTML, CSS and JavaScript Projects",
    authorname: "Ankit Raj",
    date: "08 May | 6 min read",
    image: "11.svg",

    authorimg: "ankit.jpeg",
    authorrole: "Frontend Developer & Mentor",
    authorbio:
      "Ankit helps beginners learn frontend development through simple projects and practical coding tutorials.",

    content: `
HTML, CSS, and JavaScript are the foundation of web development.

Beginners should start with small projects like landing pages, calculators, portfolios, and to-do apps.

These projects improve practical understanding and help developers gain confidence.

CSS helps in designing beautiful interfaces while JavaScript adds interactivity and dynamic behavior.

Building projects regularly is one of the fastest ways to become a better developer.
`
  },

  4: {
    title: "Best Coding Setup Ideas for Students and Developers",
    authorname: "Priya Sharma",
    date: "06 May | 4 min read",
    image: "4.png",

    authorimg: "priya.jpeg",
    authorrole: "UI Designer & Productivity Blogger",
    authorbio:
      "Priya shares workspace setup ideas, productivity hacks, and creative desk inspiration for students and developers.",

    content: `
A good coding setup can improve productivity and focus.

Students should use a comfortable chair, proper lighting, and a clean desk arrangement.

Using dual monitors, mechanical keyboards, and minimal workspace designs can improve the development experience.

Good setups are not always expensive — even simple and organized environments work well.

The goal is to create a distraction-free space for learning and coding.
`
  },

  5: {
    title: "Why Responsive Design Is Important for Every Website",
    authorname: "Aman Verma",
    date: "04 May | 5 min read",
    image: "3.png",

    authorimg: "aman.jpeg",
    authorrole: "Responsive Web Designer",
    authorbio:
      "Aman focuses on modern responsive websites and teaches developers how to build mobile-friendly interfaces.",

    content: `
Responsive design ensures that websites look good on all devices.

Modern users browse websites using phones, tablets, laptops, and desktops.

A responsive website automatically adjusts layouts, images, and content according to screen size.

Responsive design also improves user experience and SEO rankings.

Every modern web developer should learn responsive web design techniques.
`
  },

  6: {
    title: "Easy Productivity Tips for College Students and Bloggers",
    authorname: "Neha Singh",
    date: "02 May | 3 min read",
    image: "2.png",

    authorimg: "neha.jpeg",
    authorole: "Student Blogger & Content Creator",
    authorbio:
      "Neha writes about student productivity, blogging consistency, and self-improvement habits for learners.",

    content: `
Productivity plays an important role in student life and blogging.

Creating daily goals and maintaining a schedule can help improve consistency.

Avoiding distractions and using tools like timers and to-do lists can increase focus.

Bloggers should also maintain a habit of writing regularly and learning continuously.

Small daily improvements lead to long-term success and growth.
`
  }
};


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const post = posts[id];

if (post) {
    document.querySelector(".article-1 h2").innerText = post.title;

    document.querySelector(".article-1 span").innerText =
        post.authorname + " | " + post.date;

    document.querySelector(".article-1 img").src = post.image;

    document.querySelector(".content-text").innerText = post.content;

    document.querySelector(".authorimg").src= post.authorimg;

    document.querySelector(".authorname").innerText= post.authorname;

    document.querySelector(".authorbio").innerText= post.authorbio;

    document.querySelector(".authorrole").innerText= post.authorrole;

      }
