import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadTheme } from "../features/themeSlice";
import { Loader2Icon } from "lucide-react";
import {
  useUser,
  SignIn,
  useAuth,
  CreateOrganization,
  useOrganization,
} from "@clerk/clerk-react";
import { fetchWorkspaces } from "../features/workspaceSlice";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { loading, workspaces } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const { organization, isLoaded: orgLoaded } = useOrganization();

  // Load theme initially
  useEffect(() => {
    dispatch(loadTheme());
  }, []);

  // Fetch workspaces when user + org are ready
  useEffect(() => {
    if (isLoaded && user && orgLoaded && organization && workspaces.length === 0) {
      dispatch(fetchWorkspaces({ getToken }));
    }
  }, [user, isLoaded, orgLoaded, organization]);

  // POLLING FIX - run ONCE after org creation (no infinite loop)
  useEffect(() => {
    if (!getToken || !isLoaded || !user || !orgLoaded || !organization) return;

    if (workspaces.length === 0) {
      const timeout = setTimeout(() => {
        dispatch(fetchWorkspaces({ getToken }));
      }, 1500); // run ONCE after org is ready

      return () => clearTimeout(timeout);
    }
  }, [organization, workspaces.length, isLoaded, user, orgLoaded, getToken]);

  // ---------------- UI HANDLERS ----------------

  // Not logged in → show Sign In
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-zinc-950">
        <SignIn />
      </div>
    );
  }

  // Waiting for Clerk to load user
  if (!isLoaded || !orgLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-zinc-950">
        <Loader2Icon className="size-7 animate-spin text-blue-500" />
      </div>
    );
  }

  // User has no org yet
  if (user && isLoaded && orgLoaded && !organization && workspaces.length === 0 && !loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <CreateOrganization />
      </div>
    );
  }

  // Global workspace loader
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-zinc-950">
        <Loader2Icon className="size-7 animate-spin text-blue-500" />
      </div>
    );
  }

  // ---------------- MAIN UI ----------------

  return (
    <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col h-screen">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex-1 h-full p-6 xl:p-10 xl:px-16 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;




// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loadTheme } from "../features/themeSlice";
// import { Loader2Icon } from "lucide-react";
// import { useUser, SignIn, useAuth, CreateOrganization } from "@clerk/clerk-react";
// import { fetchWorkspaces } from "../features/workspaceSlice";

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { loading, workspaces } = useSelector((state) => state.workspace);
//   const dispatch = useDispatch();
//   const { user, isLoaded } = useUser();
//   const {getToken} = useAuth()

//   // Initial load of theme
//   useEffect(() => {
//     dispatch(loadTheme());
//   }, []);

//   // Initial load of workspaces
//   useEffect(() => {
//     if (isLoaded && user && workspaces.length === 0) {
//       dispatch(fetchWorkspaces({
//         getToken
//       }))
//     }
//   }, [user, isLoaded])

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-white dark:bg-zinc-950">
//         <SignIn />
//       </div>
//     );
//   }

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-screen bg-white dark:bg-zinc-950">
//         <Loader2Icon className="size-7 text-blue-500 animate-spin" />
//       </div>
//     );

//     if (user && workspaces.length === 0 && !loading) {
//       return (
//         <div className="min-h-screen flex justify-center items-center">
//           <CreateOrganization />
//         </div>
//       )
//     }

//   return (
//     <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
//       <Sidebar
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//       />
//       <div className="flex-1 flex flex-col h-screen">
//         <Navbar
//           isSidebarOpen={isSidebarOpen}
//           setIsSidebarOpen={setIsSidebarOpen}
//         />
//         <div className="flex-1 h-full p-6 xl:p-10 xl:px-16 overflow-y-scroll">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
