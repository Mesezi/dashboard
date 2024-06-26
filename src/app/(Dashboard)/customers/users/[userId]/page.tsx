"use client";
import {
  BackArrowIcon,
  StarFilledIcon,
  StarOutlineIcon,
} from "@/components/Icons";
import { getUserDetails } from "@/services/users";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styles from "./UserDetails.module.scss";
import GeneralDetails from "./components/GeneralDetails";
import { useRouter } from "next/navigation";

const tabOptions = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const page = ({ params }: { params: { userId: string } }) => {
  const [view, setView] = useState("general details");
  const router = useRouter();
  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["user-details", params.userId],
    queryFn: () => getUserDetails(params.userId),
    staleTime: 5 * 1000,
    refetchInterval: 5 * 1000,
    refetchIntervalInBackground: true,
  });

  const extraData = {
    personalInformation: {
      fullName: "Grace",
      phoneNumber: "08727272",
      email: "test@gmail.com",
      bvn: "12372891772",
      marital: "Single",
      gender: "Male",
      children: "None",
      typeOfResidence: "School Hostel",
    },
    educationAndEmploymentInformation: {
      levelOfEducation: "B.Sc",
      employmentStatus: "Employed",
      sectorOfEmployment: "FinTech",
      durationOfEmployment: "2 years",
      officeEmail: "itry@lendsqr.com",
      monthlyIncome: "₦200,000.00- ₦400,000.00",
      loanRepayment: "₦40,000",
    },
    socialsInformation: {
      twitter: "@mesezi",
      facebook: "Gabriella",
      instagram: "@mesezi",
    },

    guarantor: [
      {
        fullName: "John Stewart",
        phoneNumber: "0812882771",
        email: "test@yahoo.com",
        relationship: "brother",
      },
      {
        fullName: "Sandra",
        phoneNumber: "0812882771",
        email: "sandra@yahoo.com",
        relationship: "brother",
      },
    ],
  };

  return (
    <div>
      <button className={styles.backBtn} onClick={() => router.back()}>
        <BackArrowIcon /> Back to Users
      </button>

      <div className={styles.heading}>
        <h2>User Details</h2>

        <div>
          <button>Blacklist user</button>
          <button>Activate user</button>
        </div>
      </div>

      <section className={styles.basicInfo}>
        <div>
          <img src={data?.imageUrl ?? "/assets/images/user-icon.png"} alt="" />
          <article>
            <div className={styles.name}>
              <h3>Grace</h3>
              <p>Loremipsumdol</p>
            </div>

            <div className={styles.usersTier}>
              <p>User's Tier</p>
              <div>
                <StarFilledIcon />
                <StarOutlineIcon />
                <StarOutlineIcon />
              </div>
            </div>

            <div className={styles.loanDetails}>
              <h4>₦200,000.00</h4>
              <p>9912345678/Providus Bank</p>
            </div>
          </article>
        </div>

        <ul>
          {tabOptions.map((option) => (
            <li
              onClick={() => setView(option)}
              active-tab={
                option.toLowerCase() === view.toLowerCase() ? "true" : "false"
              }
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      </section>

      {view.toLowerCase() === "general details" && (
        <GeneralDetails extraData={extraData} />
      )}
    </div>
  );
};

export default page;
