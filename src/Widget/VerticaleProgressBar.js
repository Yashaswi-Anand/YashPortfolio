const VerticalProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: '20vh',
      width: '100%',
      // backgroundColor: "#e0e0de",
      borderRadius: 50,
    }
  
    const fillerStyles = {
      height: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'top',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontSize: '12px'
    }


    return (
      <div style={containerStyles}>
        <div style={fillerStyles} className="vertical-animation">
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };

  
  export default VerticalProgressBar;