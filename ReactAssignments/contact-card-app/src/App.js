import ContactCard from "./ContactCard";
function App() {
  const contacts = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "555-1234",
      address: "123 Maple Street, Springfield",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "555-5678",
      address: "456 Oak Avenue, Metropolis",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      phone: "555-8765",
      address: "789 Pine Road, Gotham",
    },
    {
      name: "Pratikesh Borade",
      email: "pratikesh@example.com",
      phone: "985-6565",
      address: "89 hjn Road, Gotham",
    },
  ];
  return (
    <div>
      <h1>Contact List</h1>

      {/* Flex container */}
      <div style={{ display: "flex", gap: "20px" }}>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            address={contact.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
