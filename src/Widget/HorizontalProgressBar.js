const HorizontalProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      // height: 20,
      width: '100%',
      // backgroundColor: "#e0e0de",
      borderRadius: '50px',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: '700'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default HorizontalProgressBar;