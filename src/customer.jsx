import React, { useState} from "react";

 function Customer() {
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // Handle form submit (Create / Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) return alert("All fields are required!");

    if (editCustomer) {
      // Update
      setCustomers(customers.map(c =>
        c.id === editCustomer.id ? { ...c, name, email, mobile } : c
      ));
      setEditCustomer(null);
    } else {
      // Create
      setCustomers([...customers, { id: Date.now(), name, email, mobile }]);
    }

    // Reset form
    setName("");
    setEmail("");
    setMobile("");
  };

  // Handle delete
  const handleDelete = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  // Handle edit
  const handleEdit = (customer) => {
    setEditCustomer(customer);
    setName(customer.name);
    setEmail(customer.email);
    setMobile(customer.mobile);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Customer Details - CRUD</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <input
          type="email"
          placeholder="Customer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <button type="submit">{editCustomer ? "Update" : "Add"}</button>
      </form>

      {/* Table */}
      <table border="1" cellPadding="8" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.mobile}</td>
                <td>
                  <button onClick={() => handleEdit(customer)}>Edit</button>
                  <button onClick={() => handleDelete(customer.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">No customers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default Customer;