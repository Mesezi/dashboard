import React, { Dispatch, SetStateAction } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./input.module.scss"; // Import the SCSS module

interface FieldProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: (event: any) => void;
  setFormikValue?: (value: any) => void;
  setStateAction?: Dispatch<SetStateAction<any>>;
  className?: string;
  isDisabled?: boolean;
}

const FormInput: React.FC<FieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  onChange,
  className,
  isDisabled,
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <Field id={id} name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors },
          meta,
        }: {
          field: any;
          form: any;
          meta: any;
        }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            onChange={(event) => {
              field.onChange(event);
              if (onChange) onChange(event);
            }}
            className={`${styles.input} ${meta.touched && meta.error ? styles.error : ""} ${field.value ? styles['has-value'] : ""}`}
            disabled={isDisabled}
          />
        )}
      </Field>
      <span className={styles.errorMessage}>
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default FormInput;
