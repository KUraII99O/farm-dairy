import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MilkContext } from "../Provider";
import { FaUserPlus } from "react-icons/fa";

const EditMilk = () => {
  const { id } = useParams<{ id: string }>();
  const { milks, addMilk, editMilk } = useContext(MilkContext);
  const navigate = useNavigate();

  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    accountNo: "",
    stallNo: "",
    animalID: "",
    liter: "",
    collectedFrom: "", // New field
    address: "", // New field
    fate: "", // New field
    price: "", // New field
    total: "", // New field
  });
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  useEffect(() => {
    if (isEditMode) {
      const selectedMilk = milks.find((milk) => milk.id === parseInt(id));
      if (selectedMilk) {
        setFormData(selectedMilk);
      }
    }
  }, [id, isEditMode, milks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isEditMode) {
      await editMilk(parseInt(id), formData);
    } else {
      await addMilk(formData);
    }
    setLoading(false);
    setSuccessPopup(true);
    setTimeout(() => {
      setSuccessPopup(false);
      navigate("/milk");
    }, 2000); // Close the popup and navigate after 2 seconds
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
        <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
          <FaUserPlus className="mr-2" />
          <span>Milk Information</span>
        </h2>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Account Number:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Account Number"
            name="accountNo"
            value={formData.accountNo}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Add more fields */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Stall Number:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Stall Number"
            name="stallNo"
            value={formData.stallNo}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Add more fields */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Animal ID:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Animal ID"
            name="animalID"
            value={formData.animalID}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Add more fields */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Liter:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Liter"
            name="liter"
            value={formData.liter}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {/* Add more fields */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Collected From Name:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Collected From Name"
            name="collectedFrom"
            value={formData.collectedFrom}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Address:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Fate (%):
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Fate (%)"
            name="fate"
            value={formData.fate}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Price/Liter:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Price/Liter"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Total:
          </label>
          <input
            style={{ width: "800px" }}
            type="text"
            placeholder="Total"
            name="total"
            value={formData.total}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <button
        style={{ width: "800px" }}
          type="submit"
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
          disabled={loading}
        >
          {loading ? "Loading..." : isEditMode ? "Save" : "Add Milk"}
        </button>
      </form>

      {successPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Information updated successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditMilk;
