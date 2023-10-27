import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, _id } = service;

  const handleBookService = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const due = price;

    const order = {
      customerName: name,
      email,
      date,
      service: _id,
      price: due,
    };

    console.log(order);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl">Book Service: {title}</h2>
      <form
        onSubmit={handleBookService}
        className="card-body bg-[#F3F3F3] rounded-lg"
      >
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Name"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
