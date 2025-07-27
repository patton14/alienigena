const Floating = ({ top = "0", left = "0", right = "auto", delay = "0s", children }) => {
    return (
      <div
        className="absolute z-10"
        style={{
          top,
          left,
          right,
          animationDelay: delay,
        }}
      >
        {children}
      </div>
    )
  }
  
  export default Floating;
  