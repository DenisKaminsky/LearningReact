import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h2>{props.email}</h2>
    </main>
  );
};

export default UserProfile;
