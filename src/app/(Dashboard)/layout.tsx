"use client"
import DashboardLayout from '@/components/DashboardLayout'


export default function RootLayout({
  children
}: {
  readonly children: React.ReactNode;
}) {

  // useEffect(() => {
  //   window.addEventListener("offline", () => {
  //     toast.error("You're Offline", {
  //       icon: <Info />,
  //       position: "bottom-right",
  //       autoClose: 10000,
  //       closeOnClick: true,
  //     });
  //   });
  //   window.addEventListener("online", () => {
  //     toast.info("You're Online", {
  //       icon: <Info />,
  //       position: "bottom-right",
  //       autoClose: 10000,
  //       closeOnClick: true,
  //     });
  //   });

  //   return () => {
  //     window.removeEventListener("offline", () => {
  //       toast.error("You're Offline", {
  //         icon: <Info />,
  //         position: "bottom-right",
  //         autoClose: 10000,
  //         closeOnClick: true,
  //       });
  //     });
  //     window.removeEventListener("online", () => {
  //       toast.info("You're Online", {
  //         icon: <Info />,
  //         position: "bottom-right",
  //         autoClose: 10000,
  //         closeOnClick: true,
  //       });
  //     });
  //   };
  // }, []);


  return (
                <DashboardLayout>
                
                {children}
               </DashboardLayout>
  )
}
