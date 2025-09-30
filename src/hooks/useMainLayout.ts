import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useMainLayout = () => {
  const pathName = usePathname().slice(1);

  useEffect(() => {
    if (pathName) {
      onClick({ currentTarget: { id: pathName } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      if (e?.target?.id !== "menu-logo") {
        const ele = document.getElementById("right-pannel");
        if (ele) ele.style.zIndex = "0";
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = (e: any) => {
    const list = document.querySelectorAll("#menu>li");
    list.forEach((ele: Element) => {
      ele.classList.remove("checked");
    });
    const ele = document.getElementById(e?.currentTarget?.id);
    ele?.classList.add("checked");
  };

  const onMenuClick = (e: any) => {
    e.stopPropagation();
    const ele = document.getElementById("right-pannel");
    if (ele) {
      if (Number(ele?.style?.zIndex) <= 0) ele.style.zIndex = "3";
      else ele.style.zIndex = "0";
    }
  };

  return { pathName, onClick, onMenuClick };
};

export default useMainLayout;
