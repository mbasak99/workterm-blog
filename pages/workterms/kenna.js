import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/kenna.module.css";

export default function KennaTerm() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/site_tech/antd_logo.svg" />
        <title>Kenna</title>
      </Head>
      <h1>Kenna (May 2020 - December 2020)</h1>
      <div>
        <h2>First Experience</h2>
        <p>
          I was a bit nervous when I first started since it was my first ever
          co-op work term, and I had never coded in a professional environment
          before. I was also worried whether I'd be able to pick things up that
          are specific to Kenna such as utilizing certain tools in a specific
          way, or things of that nature. But looking back now I think that was
          foolish as I had great support from fellow developers and my
          mentor/supervisor who were always willing to lend a hand when I was
          stuck. Kenna also documented their tools, projects and practically
          everything else very well. If there's a question to be asked, it's
          probably already answered in their Confluence documentation, and if
          it's not, then you're encouraged to add to the documentation to help
          those in the future.
        </p>
      </div>
      <div>
        <h2>About Kenna</h2>
        <span className={styles.para_format}>
          <p className={styles.left_para}>
            Kenna is a subsidiary of MDC Partners, an advertising and marketing
            holding company based in NYC with 50+ partner firms around the
            world. Kenna is a marketing solutions provider and is specialized in
            helping other businesses design and provide more unified experiences
            for their customers. They provide these unified experiences by
            enabling marketing and sales to easily interact and engage with
            customers and providing the information they want when it's wanted
            it. They have provided their services to create better customer
            experiences for many large brands such as Colgate, BASF, Nissan,
            Coca-Cola, Mercedes-Benz and many more!
          </p>
          <img
            src="/site_tech/kenna.png"
            height="100"
            width="100"
            alt="Kenna logo"
          />
        </span>
      </div>
      <div>
        <h2>Some Projects I Worked On</h2>
        <ul>
          <li>WALLTITE (Handlebars, jQuery, CSS, Node.js, MS SQL/T-SQL)</li>
          <li>BASF US/CAN In-Season Logistics (jQuery, CSS)</li>
          <li>Retail Connect Rep Tool (jQuery, CSS)</li>
          <li>BASF Event Management (React, CSS)</li>
          <li>Market Connect (React, Redux, Node.js, MS SQL/T-SQL)</li>
          <li>In-house tools/apps (MS SQL/T-SQL, LotusScript)</li>
        </ul>
        <span className={styles.kenna_projects}>
          <Image
            src="/site_tech/CSS3.svg"
            height="100"
            width="100"
            alt="CSS3 logo"
            layout="intrinsic"
          />
          <Image
            src="/site_tech/Nodejs.svg"
            height="100"
            width="100"
            alt="Node.js logo"
            layout="intrinsic"
          />
          <Image
            src="/site_tech/handlebars_logo.png"
            height="101"
            width="133"
            alt="Handlerbars logo"
            layout="intrinsic"
          />
          <Image
            src="/site_tech/react-icon.svg"
            height="100"
            width="100"
            alt="React logo"
            layout="intrinsic"
          />
          <Image
            src="/site_tech/redux.svg"
            height="100"
            width="100"
            alt="Redux logo"
            layout="intrinsic"
          />
          <Image
            src="/site_tech/jquery.png"
            height="100"
            width="183"
            alt="jQuery logo"
            layout="intrinsic"
          />
          <Image
            src="/site_tech/sql-server.png"
            height="100"
            width="163"
            alt="MS SQL logo"
            layout="intrinsic"
          />
        </span>
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
      <div>
        <h2>Acknowledgements</h2>
        <p>
          A huge shoutout to Kenna, first of all, when I received the co-op
          offer (which I promptly accepted) COVID-19 troubles were right around
          the corner but I was assured that all incoming and existing co-op
          students would still be able to work during their term(s) and they
          would provide everyone with all the necessary equipment to safely work
          from home. I was immensely grateful as I know not everyone in the
          co-op program could say the same. I also want to give a shoutout to
          the great people comprising Kenna for making the 8-month term
          enjoyable by hosting many social events and activities as many events
          had all the employees from all the departments get together online and
          just have fun, discuss topics, and/or learn something. I also would
          like to shoutout the amazing developers I was fortunate enough to work
          with, there was always someone ready to lend a hand whether it was to
          point me to the right place for something, helping debugging a piece
          of code, or anything else really. And last, but not least, I want to
          give a huge shoutout to my mentor and supervisor Nicholas Paul, who
          took me under his wing and taught me so much about the tools and
          technologies I'd have to work with, for being patient and
          understanding when I was stuck, and always being able to find the time
          to help me out even when his schedule would get hectic.
        </p>
      </div>
    </>
  );
}
