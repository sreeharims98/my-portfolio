import React from "react";
import { Header } from "../components/Header";
import Loader from "../components/Loader";
import NavHeader from "../components/NavHeader";
import { useHasMounted } from "../hooks/useHasMounted";
import { getStorageValue, setStorageValue } from "../utils/storage";

export default function Layout({
  children,
  header,
  title,
}: {
  children: React.ReactElement;
  header: boolean;
  title?: string;
}) {
  const hasMounted = useHasMounted();
  const [darkMode, setDarkMode] = React.useState(
    Boolean(getStorageValue("theme"))
  );

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    setStorageValue("theme", !darkMode);
  }

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      setStorageValue("theme", true);
    } else {
      document.documentElement.classList.remove("dark");
      setStorageValue("theme", false);
    }
  }, [darkMode]);

  if (!hasMounted) return <Loader full />;
  return (
    <div className="bg-light_bg_p dark:bg-dark_bg_p text-primary min-h-screen">
      <div className="container mx-auto">
        {header ? (
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        ) : (
          <NavHeader
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            title={title}
          />
        )}
        <div className="py-10 px-2">{children}</div>
      </div>
    </div>
  );
}
