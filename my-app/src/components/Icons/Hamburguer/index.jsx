import './styles/style.css';

const Hamburger = ({ expand, updateExpanded }) => {
  return (
    <div
      className='nav-hamburger'
      expand={expand}
      onClick={(e) => {
        console.log(expand);
        updateExpanded(!expand);
      }}
    >
      <div className='bar' />
      <div className='bar' />
      <div className='bar' />
      <div className='bar' />
    </div>
  );
};

export default Hamburger;
