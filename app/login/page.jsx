"use client"

import Image from "next/image"
import LoginStyles from "./Login.module.scss"
import Button from "../component/Button/component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { faDiscord, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import Link from "next/link"

export default function LoginPage(params) {

    const [number, setNumber] = useState(null)
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [confirmingEmail, setConfirmingEmail] = useState(false)
    const [emailCorrect, setEmailCorrect] = useState(false)
    const [step, setStep] = useState("email")

    useEffect(() => {

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regexEmail.test(email) == true) {
            setEmailCorrect(true)
        }
        else {
            setEmailCorrect(false)
        }

    },[email])

    const didYouKnowTexts = [
        "Our server has zero packet loss always?",
        "You’ll enjoy super low ping battles?",
        "Our lobby looks unreal, like a dream?",
        "We host the funniest game modes ever?",
        "Our PvP is smooth, fast and competitive?",
        "You can fight lag-free even in Iran?",
        "Our lobby is better than real life?",
        "Our minigames bring joy every single round?",
        "Funny events happen daily on our server?",
        "We have high-quality PvP unlike anywhere else?",
    ]

    useEffect(() => {
        const random = Math.floor(Math.random() * 10);
        setNumber(random);
    },[])

    
    const signInWithEmail = async () => {

        setConfirmingEmail(true)

        const supabase = createClient()

        const signIn = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                shouldCreateUser: true
            }
        })

        console.log(signIn);

        if (signIn.data.user == null) {
            setStep("otp")
        }
        else {
            alert("There's A Problem In Signing In")
            setConfirmingEmail(false)
        }

    }

    
    const signInWithOAuth = async (platform) => {
        const supabase = createClient()

        const signIn = await supabase.auth.signInWithOAuth({
            provider: platform,
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_HOST}/api/auth/callback`,
            }
        })

    }

    
    const handleSubmit = async (otpCode) => {

        const supabase = createClient()

        const {data, error} = await supabase.auth.verifyOtp({
            email: email,
            token: otpCode,
            type: "email"
        })

        if (data.user) {
            window.location.href = "/dashboard"
        }

    };

    useEffect(() => {
        if (otp.length == 6) {
            handleSubmit(otp)
        }
    },[otp])

    return (
        <div className={LoginStyles.loginContainer}>
            <div className={LoginStyles.login}>
                <h1>ZentraPvP</h1>
                {step == "email" ? (
                    <>
                    
                        <h2>🔥 Let's Login Through Your Account 🔥</h2>
                        <div className={LoginStyles.loginInput} >
                            <input value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Please Enter Your Email Address" />
                            <Button type={ !emailCorrect || confirmingEmail ? "disabled" : "alt"} onClick={() => {signInWithEmail()}} disabled={!emailCorrect || confirmingEmail} >
                                <p>Continue</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Button>
                        </div>
                    
                    </>
                ) : (
                    <>
                    
                        <h2>✅ One Time Password Sent To Your Email ✅</h2>
                        <p>Check {email} Inbox Or Spam Folder</p>
                        <div className={LoginStyles.loginInput} >
                            <input style={{width: "100%"}} max={"6"} maxLength={"6"} value={otp} onChange={(e) => {setOtp(e.target.value)}} placeholder={`123456`} />
                        </div>
                    
                    </>
                )}
                <div className={LoginStyles.orLine}>
                    <p>Or , Login With</p>
                </div>
                <div className={LoginStyles.providers}>
                    <Button className={LoginStyles.discord} onClick={() => {signInWithOAuth("discord")}} >
                        <FontAwesomeIcon icon={faDiscord} />
                        <p>Discord</p>
                    </Button>
                    <Button className={LoginStyles.google} onClick={() => {signInWithOAuth("google")}} >
                        <FontAwesomeIcon icon={faGoogle} />
                        <p>Google</p>
                    </Button>
                    <Button className={LoginStyles.cortik}>
                        <div
                            className={LoginStyles.overlay}
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundSize: "128px",
                                backgroundRepeat: "repeat",
                                backgroundImage: "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
                                opacity: 0.05,
                                borderRadius: 0,
                                position: "fixed",
                                top: 0,
                                left: 0,
                                zIndex: 90,
                                pointerEvents: "none",
                                margin: "0"
                            }}
                        ></div>
                        <Image width={50} height={50} alt="Cortik Logo" src={`https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/logo/Cortik%20White%20Logo.png`} />
                        <p>Cortik</p>
                    </Button>
                </div>
                <div className={LoginStyles.didYouKnowLine} />
                <p style={{opacity: number ? "1" : "0"}} className={LoginStyles.didYouKnow}>Did you know</p>
                <p style={{opacity: number ? "1" : "0"}} className={LoginStyles.didYouKnowText}>{didYouKnowTexts[number]}</p>

                <p className={LoginStyles.security}>Make sure you are on <Link href={`https://zentrapvp.com`} >https://zentrapvp.com</Link></p>

            </div>
            <div className={LoginStyles.image}>
                <Image width={1920} height={1080} alt="ZentraPvP" src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/zentrapvp/login/huge_2025-08-21_14.41.48_fhd.png`} />
            </div>
        </div>  
    )
}