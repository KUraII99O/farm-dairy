// src/components/BranchTable.tsx

import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Table } from "flowbite-react";
import { BranchTableProps } from "../../../types/types";

const BranchTable: React.FC<BranchTableProps> = ({
  sortedBranches,
  handleSort,
  sortIcon,
  handleEditDrawerOpen,
  handleDeleteConfirmation,
  translate,
}) => (
  <Table>
    <Table.Head>
      <Table.HeadCell onClick={() => handleSort("rowNumber")}>
        <div className="flex items-center">
          {translate("ID")}
          {sortIcon("rowNumber")}
        </div>
      </Table.HeadCell>
      <Table.HeadCell onClick={() => handleSort("name")}>
        <div className="flex items-center">
          {translate("Branch Name")}
          {sortIcon("name")}
        </div>
      </Table.HeadCell>
      <Table.HeadCell onClick={() => handleSort("setupDate")}>
        <div className="flex items-center">
          {translate("Setup Date")}
          {sortIcon("setupDate")}
        </div>
      </Table.HeadCell>
      <Table.HeadCell onClick={() => handleSort("builderName")}>
        <div className="flex items-center">
          {translate("Builder Name")}
          {sortIcon("builderName")}
        </div>
      </Table.HeadCell>
      <Table.HeadCell onClick={() => handleSort("phoneNumber")}>
        <div className="flex items-center">
          {translate("Phone Number")}
          {sortIcon("phoneNumber")}
        </div>
      </Table.HeadCell>
      <Table.HeadCell onClick={() => handleSort("email")}>
        <div className="flex items-center">
          {translate("Email")}
          {sortIcon("email")}
        </div>
      </Table.HeadCell>
      <Table.HeadCell>{translate("Action")}</Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      {sortedBranches.map((branch, index) => (
        <Table.Row
          key={branch.id}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index + 1} {/* Display row number */}
          </Table.Cell>
          <Table.Cell>{branch.name}</Table.Cell>
          <Table.Cell>{branch.setupDate}</Table.Cell>
          <Table.Cell>{branch.builderName}</Table.Cell>
          <Table.Cell>{branch.phoneNumber}</Table.Cell>
          <Table.Cell>{branch.email}</Table.Cell>
          <Table.Cell>
            <div className="flex items-center">
              <button
                onClick={() => handleEditDrawerOpen(branch)}
                className="text-blue-500 hover:underline flex items-center mr-4 focus:outline-none"
              >
                <BsPencil className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => handleDeleteConfirmation(branch.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none flex items-center"
              >
                <AiOutlineDelete className="w-5 h-5 mr-1" />
              </button>
            </div>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default BranchTable;
