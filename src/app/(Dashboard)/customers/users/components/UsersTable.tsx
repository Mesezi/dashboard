"use client";
import {
  ActivateUserIcon,
  BlacklistIcon,
  EyeIcon,
  FilterOptionsIcon,
} from "@/components/Icons";
import { DataTable } from "@/components/Table/DataTable";
import { Status } from "@/components/Table/Status";
import { datesAreEqual, formatDateType } from "@/lib/utils";
import { getUsersTableData } from "@/services/users";
import { IFiltering } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";

// Define your data type
interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  id: string;
}



const UsersTable = () => {
  const columnHelper = createColumnHelper<User>();
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilterForm, setOpenFilterForm] = useState(false);
  const [filtering, setFiltering] = useState<IFiltering>(null);
  const router = useRouter();

  const fetchUsersData = async () => {
    try {
      const response = await getUsersTableData();
      // Store response in sessionStorage
      sessionStorage.setItem("lendsqrMockData", JSON.stringify(response));
      return response;
    } catch (err) {
      toast.error("Error getting data");
    }
  };

  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["customers-users"],
    queryFn: () => fetchUsersData(),
    staleTime: 300 * 1000,
    refetchInterval: 300 * 1000,
    refetchIntervalInBackground: true,
  });

  const filterOptions = [
    {
      key: "organization",
      type: "select",
      label: "organization",
      options: [
        "Org1",
        "Org2",
        "Org3",
        "Org4",
        "Org5",
        "Org6",
        "Org7",
        "Org8",
        "Org9",
        "Org10",
      ],
    },

    {
      key: "username",
      type: "text",
      label: "username",
      options: null,
    },

    {
      key: "email",
      type: "email",
      label: "email",
      options: null,
    },
    {
      key: "dateJoined",
      label: "date",
      type: "date",
      options: null,
    },

    {
      key: "status",
      type: "select",
      label: "status",
      options: ["active", "inactive", "pending", "blacklisted"],
    },
  ];

  const customFilterFn = (rows: any, columnIds: any, filterValue: any) => {
    if (!filtering) {
      return true;
    }

    const statusMatch = filterValue?.status
      ? rows.original.status.toLowerCase() === filterValue.status.toLowerCase()
      : true;

    const emailMatch = filterValue.email
      ? rows.original.email
          .toLowerCase()
          .includes(filterValue.email.toLowerCase())
      : true;

    const dateJoinedMatch = filterValue?.dateJoined
      ? datesAreEqual(
          new Date(rows.original.dateJoined),
          new Date(filterValue.dateJoined)
        )
      : true;

    const organizationMatch = filterValue?.organization
      ? rows.original.organization.toLowerCase() ===
        filterValue.organization.toLowerCase()
      : true;

    const usernameMatch = filterValue?.username
      ? rows.original.username
          .toLowerCase()
          .includes(filterValue.username.toLowerCase())
      : true;

    return (
      statusMatch &&
      usernameMatch &&
      organizationMatch &&
      dateJoinedMatch &&
      emailMatch
    );
  };

  const columns = [
    columnHelper.accessor("organization", {
      header: () => (
        <div className="header-cell">
          Organization{" "}
          <FilterOptionsIcon
            onClick={() => setOpenFilterForm(!openFilterForm)}
            className="filter-icon"
          />
        </div>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("username", {
      header: () => (
        <div className="header-cell">
          Username{" "}
          <FilterOptionsIcon
            onClick={() => setOpenFilterForm(!openFilterForm)}
            className="filter-icon"
          />
        </div>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => (
        <div className="header-cell">
          Email{" "}
          <FilterOptionsIcon
            onClick={() => setOpenFilterForm(!openFilterForm)}
            className="filter-icon"
          />
        </div>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phoneNumber", {
      header: () => (
        <div className="header-cell">
          Phone Number{" "}
          <FilterOptionsIcon
            onClick={() => setOpenFilterForm(!openFilterForm)}
            className="filter-icon"
          />
        </div>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateJoined", {
      header: () => (
        <div className="header-cell">
          Date Joined{" "}
          <FilterOptionsIcon
            onClick={() => setOpenFilterForm(!openFilterForm)}
            className="filter-icon"
          />
        </div>
      ),
      cell: (info) => <p>{formatDateType(info.getValue())}</p>,
    }),
    columnHelper.accessor("status", {
      header: () => (
        <div className="header-cell">
          Status{" "}
          <FilterOptionsIcon
            onClick={() => setOpenFilterForm(!openFilterForm)}
            className="filter-icon"
          />
        </div>
      ),
      cell: (info) => <div>{<Status text={info.getValue()} />}</div>,
    }),
    columnHelper.display({
      id: "actions",
      cell: (info) => {
        const userId = info.row.original.id;
        return (
          <button className="actions-cell">
            <BsThreeDotsVertical />

            <article>
              <ul>
                <li onClick={() => router.push(`/customers/users/${userId}`)}>
                  <EyeIcon /> View Details
                </li>
                <li>
                  <BlacklistIcon /> Blacklist User
                </li>
                <li>
                  <ActivateUserIcon /> Activate User
                </li>
              </ul>
            </article>
          </button>
        );
      },
    }),
  ];

  return (
    <div>
    <DataTable
        columns={columns}
        data={data}
        filtering={filtering}
        setFiltering={setFiltering}
        customFilterFn={customFilterFn}
        setCurrentPage={setCurrentPage}
        setOpenFilterForm={setOpenFilterForm}
        openFilterForm={openFilterForm}
        filterOptions={filterOptions}
        currentPage={currentPage}
        isLoading={isLoading}
        isError={isError}
      /> 
    </div>
  );
};

export default UsersTable;
