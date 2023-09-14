import Jumbotron from "../components/_jumbotron";

function Home() {
  const jumbotronProps = {
    title: "Blockchain-based Electronic Medical Records System",
    description:
      "Revolutionizing healthcare data management, with a strong emphasis on technology, innovation, and investment to unlock lasting value and drive economic growth.",
    buttons: [
      {
        text: "Berobat Sekarang",
        href: "/patient/signin",
        className:
          "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900",
        icon: true,
      },
      {
        text: "Masuk sebagai Dokter",
        href: "/doctor/signin",
        className:
          "inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400",
        icon: false,
      },
    ],
  };

  return (
    <div>
      <Jumbotron {...jumbotronProps} />
    </div>
  );
}

export default Home;
