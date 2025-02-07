const Menu = ({ items }) => {
  items && console.log(Object.entries(items));
  return (
    <>
      <div className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow right-0">
        {items &&
          Object.entries(items).map(([key, value], index) => (
            <div key={index} className="collapse bg base-200">
              <input type="checkbox" name="" id="" />
              <div className="collapse-title">{key}</div>
              <div className="collapse-content">
                <div>
                  <Menu items={value.sub} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Menu;
