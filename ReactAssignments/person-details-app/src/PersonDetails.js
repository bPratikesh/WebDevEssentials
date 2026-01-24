import { personsData } from "./personData";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
};
function PersonDetails() {
  return (
    <div>
      <h2>Person Details</h2>
      <ul>
        {personsData.map((person, index) => (
          <li key={index}>
            <strong>Name:</strong> {person.name} <br />
            <strong>Date of Birth:</strong> {person.dateOfBirth} <br />
            <strong>Age:</strong> {calculateAge(person.dateOfBirth)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonDetails;
