function VaccinationCenterCard(props) {
  return (
    <div>
      <h2 className="mb-3">Vaccination Center</h2>
      <h5>Name:</h5>
      <p>{props.user.vaccinationCenterName}</p>
      <h5>City:</h5>
      <p>{props.user.vaccinationCenterCity}</p>
      <h5>Address:</h5>
      <p>{props.user.vaccinationCenterStreet}</p>
    </div>
  );
}

export default VaccinationCenterCard;
