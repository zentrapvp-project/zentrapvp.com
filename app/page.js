"use client"

import ComingSoonStyles from "./ComingSoon.module.scss"

export default function Home() {
  return (
    <div className={ComingSoonStyles.comingSoonContainer}>
      <div className={ComingSoonStyles.blueGlow} />
      <div className={ComingSoonStyles.blueGlow} />
      <div className={ComingSoonStyles.blueGlow} />
      <div className={ComingSoonStyles.blueGlow} />
      <div className={ComingSoonStyles.redGlow} />
      <div className={ComingSoonStyles.redGlow} />
      <div className={ComingSoonStyles.redGlow} />
      <div className={ComingSoonStyles.redGlow} />
      <video className={ComingSoonStyles.backgroundVideo} autoPlay muted loop controls={false} src="https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/noir/videos/202587-918431513_medium%20(1).mp4" />
      <div className={ComingSoonStyles.header}></div>
      <div className={ComingSoonStyles.main}>
        <h1>Coming Soon...</h1>
      </div>
      <div className={ComingSoonStyles.footer}>
          <p>Built with 💙 by</p>
        <a href="https://cortik.vercel.app" className={ComingSoonStyles.developer}>
          <img src="https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/noir/logo/Cortik%20White%20Logo.png" />
          <p>Cortik</p>
        </a>
        <p>&</p>
        <a href="https://praxime.me" className={ComingSoonStyles.developer}>
          <img src="https://cdn.praxime.me/friends/praximenobg.png" />
          <p>Praxime</p>
        </a>
      </div>
    </div>
  );
}
