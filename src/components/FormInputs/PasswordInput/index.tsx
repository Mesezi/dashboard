import React, { useState, Dispatch, SetStateAction } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./passwordInput.module.scss"; // Import the SCSS module

interface FieldProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
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
  onChange,
  className,
  isDisabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
          <div className={styles.root}>
            <input
              {...field}
              type={showPassword ? "text" : 'password'}
              placeholder={placeholder}
              onChange={(event) => {
                field.onChange(event);
                if (onChange) onChange(event);
              }}
              className={`${styles.input} ${meta.touched && meta.error ? styles.error : ""} ${field.value ? styles['has-value'] : ""}`}
              disabled={isDisabled}
            />
            
              <span
                className={styles.show}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            
          </div>
        )}
      </Field>
      <span className={styles.errorMessage}>
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default FormInput;
