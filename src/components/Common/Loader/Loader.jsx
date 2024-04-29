import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh'
    }}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#3a80e9"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
