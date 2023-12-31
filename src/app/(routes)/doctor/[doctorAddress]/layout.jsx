import "./../../../globals.css";
import Navbar from "../../../components/Navbar";

export const metadata = {
  title: "Dashboard Dokter",
  description: "EMR with Blockchain",
};

export default function DoctorDashboardLayout({ children }) {
  const navItems = [
    {
      text: "Daftar Pasien",
      linkToPage: "/doctor/123/patient-list",
      color: "blue",
    },
    {
      text: "Profil Dokter",
      linkToPage: "/doctor/123/profile",
      color: "gray",
    },
  ];

  const navbarProps = {
    title: "Eka Hospital",
    buttons: [
      {
        text: "Informasi Akun",
        href: "/doctor/123/account",
        className:
          "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0",
      },
    ],
    navItems: navItems,
  };

  return (
    <>
      <Navbar {...navbarProps} />
      {children}
    </>
  );
}
