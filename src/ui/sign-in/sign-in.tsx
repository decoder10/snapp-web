import { FC } from 'react';

import { Link } from 'react-router-dom';

import { signInFormConfig } from 'ui/sign-in/sign-in-form-config';

// import { useSignIn } from 'ui/sign-in/hook/use-sign-in';
//
const SignIn: FC = () => {
  //   const formFieldsRef = useRef<IRefAuthFormFields>({
  //     userName: null,
  //     password: null,
  //   });
  //
  //   const [signIn, errors] = useSignIn();
  //
  //   const [userData, setUserData] = useState<IAuthFormFields>({
  //     userName: '',
  //     password: '',
  //   });
  //
  //   const signInFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //
  //     setUserData({ ...userData, ...{ [name]: value } });
  //   };
  //
  //   const handleKeyDown = (event: { key: string }) => {
  //     if (event.key === 'Enter') {
  //       signIn(userData);
  //     }
  //   };

  return (
    <section className="signIn-wrapper">
      <div className="container">
        <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '22px', textAlign: 'center' }}>Sign In</h4>
        <form>
          {signInFormConfig.map(item => {
            const { key, label, type } = item;

            return (
              <label key={key} style={{ color: 'white' }}>
                {label}
                <input
                  // ref={ref => (formFieldsRef.current[key] = ref)}
                  key={key}
                  name={key}
                  // onChange={signInFormChangeHandler}
                  // value={userData[key]}
                  // label={label}
                  // variant="outlined"
                  className="input"
                  // error={!!errors[key]}
                  // helperText={errors[key]}
                  type={type}
                  // onKeyDown={handleKeyDown}
                  // autoComplete={userData[key]}
                  // InputProps={{
                  //     endAdornment: rightIcon ? (
                  //         <InputAdornment position="end">
                  //             <Eye
                  //                 makeVisible={value => {
                  //                     if (formFieldsRef.current && formFieldsRef.current[key]) {
                  //                         formFieldsRef.current[key]!.type = value ? 'text' : 'password';
                  //                     }
                  //                 }}
                  //             />
                  //         </InputAdornment>
                  //     ) : null,
                  // }}
                />
              </label>
            );
          })}
        </form>
        <Link className="forgot-password" to={'/forgot-password'}>
          Forgot Password?
        </Link>
        <button className="submit-button">login</button>
      </div>
    </section>
  );
};

export default SignIn;
