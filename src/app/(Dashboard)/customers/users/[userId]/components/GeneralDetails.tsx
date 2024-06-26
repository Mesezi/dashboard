import React, { FC } from "react";
import styles from "../UserDetails.module.scss";

interface SectionProps {
  title: string;
  information: any;
}

interface GeneralDetailsProps {
    data: any;
}

const PersonalInformation: FC<SectionProps> = ({ title, information }) => {
  return (
    <div className={styles.userInfoSection}>
      <h5>{title}</h5>

      <section>
        <article>
          <h5>Full name</h5>
          <p>{information.fullName}</p>
        </article>

        <article>
          <h5>Phone number</h5>
          <p>{information.phoneNumber}</p>
        </article>

        <article>
          <h5>Email Address</h5>
          <p>{information.email}</p>
        </article>

        <article>
          <h5>BVN</h5>
          <p>{information.bvn}</p>
        </article>

        <article>
          <h5>Gender</h5>
          <p>{information.gender}</p>
        </article>

        <article>
          <h5>Marital status</h5>
          <p>{information.marital}</p>
        </article>

        <article>
          <h5>Children</h5>
          <p>{information.children}</p>
        </article>

        <article>
          <h5>Type of Residence</h5>
          <p>{information.typeOfResidence}</p>
        </article>
      </section>
    </div>
  );
};

const GuarantorInformation: FC<SectionProps> = ({ title, information }) => {
  return (
    <div className={styles.userInfoSection}>
      <h5>{title}</h5>

      {information.map((item: any) => (
        <section>
          <article>
            <h5>Full name</h5>
            <p>{item.fullName}</p>
          </article>

          <article>
            <h5>Phone number</h5>
            <p>{item.phoneNumber}</p>
          </article>

          <article>
            <h5>Email Address</h5>
            <p>{item.email}</p>
          </article>

          <article>
            <h5>Relationship</h5>
            <p>{item.relationship}</p>
          </article>
        </section>
      ))}
    </div>
  );
};

const EducationAndEmploymentInformation: FC<SectionProps> = ({
  title,
  information,
}) => {
  return (
    <div className={styles.userInfoSection}>
      <h5>{title}</h5>

      <section>
        <article>
          <h5>level of education</h5>
          <p>{information.levelOfEducation}</p>
        </article>

        <article>
          <h5>employment status</h5>
          <p>{information.employmentStatus}</p>
        </article>

        <article>
          <h5>Sector of employment</h5>
          <p>{information.sectorOfEmployment}</p>
        </article>

        <article>
          <h5>duration of employment</h5>
          <p>{information.durationOfEmployment}</p>
        </article>

        <article>
          <h5>office email</h5>
          <p>{information.officeEmail}</p>
        </article>

        <article>
          <h5>Monthly income</h5>
          <p>{information.monthlyIncome}</p>
        </article>

        <article>
          <h5>Loan repayment</h5>
          <p>{information.loanRepayment}</p>
        </article>
      </section>
    </div>
  );
};

const SocialsInformation: FC<SectionProps> = ({ title, information }) => {
  return (
    <div className={styles.userInfoSection}>
      <h5>{title}</h5>

      <section>
        <article>
          <h5>twitter</h5>
          <p>{information.twitter}</p>
        </article>

        <article>
          <h5>facebook</h5>
          <p>{information.facebook}</p>
        </article>

        <article>
          <h5>instagram</h5>
          <p>{information.instagram}</p>
        </article>
      </section>
    </div>
  );
};

const GeneralDetails: FC<GeneralDetailsProps> = ({ data }) => {
    if(!data)
        return <></>
        
  return (
    <section className={styles.generalInfoSections}>
      <PersonalInformation
        title={"personal information"}
        information={data.personalInformation}
      />
      <EducationAndEmploymentInformation
        title={"education and employment"}
        information={data.educationAndEmploymentInformation}
      />
      <SocialsInformation
        title={"socials"}
        information={data.socialsInformation}
      />

      <GuarantorInformation
        title={"Guarantor"}
        information={data.guarantor}
      />
    </section>
  );
};

export default GeneralDetails;
