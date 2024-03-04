import UserProfile from "../components/UserProfileComponent/UserProfile";
import ProfileImg from "../assets/profilePicture/rajkumar.jpg";
const MyAccount = () => {
  const user = {
    name: 'Rajkumar Shaw',
    email: 'rajkumarshaw624@gmail.com',
    profilePicture: ProfileImg,
    phone: '+91 9708493575',
    address: 'NH-58, Raj Nagar Extension, Hum Tum Road, Morta, Ghaziabad Uttar Pradesh 201003, India'
  };

  return (
    <div>
      <UserProfile
        name={user.name}
        email={user.email}
        profilePicture={user.profilePicture}
        phone={user.phone}
        address={user.address}
      />
    </div>
  );
};

export default MyAccount;
