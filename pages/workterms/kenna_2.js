export default function KennaTerm2(){
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>Kenna (2022)</title>
            </Head>
            <div>
                <h2>Returning</h2>
                <p>For my last two 4 month terms I decided that I wanted to return to Kenna, as they had an amazing and supportive environment last time I was there. It was also an environment I was familiar with, so I felt like I'd be more comfortable and continue where I left off.</p>
            </div>
            <div>
        <h2>Overview of My Work Term</h2>
        <p>
          When I first started I was tasked with making small changes such as
          adjusting style changes for a particular piece of content or fixing
          relatively simple bugs like changing how a boolean value is set. But
          as my time at Kenna grew, along with my experience, I was assigned
          more and more significant tasks. I was assigned tasks that had me
          creating small features for certain projects' pages such as pop-ups
          for an action a user wanted to perform and finally transitioned to
          creating a full-page that contained multiple features based on a
          wireframe. I would also receive tasks that required me to iron out
          bugs that occurred and would require me to take more time and use the
          debugging tools available to hammer out the problems.
        </p>
        <span className={styles.overview}>
          <Image
            src="/misc/growth.jpg"
            height="400"
            width="533"
            alt="Growth"
            layout="intrinsic"
          />
        </span>
      </div>
      <div>
        <h2>Technologies I Wanted To Work With</h2>
        <p>
          I mainly wanted to work with any of the popular JS libraries such as
          React, and/or jQuery. I also wanted to work with back-end technologies
          such as Node.js and SQL.
        </p>
      </div>
      <div>
        <h2>Why Those Technologies?</h2>
        <p>
          I mainly wanted to work with jQuery and React libraries as they're
          used at most companies, but jQuery in particular because I have had to
          utilize the library for a course project making me familiar with it. I
          also wanted to work with back-end technologies because almost every
          application needs a database to store, retrieve and manipulate data,
          and a server that communicates with the database. SQL (or other
          similar query languages) is generally used to store data and Node.js
          is used to communicate with the database for web apps. At Kenna I got
          to work with those technologies, I initially started with a bit of
          React but was later put into projects that all used jQuery as that's
          where I was needed the most. I was also able to work with MS SQL
          Server databases for storing data and was able to work on Node.js
          projects creating routes and services that communicated with the
          database.
        </p>
        <span className={styles.kenna_projects}>
          <Image
            src="/misc/full-stack-web-development.jpg"
            height="300"
            width="600"
            alt="Fullstack diagram"
            layout="intrinsic"
          />
          <Image
            src="/misc/technology-stack-diagram.jpg"
            height="300"
            width="533"
            alt="Fullstack diagram"
            layout="intrinsic"
          />
        </span>
      </div>
      <div>
        <h2>My Goals</h2>
        <ul>
          <li>
            Become more experienced with JavaScript and JS framework/libraries
          </li>
          <li>
            Gain experience utilizing project management tools in a professional
            environment
          </li>
          <li>
            Gain experience using back-end technologies such as Node.js and SQL
          </li>
          <li>Become more experienced with CSS</li>
          <li>Become more comfortable reading documentation</li>
          <li>Become more adept at debugging code</li>
        </ul>
      </div>
      <div>
        <h2>Did I Achieve My Goals?</h2>
        <span className={styles.para_format} style={{ marginBottom: 10 }}>
          <img
            src="/misc/achieving-target-strategy.jpg"
            height="150"
            width="218"
            alt="Goals accomplished"
          />
          <p className={styles.right_para}>
            Yes, I've accomplished the goals I set through this work term.
          </p>
        </span>
        <p>
          To start, I've gained much experience working in projects that utilize
          JavaScript with all kinds of libraries, from Kendo UI which creates
          wonderful UI components to Underscore.js/Lodash a library that brings
          utility for common programming tasks but also HighCharts a library
          that visually renders data into different types of graphs.
        </p>
        <p>
          I was able to become more proficient with CSS, enhance my debugging
          skills and get better at reading documentation when I was assigned to
          work on the WALLTITE project, where I was one of the two devs working
          on it at the time. Due to that fact, I was able to take on more tasks
          and learn more about styling, debugging and reading the documentation
          for some of the tech that was used for this project. I was also able
          to solve a language toggle issue where the site's language would
          change for everyone from English to French (or vice versa) when many
          people were on the site during dev/test. This was an issue for a few
          months before I was brought on for the project.
        </p>
        <span className={styles.kenna_projects}>
          <Image
            src="/misc/devblog-debug.png"
            height="350"
            width="560"
            alt="Debugging"
            layout="intrinsic"
          />
        </span>
        <p>
          Throughout the work term, I was utilizing different project management
          tools such as JIRA to keep track of tickets assigned to me, but also
          to help break down some tasks that seemed large into more manageable
          sizes and also BitBucket for making sure the changes I create for a
          ticket are pushed into dev and above environments.
        </p>
        <span className={styles.kenna_projects}>
          <Image
            src="/misc/bitbucket_logo.png"
            height="150"
            width="530"
            alt="Bitbucket logo"
            layout="intrinsic"
          />
          <Image
            src="/misc/jira_logo.png"
            height="150"
            width="267"
            alt="JIRA logo"
            layout="intrinsic"
          />
        </span>
        <p>
          I was also able to accomplish my goal of working with back-end
          technologies over my work term, specifically with Node.js and SQL. I
          was tasked with creating a 'Forgot My Password' feature where I had to
          create unique tokens that the user could use to reset their account's
          password I utilized Node.js to create specific routes (for the AJAX
          calls in front-end) and call database procedures, while I had to use
          try/catch blocks, transactions statements, error throwing and some
          other logic on the SQL side to make everything work together (and
          correctly).
        </p>
      </div>
      <div>
        <h2>What Did I Learn?</h2>
        <div>
          <h3>Documentation</h3>
          <p>
            I learned how important having good documentation can save so much
            time and allow you to focus on solving the problem at hand. When I
            first started I did my best to go to the extensive documentation
            Kenna had on their Confluence site. As it would prevent me from
            defaulting to asking my peers as the first step and leave it as a
            last resort and allow myself to be more independent where I can be.
            It also made me painfully aware of how annoying bad documentation
            can be. One such time was when I was utilizing a Kendo UI (a
            JavaScript UI library) component for a project, where the
            information I was trying to find and understand was very minimal in
            their docs for that particular component.
          </p>
          <span className={styles.kenna_projects}>
            <Image
              src="/misc/tech_documentation.jpg"
              height="400"
              width="914"
              alt="Documentation"
              layout="intrinsic"
            />
          </span>
          <h3>Asking questions</h3>
          <p>
            I also learned that you might not always have the whole picture or
            that you might forget something over time, and if that happens
            asking questions can help so much. I was lucky enough to have great
            people around me in the dev teams and the business side teams, they
            made it possible where I wasn't afraid to ask questions when I was
            confused or just wanted more info on something. It's especially
            important to ask questions if the task at hand is time-sensitive,
            the sooner you ask questions the sooner you can complete tasks.
          </p>
          <span className={styles.kenna_projects}>
            <Image
              src="/misc/asking_questions.jpg"
              height=""
              width=""
              alt="Asking questions"
              layout="intrinsic"
            />
            <Image
              src="/misc/questions.png"
              height=""
              width=""
              alt="Questions"
              layout="intrinsic"
            />
          </span>
        </div>
      </div>
        </>
    )
}
