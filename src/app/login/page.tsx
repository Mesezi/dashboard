"use client";
import React from "react";
import styles from "./login.module.scss";
import Input from "@/components/FormInputs/Input";
import Button from "@/components/FormInputs/Button";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LogintFormTypes {
  email: string;
  issueType: string;
}

const loginFormSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Please enter password"),
});

const page = () => {
  const router = useRouter();

  return (
    <main className={styles.root}>
      <section>
        <img
          src="/assets/images/lendsqr-logo.svg"
          alt="logo"
          className="logo"
        />
        <img
          src="/assets/images/sign-in-image.svg"
          alt="sign in"
          className="sign-in-image"
        />
      </section>

      <section>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              router.push("/customers/users");
              toast.success("Successfully logged in");
            }, 2000);
          }}
        >
          {({ values, setFieldValue, isSubmitting }) => {
            return (
              <Form>
                <div className="heading">
                  <h1>Welcome!</h1>
                  <p>Enter details to login.</p>
                </div>

                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setFieldValue("email", e.target.value);
                  }}
                />

                <PasswordInput
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setFieldValue("password", e.target.value);
                  }}
                />

                <a href="">FORGOT PASSWORD?</a>

                <Button isLoading={isSubmitting} disabled={isSubmitting}>
                  LOG IN
                </Button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </main>
  );
};

export default page;
