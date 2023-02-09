import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";


const DisableStickyHeader = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default DisableStickyHeader;