import React, { useEffect, useState } from "react";
import { HiOutlineUsers, HiUser } from "react-icons/hi2";
import InputField from "../formFields/InputField";
import { Link } from "react-router-dom";
import DeleteDialogModal from "./Modals/DeleteDialogModal";
import { toast } from "../ui/use-toast";
import secureLocalStorage from "react-secure-storage";
import { useFormik } from "formik";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
// import { toast } from "sonner"

const Account = () => {
  const [profilePic, setprofilePic] = useState("");
  const [alert, setAlert] = useState("");

  const handleProfilePic = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setprofilePic(fileURL);
      toast({
        title: "Profile Photo Uploaded!",
      });
    } else {
      toast({
        title: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  const handleRemoveProfilePhoto = () => {
    if (profilePic) {
      setprofilePic("");
      toast({
        title: "Profile Photo Deleted!",
        variant: "destructive",
      });
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const user = secureLocalStorage.getItem("user");
  console.log(user);
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      organizationName: user.organizationName,
    },
    validationSchema: null,
    onSubmit: () => {},
  });

  const config = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  const getEmployees = () => {
    axios
      .get(`/api/employee/getemployees`, config)
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data);

          console.log("Get it", res.data.data);
        }
      })
      .catch((err) => {
        console.log("Employee Get", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="flex flex-col items-start gap-[46px] w-[482px]">
        <div className="flex items-center gap-6">
          {profilePic ? (
            <div className="rounded-full w-[140px] h-[140px] flex justify-center items-center">
              <img
                src={profilePic}
                alt="User"
                className="w-[140px] h-[140px] rounded-full"
              />
            </div>
          ) : (
            <div className="rounded-full w-[140px] h-[140px] p-[30px] bg-[#2F4EED] text-white flex justify-center items-center">
              <HiUser className="text-[8rem]" />
            </div>
          )}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <button className="relative text-[.875rem] font-medium leading-5 z-20 cursor-pointer text-[#151515] bg-[#F7F7F7] rounded-lg px-2 h-[40px] flex items-center justify-center">
                Upload Photo
                <label
                  htmlFor="profile"
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
                >
                  <input
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={handleProfilePic}
                    type="file"
                    name="profile"
                    id="profile"
                    className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer pointer-events-auto"
                  />
                </label>
              </button>

              {/* Delete Dialog */}
              <DeleteDialogModal
                handleRemoveProfilePhoto={handleRemoveProfilePhoto}
                trigger={
                  <button className="text-[#ED2F2F] flex justify-center items-center rounded-lg font-semibold text-[.875rem] leading-4">
                    Remove Photo
                  </button>
                }
                warning={`This action cannot be undone. This will permanently delete your profile picture.`}
              />
            </div>
            <p className="text-[#9C9C9C] text-[.875rem] font-normal leading-5">
              Pick a photo up to 4MB
            </p>
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-start gap-8 w-full"
        >
          <div className="flex w-full flex-col items-start gap-2">
            <InputField
              label={`First Name`}
              name={"firstName"}
              placeholder={`John`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              disabled={true}
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <InputField
              label={`Last Name`}
              name={"lastName"}
              placeholder={`Doe`}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              disabled={true}
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <InputField
              label={`Email`}
              name={"email"}
              placeholder={`johndoe@gmail.com`}
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={true}
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <InputField
              label={`Organization`}
              name={"organizationName"}
              placeholder={`Coinomad`}
              value={formik.values.organizationName}
              onChange={formik.handleChange}
              disabled={true}
            />
          </div>
        </form>
      </div>
      <div className="bg-[#F7F7F7] w-[433px] rounded-2xl flex flex-col justify-center items-start">
        <div className="p-4 flex justify-between items-center w-full">
          <h1 className="text-[#000000] text-[1.125rem] font-semibold leading-7">
            Your Employees
          </h1>
          <Link
            className="text-[#2F4EED] text-base font-semibold leading-[18px]"
            to={""}
          >
            View all
          </Link>
        </div>
        <div className="flex h-[86px] px-4 gap-4 items-center w-full">
          <div className="flex p-4 gap-[10px] items-center bg-[#ffffff] rounded-lg border border-[#E7E7E7]">
            <HiOutlineUsers className="text-[#2F4EED] text-[1.125rem]" />
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-[#151515] text-[2.5rem] leading-[48px] tracking-[-0.8px] font-semibold">
              {isLoading ? (
                <ScaleLoader
                  color="#2F4EED"
                  className="translate-y-[3px]"
                  type="submit"
                />
              ) : (
                data.length
              )}
            </h1>
            <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
              Employees
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
