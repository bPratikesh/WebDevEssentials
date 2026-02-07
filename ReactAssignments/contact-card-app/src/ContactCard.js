function ContactCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        width: "300px",
        borderRadius: "8px",
      }}
    >
      <h3>{props.name}</h3>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
      <p>
        <strong>Phone:</strong> {props.phone}
      </p>
      <p>
        <strong>Address:</strong> {props.address}
      </p>
    </div>
  );
}

export default ContactCard;
