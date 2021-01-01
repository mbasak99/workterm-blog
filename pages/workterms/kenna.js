import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animations/config";

export default function KennaTerm() {
  return (
    <motion.div animate="animate" initial="initial">
      <Head>
        <title>Kenna</title>
      </Head>
      <h1>Kenna (May 2020 - December 2020)</h1>
      <div>
        <h2>First Experience</h2>
        <p>
          I was a bit nervous when I first started out since it was my first
          ever co-op work term, and I had never coded in a professional
          environment before. I was also worried whether I'd be able to pick
          things up that are specifc to Kenna such as utilizing certain tools in
          a specific way, or things of that nature. But looking back now I think
          that was foolish as I had great support from fellow developers and my
          mentor who were always willing to lend a hand when I was stuck. Kenna
          also documented their tools, projects and practically everything else
          very well, if there's a question to be asked, it's probably been
          answered in their Confluence documentation, and if it's not, then
          you're encouraged to add to the documentation to help those in the
          future.
        </p>
      </div>
      <div>
        <h2>About Kenna</h2>
        <p>
          Kenna provides Customer Relationship Management *not done yet*. They
          have provided their services to create better customer experiences for
          many large brands such as Colgate, BASF, Nissan, Coca Cola,
          Mercedes-Benz and many more!
        </p>
      </div>
      <motion.div variants={stagger}>
        <motion.h2 variants={fadeInUp}>My Goals</motion.h2>
        <motion.ul variants={stagger}>
          <motion.li variants={fadeInUp}>
            Become more experienced with JavaScript and JS libraries
          </motion.li>
          <motion.li variants={fadeInUp}>
            Gain experience in a professional environment
          </motion.li>
          <motion.li variants={fadeInUp}>
            Gain experience using backend technologies such as Node.js and SQL
          </motion.li>
          <motion.li variants={fadeInUp}>
            Become more experienced with CSS
          </motion.li>
          <motion.li variants={fadeInUp}>
            Become more comfortable reading documentation
          </motion.li>
          <motion.li variants={fadeInUp}>
            Become more adept at debugging code
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div variants={stagger}>
        <motion.h2 variants={fadeInUp}>Some Projects I Worked On</motion.h2>
        <motion.ul variants={stagger}>
          <motion.li variants={fadeInUp}>
            WALLTITE (Handlebars, jQuery, CSS, Node.js, T-SQL)
          </motion.li>
          <motion.li variants={fadeInUp}>
            BASF US/CAN In-Season Logistics (jQuery, CSS)
          </motion.li>
          <motion.li variants={fadeInUp}>
            Retail Connect Rep Tool (jQuery, CSS)
          </motion.li>
          <motion.li variants={fadeInUp}>
            BASF Event Management (React, CSS)
          </motion.li>
          <motion.li variants={fadeInUp}>
            Market Connect (React, Redux, Node.js, T-SQL)
          </motion.li>
          <motion.li variants={fadeInUp}>
            In-house tools (SQL, LotusScript)
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div variants={stagger}>
        <motion.h2 variants={fadeInUp}>What I've Learned</motion.h2>
        <motion.ul variants={stagger}>
          <motion.li variants={fadeInUp}>
            <p>
              Working across the many projects I had been placed on, I've
              learned so much from when I first started out. One of the first
              things I learned was certain projects had to support older and
              outdated browsers which can sometimes be a huge pain, I'm looking
              at you IE11. A lot of the nice things ES6 brings such as arrow
              functions, spread syntax, template strings, and destructuring just
              to name a few that I really missed. But after a while you start
              remembering to not use them and remember to keep testing with
              IE11, the latter being a bit harder for me to remember as the I
              hadn't used IE11 for many, many years and honestly would forget it
              existed at times.
            </p>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <p>
              Working on WALLTITE and BASF In-Season Logistics allowed me to get
              more backend experience, especially on WALLTITE as I was the only
              one was working in the backend (Node.js and T-SQL), but I got to
              learn a lot because of that reason and because I had never had
              experience working with SQL at all. In WALLTITE I learned about
              updating existing data in tables, and removing and adding data in
              tables. Near the end of my work term, I was tasked with making a
              'Forgot My Password' feature that would be implemented at a later
              date,
            </p>
          </motion.li>
          <motion.li variants={fadeInUp}></motion.li>
          <motion.li variants={fadeInUp}></motion.li>
          <motion.li variants={fadeInUp}></motion.li>
        </motion.ul>
      </motion.div>
      <div>
        <h2>Acknowledgements</h2>
        <p>
          A huge shoutout to Kenna, first of all, when I received the co-op
          offer (which I promptly accepted) COVID-19 troubles were right around
          the corner but I was assured that all incoming and existing co-op
          students would still be able to work during their term(s) and they
          would provide everyone with all the necessary equipment to safely work
          from home. I was immensely grateful as I know not everyone in the
          co-op program could say the same. I also want to shoutout the great
          people comprising Kenna for making the 8-month term enjoyable by
          hosting many social events and activites as there were many events
          that had all the employees from all the departments get together
          online and just have fun, discuss topics, and/or learn something. I
          also would like to shoutout the amazing developers I was fortunate
          enough to work with, there was always someone ready to lend a hand
          whether it was to point me to the right place for something, helping
          debugging a piece of code, or anything else really. And last, but
          definitely not least, I want to give a huge shoutout to my mentor and
          supervisor Nicholas Paul, who took me under his wing and taught me so
          much about the tools and technolgies I'd have to work with, for being
          patient and understanding when I was stuck, and always being able to
          find the time to help me out even when his schedule would get hectic.
        </p>
      </div>
    </motion.div>
  );
}
