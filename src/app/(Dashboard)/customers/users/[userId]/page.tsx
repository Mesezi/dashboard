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
import { User } from "@/types";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

  const fetchUserDetails = async ()=>{
    try {
      const response = await getUserDetails(params.userId);
      return response;
    } catch (err) {
      toast.error("Error getting data");
    }
  }

  const { data, isLoading, isError } = useQuery<User>({
    queryKey: ["user-details", params.userId],
    queryFn: () => fetchUserDetails(),
  });

  const UserTierIcons = ({ tier }: {tier:number}) => {
    const icons = [];
    for (let i = 0; i < tier; i++) {
      icons.push(<StarFilledIcon />);
    }
    for (let i = tier; i < 3; i++) {
      icons.push(<StarOutlineIcon />);
    }
  
    return <div>{icons}</div>;
  };

  console.log(data)

  return (
    <div>
      <button className={styles.backBtn} onClick={() => router.back()}>
        <BackArrowIcon /> Back to Users
      </button>

      { isLoading && <div className={styles.loadingContainer}>
<AiOutlineLoading3Quarters />
    </div> }

       {!isLoading && !isError && <>
      <div className={styles.heading}>
        <h2>User Details</h2>

        <div>
          <button>Blacklist user</button>
          <button>Activate user</button>
        </div>
      </div>

      <section className={styles.basicInfo}>
        <div>
          <img src={"/assets/images/user-icon.png"} alt="" />
          <article>
            <div className={styles.name}>
              <h3>{data?.username.split(' ')[0]}</h3>
              <p>{data?.username.split(' ')[1]}</p>
            </div>

            <div className={styles.usersTier}>
              <p>User's Tier</p>
              <div>
                <UserTierIcons tier={data?.usersTier ?? 0}/>
              </div>
            </div>

            <div className={styles.loanDetails}>
              <h4>{data?.loanAmount}</h4>
              <p>{data?.accountNumber}/{data?.bankName}</p>
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
        <GeneralDetails data={data} />
      )}
      </> }
    </div>
  );
};

export default page;
