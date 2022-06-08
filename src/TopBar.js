const TopBar = (props) => {
  const { title } = props;
  return (
    <div className='top-bar'>
      {title}
      <div className='top-container'>
        <button><i class="fa-solid fa-maximize"></i></button>
      </div>
    </div>
  );
};

export default TopBar;
