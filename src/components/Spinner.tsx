type SpinnerProps = {
  style?: React.CSSProperties;
  dark?: boolean;
};

const Spinner = ({ style, dark }: SpinnerProps) => (
  <div style={{ display: "flex", justifyContent: "center", width: "100%", ...style }}>
    <div className={`spinner-border ${dark ? "" : "text-light"}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Spinner;
