function ProfileDataCard(props) {
  return (
    <div>
      <h2 className="mb-3">Profile Data</h2>
      <h5>Full Name:</h5>
      <p>
        {props.user.firstName} {props.user.lastName}
      </p>
      <h5>Email:</h5>
      <p id="userMail">{props.user.mail}</p>
      <h5>PESEL:</h5>
      <p>{props.user.PESEL}</p>
      <h5>Date of Birth:</h5>
      <p>{props.user.dateOfBirth}</p>
      <h5>Phone Number:</h5>
      <p>{props.user.phoneNumber}</p>
    </div>
  );
}

export default ProfileDataCard;
