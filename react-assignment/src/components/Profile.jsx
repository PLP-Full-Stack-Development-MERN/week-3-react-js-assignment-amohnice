const Profile = ({ name, email }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
      <p className="text-gray-700 mb-2"><strong>Name:</strong> {name}</p>
      <p className="text-gray-700"><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;
