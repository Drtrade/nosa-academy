import MetaTags from '../components/common/MetaTags';
import RegistrationForm from '../components/register/RegistrationForm';

const Register = () => {
  return (
    <div className="min-h-screen pt-20">
      <MetaTags
        title="Register Now | Join Nosa Igiebor Sports Academy"
        description="Register for Nosa Igiebor Sports Academy. Start your football journey with professional training and elite coaching."
        canonical="/register"
        noindex={true} // Private page, don't index
      />
      <RegistrationForm />
    </div>
  );
};

export default Register;