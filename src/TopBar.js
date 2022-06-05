const TopBar = (props) => {
  const { title } = props;
  return (
    <div className='top-bar'>
      {title}
      <div className='top-container'>
        <button>x</button>
      </div>
    </div>
  );
};

export default TopBar;
