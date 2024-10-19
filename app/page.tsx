"use client";
import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";



const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen overflow-hidden">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500 ">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
      <Link href="http://localhost:8501" target="_blank">
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#24AE7C",
            borderRadius: "14px",
            border: "none",
            color: "black",
            fontSize: "16px",
            position: "absolute",
            fontWeight: "600",
            bottom: "30px",
            right: "20px",
            padding: "20px 20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/assets/icons/chatbot-icon.svg" 
            height={20}
            width={20}
            alt="chatbot"
            className="mr-2"
          />
          Chatbot
        </div>
      </Link>
    </div>
  );
};

export default Home;
