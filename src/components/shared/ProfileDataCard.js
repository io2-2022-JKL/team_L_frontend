function ProfileDataCard(props) {
  return (
    <div>
      <h5>Full Name:</h5>
      <p>
        {props.loadedPatient.firstName} {props.loadedPatient.lastName}
      </p>
      <h5>Email:</h5>
      <p>{props.loadedPatient.mail}</p>
      <h5>PESEL:</h5>
      <p>{props.loadedPatient.PESEL}</p>
      <h5>Date of Birth:</h5>
      <p>{props.loadedPatient.dateOfBirth}</p>
      <h5>Phone Number:</h5>
      <p>{props.loadedPatient.phoneNumber}</p>
    </div>
  );
}

export default ProfileDataCard;
