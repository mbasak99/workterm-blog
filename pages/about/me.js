import Head from "next/head";
import Image from "next/image";
import { Popover } from "antd";
import styles from "../../styles/me.module.css";

const popoverContent = (link) => {
  return (
    <div>
      <a href={link}>Listen on Spotify</a>
    </div>
  );
};

export default function AboutMe() {
  return (
    <>
      <Head>
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
        <span className={styles.img_collection}>
          <Image
            src="/games/gow_cover.jpg"
            width="400"
            height="225"
            layout="intrinsic"
          />
          <Image
            src="/games/got_cover.jpg"
            width="400"
            height="225"
            layout="intrinsic"
          />
          <Image
            src="/games/bloodborne_cover.jpg"
            width="400"
            height="225"
            layout="intrinsic"
          />
          <Image
            src="/games/tlou_cover.jpg"
            width="400"
            height="225"
            layout="intrinsic"
          />
          <Image
            src="/games/rdr2_cover.jpg"
            width="400"
            height="225"
            layout="intrinsic"
          />
          <Image
            src="/games/witcher3_cover.jpg"
            width="400"
            height="225"
            layout="intrinsic"
          />
        </span>
      </div>
      <div className="content-container">
        <h2>Music</h2>
        <p>
          I think everyone likes to listen to music right? You'll mostly catch
          me listening to Rap/Hip hop, Pop, and R&B. Some of my favourite/most
          listened to artists right now are Drake, Logic, J. Cole, Denzel Curry,
          and The Weeknd (with The Weeknd being my favourite and most listened
          to out of the bunch). Some of my favourite albums include: Trilogy by
          The Weeknd, Starboy by The Weeknd, After Hours by The Weeknd, Under
          Pressure by Logic, 2014 Forest Hills Drive by J. Cole, K.O.D. by J.
          Cole, and Under Pressure by Logic.
        </p>
        <span className={styles.img_collection}>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/5EbpxRwbbpCJUepbqVTZ1U?si=ihk6UiQDSEuAqCvS-JD8JA",
            )}
          >
            <Image
              src="/albums/trilogy_cover.jpg"
              width="300"
              height="300"
              layout="intrinsic"
            />
          </Popover>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/7viNUmZZ8ztn2UB4XB3jIL?si=rnzTzHg-QECRtY1Ipth2NQ",
            )}
          >
            <Image
              src="/albums/2014_forest_hills_drive_cover.jpg"
              width="300"
              height="300"
              layout="intrinsic"
            />
          </Popover>
          <Popover content={popoverContent()}>
            <Image
              src="/albums/starboy_cover.jpg"
              width="300"
              height="300"
              layout="intrinsic"
            />
          </Popover>
          <Popover content={popoverContent()}>
            <Image
              src="/albums/kod_cover.jpg"
              width="300"
              height="300"
              layout="intrinsic"
            />
          </Popover>
          <Popover
            content={popoverContent(
              "https://open.spotify.com/album/6YlDIxqEjvY63ffH6AwCjd?si=wnOpnC6wRrmyyLrGcptDxw",
            )}
          >
            <Image
              src="/albums/after_hours_cover.jpg"
              width="300"
              height="300"
              layout="intrinsic"
            />
          </Popover>
          <Popover content={popoverContent()}>
            <Image
              src="/albums/under_pressure_cover.jpg"
              width="300"
              height="300"
              layout="intrinsic"
            />
          </Popover>
        </span>
      </div>
    </>
  );
}
