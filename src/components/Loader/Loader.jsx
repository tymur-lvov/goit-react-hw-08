import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 12,
        right: 12,
      }}
    >
      <RotatingLines
        visible={true}
        height="40"
        width="40"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
