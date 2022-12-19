import { FC } from 'react';

// import { useSignIn } from 'ui/sign-in/hook/use-sign-in';

const SignIn: FC = () => {
  // const formFieldsRef = useRef<IRefAuthFormFields>({
  //   userName: null,
  //   password: null,
  // });
  //
  // const [signIn, errors] = useSignIn();
  //
  // const [userData, setUserData] = useState<IAuthFormFields>({
  //   userName: '',
  //   password: '',
  // });
  //
  // const signInFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //
  //   setUserData({ ...userData, ...{ [name]: value } });
  // };
  //
  // const handleKeyDown = (event: { key: string }) => {
  //   if (event.key === 'Enter') {
  //     signIn(userData);
  //   }
  // };

  return (
    <section className="sign-in-wrapper">
      <div className="container">sign in</div>
    </section>
  );
};

export default SignIn;
