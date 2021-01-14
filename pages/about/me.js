import Head from "next/head";
import Image from "next/image";
import { Popover } from "antd";
import styles from "../../styles/me.module.css";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animations/config";

const popoverContent = (link) => {
  return (
    <div>
      <a href={link}>Listen on Spotify</a>
    </div>
  );
};

export default function AboutMe() {
  return (
    <motion.div animate="animate" initial="initial">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>About Me</title>
      </Head>
      <h1>Things I Like To Do</h1>
      <div className="content-container">
        <h2>Gaming</h2>
        <p>
          I've been gaming for the majority of my life and it's something I love
          to do, whether it's gaming with friends on multiplayer games like
          Rainbox Six Siege or losing myself in beautifully crafted and
          immersive games. Some of my favourite games include: God of War, Red
          Dead Redemption 2, Bloodborne, Ghost of Tsushima, The Witcher 3: Wild
          Hunt, and The Last of Us. As of writing this, I've been playing
          Bloodborne (and its DLC) and really enjoying the challenge the game
          brings along with the beautifully written scores for the game's many
          boss fights.
        </p>
        <motion.span variants={stagger} className={styles.img_collection}>
          <motion.div variants={fadeInUp}>
            <Image
              src="/games/gow_cover.jpg"
              alt="God of War cover"
              width="400"
              height="225"
              layout="intrinsic"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/games/got_cover.jpg"
              alt="Ghost of Tsushima cover"
              width="400"
              height="225"
              layout="intrinsic"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/games/bloodborne_cover.jpg"
              alt="Bloodborne cover"
              width="400"
              height="225"
              layout="intrinsic"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/games/tlou_cover.jpg"
              alt="The Last of Us cover"
              width="400"
              height="225"
              layout="intrinsic"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/games/rdr2_cover.jpg"
              alt="Red Dead Redemption 2 cover"
              width="400"
              height="225"
              layout="intrinsic"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/games/witcher3_cover.jpg"
              alt="The Witcher 3: Wild Hunt cover"
              width="400"
              height="225"
              layout="intrinsic"
            />
          </motion.div>
        </motion.span>
      </div>
      <div className="content-container">
        <h2>Music</h2>
        <p>
          I think everyone likes to listen to music right? You'll mostly catch
          me listening to Rap/Hip-hop and Pop. Some of my favourite/most
          listened to artists right now are Drake, Logic, J. Cole, Denzel Curry,
          and The Weeknd (with The Weeknd being my favourite and most listened
          to out of the bunch). Some of my favourite albums include: Trilogy by
          The Weeknd, Starboy by The Weeknd, After Hours by The Weeknd, Under
          Pressure by Logic, 2014 Forest Hills Drive by J. Cole, K.O.D. by J.
          Cole, and Under Pressure by Logic.
        </p>
        <motion.span variants={stagger} className={styles.img_collection}>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/5EbpxRwbbpCJUepbqVTZ1U?si=ihk6UiQDSEuAqCvS-JD8JA",
            )}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/albums/trilogy_cover.jpg"
                alt="Trilogy by The Weeknd album cover"
                width="300"
                height="300"
                layout="intrinsic"
              />
            </motion.div>
          </Popover>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/7viNUmZZ8ztn2UB4XB3jIL?si=rnzTzHg-QECRtY1Ipth2NQ",
            )}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/albums/2014_forest_hills_drive_cover.jpg"
                alt="2014 Forest Hills Drive by J. Cole album cover"
                width="300"
                height="300"
                layout="intrinsic"
              />
            </motion.div>
          </Popover>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe?si=LWCPlFMAQQa_GC_gs41flA",
            )}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/albums/starboy_cover.jpg"
                alt="Starboy by The Weeknd album cover"
                width="300"
                height="300"
                layout="intrinsic"
              />
            </motion.div>
          </Popover>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/4Wv5UAieM1LDEYVq5WmqDd?si=-ku_mGXyRqCp85QR9oGzRg",
            )}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/albums/kod_cover.jpg"
                alt="K.O.D. by J. Cole album cover"
                width="300"
                height="300"
                layout="intrinsic"
              />
            </motion.div>
          </Popover>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/6YlDIxqEjvY63ffH6AwCjd?si=wnOpnC6wRrmyyLrGcptDxw",
            )}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/albums/after_hours_cover.jpg"
                alt="After Hours by The Weeknd album cover"
                width="300"
                height="300"
                layout="intrinsic"
              />
            </motion.div>
          </Popover>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/1Mk7Lei0Ra3hawezqmad5V?si=2LIuGuXfRwa5Xt61pfQwFg",
            )}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="/albums/under_pressure_cover.jpg"
                alt="Under Pressure by Logic album cover"
                width="300"
                height="300"
                layout="intrinsic"
              />
            </motion.div>
          </Popover>
        </motion.span>
      </div>
    </motion.div>
  );
}
