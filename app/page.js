"use client"

import Image from "next/image";
import Button from "./component/Button/component";
import HomepageStyles from "./Homepage.module.scss"

export default function Home() {
  return (
    <>
      <div className={HomepageStyles.mainSection}>
        <div className={HomepageStyles.mainContent}>
            <h1>ZentraPvP</h1>
            <p>The first Iranian Minecraft server focused on Compitition and PvP</p>
            <p>Step into a world where skill, strategy, and speed decide the victor!</p>
            <p>Join now to feel the real gaming compitition</p>
            <div className={HomepageStyles.actionsContainer}>
            <Button type={"alt"} >play.zentrapvp.com</Button>
            <Button href={`/login`}>Connect</Button>
            <Image className={`${HomepageStyles.topLeft}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/120px-Enchanted_Golden_Helmet_(item)%201.png`} />
            <Image className={`${HomepageStyles.topLeft} ${HomepageStyles.glow}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/120px-Enchanted_Golden_Helmet_(item)%201.png`} />
            <Image className={`${HomepageStyles.topRight}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/Creeper_Head_(S)_JE1%201.png`} />
            <Image className={`${HomepageStyles.topRight} ${HomepageStyles.glow}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/Creeper_Head_(S)_JE1%201.png`} />
            <Image className={`${HomepageStyles.bottomLeft}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/Enchanted_Diamond_Sword%201.png`} />
            <Image className={`${HomepageStyles.bottomLeft} ${HomepageStyles.glow}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/Enchanted_Diamond_Sword%201.png`} />
            <Image className={`${HomepageStyles.bottomRight}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/PotionOfNightVisionNew%201.png`} />
            <Image className={`${HomepageStyles.bottomRight} ${HomepageStyles.glow}`} width={150} height={150} alt="Yo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/PotionOfNightVisionNew%201.png`} />
            </div>
        </div>

      </div>
      <div className={HomepageStyles.footer}>
        <div className={HomepageStyles.version}>
          <p>ZentraPvP - BETA v1.0</p>
        </div>
        <div className={HomepageStyles.developers} >
          <p>Built with 💙 by</p>
          <a href="https://cortik.vercel.app" className={HomepageStyles.developer}>
            <img src="https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/Cortik%20White%20Logo.png" />
            <p>Cortik</p>
          </a>
          <p>&</p>
          <a href="https://praxime.me" className={HomepageStyles.developer}>
            <img src="https://cdn.praxime.me/praximenobg.png" />
            <p>Praxime</p>
          </a>
        </div>
        <div className={HomepageStyles.empty}>

        </div>
      </div>

      
      
    </>
  );
}
