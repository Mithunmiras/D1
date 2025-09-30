import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LogoLoader from "../Component/LogoLoader";

export default function PageTransition({ children, pathname }) {
  const [isLoading, setIsLoading] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setIsLoading(true);
      setPrevPathname(pathname);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LogoLoader key="loader" />}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}
