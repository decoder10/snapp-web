import React, { FC } from 'react';

const ForgotPassword: FC = () => {
  // const navigation = useNavigate();
  // const forgotPasswordRef = useRef<IRefForgotPasswordFormFields>({
  //   password: null,
  //   confirmPassword: null,
  //   otp: null,
  // });
  // const [forgotPasswordData, setForgotPasswordData] = useState<IForgotPasswordFormFields>({
  //   password: '',
  //   confirmPassword: '',
  //   otp: '',
  // });
  // const [errors, setErrors] = useState<Partial<IForgotPasswordFormFields>>({});
  // const validator = new ForgotPasswordValidator();
  //
  // const fgFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //
  //   setForgotPasswordData({ ...forgotPasswordData, ...{ [name]: value } });
  // };
  //
  // const otpChangeHandler = (otp: string) => {
  //   setForgotPasswordData({ ...forgotPasswordData, ...{ otp: otp } });
  // };
  //
  // const confirm = () => {
  //   const err = validator.validate(forgotPasswordData);
  //
  //   if (_.size(err) === 0) {
  //     // to be continued
  //     navigation('/sign-in');
  //   } else {
  //     setErrors(err as IForgotPasswordFormFields);
  //   }
  // };

  return (
    <section className="forgot-password-wrapper">
      <div className="forgot-password-container">forgot</div>
    </section>
  );
};

export default ForgotPassword;
