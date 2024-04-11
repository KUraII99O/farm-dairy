import React, { useState, useEffect,useRef } from "react";
import PregnancyRecordsList from "../PregnancyRecords";
import CowDetails from "../List";
import { useManagePregnancy } from "../Provider";

const CowPregnancyForm = () => {
  const { addPregnancy, fetchPregnancies } = useManagePregnancy();

  const [formData, setFormData] = useState({
    id: "",
    stallNo: "",
    animalId: "",
    pregnancyType: "",
    semenType: "",
    semenPushDate: "",
    pregnancyStartDate: "",
    semenCost: "",
    otherCost: "",
    note: "",
    pregnancyStatus: "",
  });
  const [showCowDetails, setShowCowDetails] = useState(false);
  const [stallList, setStallList] = useState([]);
  const [cowList, setCowList] = useState([]);
  const [loading, setLoading] = useState(false);
  const editFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch stall data from the endpoint
    fetch("http://localhost:3000/stalls")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch stall data");
        }
        return response.json();
      })
      .then((data) => {
        setStallList(data);
      })
      .catch((error) => {
        console.error("Error fetching stall data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch cow data from the endpoint
    fetch("http://localhost:3000/cows")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cow data");
        }
        return response.json();
      })
      .then((data) => {
        setCowList(data);
      })
      .catch((error) => {
        console.error("Error fetching cow data:", error);
      });
  }, []);

  useEffect(() => {
    if (formData.stallNo !== "" && formData.animalId !== "") {
      setShowCowDetails(true);
      fetchPregnancies(formData.animalId)
    } else {
      setShowCowDetails(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        await addPregnancy(formData);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="stallNo" className="block mb-1 text-sm">
          Stall No *:
        </label>
        <select
          style={{ height: "2.5rem" }}
          id="stallNo"
          name="stallNo"
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.stallNumber}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          {stallList.map((stall) => (
            <option key={stall.id} value={stall.stallNumber}>
              {stall.stallNumber}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="animalID" className="block mb-1 text-sm">
          Animal Id *:
        </label>
        <select
          style={{ height: "2.5rem" }}
          id="animalId"
          name="animalId"
          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.animalId}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          {cowList.map((cow) => (
            <option key={cow.id} value={cow.id}>
              {cow.id}
            </option>
          ))}
        </select>
      </div>

      {showCowDetails && <CowDetails formData={formData} cowList={cowList} />}

      {showCowDetails && <PregnancyRecordsList /> }
      <div ref={editFormRef}>
      <div className="col-span-3">
        <h2 className="text-xl font-bold mb-4">Animal Pregnancy Details:</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="pregnancyType" className="block mb-1 text-sm">
              Pregnancy Type *:
            </label>
            <select
              style={{ height: "2.5rem" }}
              name="pregnancyType"
              value={formData.pregnancyType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">-- Select --</option>
              <option value="Automatic">Automatic</option>
              <option value="By Collected Semen">By Collected Semen</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="semenType" className="block mb-1 text-sm">
              Semen Type:
            </label>
            <select
              style={{ height: "2.5rem" }}
              name="semenType"
              value={formData.semenType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              <option value="Type 3">Type 3</option>
              <option value="Type 4">Type 4</option>
              <option value="Type 5">Type 5</option>
              <option value="Type 6">Type 6</option>
              <option value="Type 7">Type 7</option>
              <option value="Type 8">Type 8</option>
              {/* Populate options dynamically based on available semen types */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="semenPushDate" className="block mb-1 text-sm">
              Semen Push Date:
            </label>

            <input
              style={{ height: "2.5rem" }}
              type="date"
              name="semenPushDate"
              value={formData.semenPushDate}
              onChange={handleChange}
              className=" w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pregnancyStartDate" className="block mb-1 text-sm">
              Pregnancy Start Date *:
            </label>
            <input
              style={{ height: "2.5rem" }}
              type="date"
              name="pregnancyStartDate"
              value={formData.pregnancyStartDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="semenCost" className="block mb-1 text-sm">
              Semen Cost:
            </label>
            <input
              style={{ height: "2.5rem" }}
              type="text"
              name="semenCost"
              value={formData.semenCost}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otherCost" className="block mb-1 text-sm">
              Other Cost:
            </label>
            <input
              style={{ height: "2.5rem" }}
              type="text"
              name="otherCost"
              value={formData.otherCost}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="note" className="block mb-1 text-sm">
              Note:
            </label>
            <textarea
              name="note"
              rows={3}
              value={formData.note}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4 col-span-2 border border-gray-300 p-4 text-center">
            <label
              htmlFor="approximateDeliveryDate"
              className="block mb-2 text-sm"
            >
              Approximate Delivery Date:
            </label>
            <div className="flex items-center justify-center">
              <progress
                id="deliveryProgress"
                className="w-full"
                value={10}
                max={283}
              ></progress>
              <span className="ml-2">10 / 283</span>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
              >
              Add Pregnancy
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CowPregnancyForm;

