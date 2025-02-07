const MenuItem = ({ label, url, sub }) => {
  if (!sub) {
    // If no sub-items, render a simple link
    return (
      <a href={url} className="block px-4 py-2 hover:bg-base-200 rounded-lg">
        {label}
      </a>
    );
  }

  // If has sub-items, render a collapsible menu
  return (
    <div className="collapse bg-base-200 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-medium flex items-center justify-between">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-focus:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <div className="collapse-content">
        <div className="pl-2 mt-2 border-l-2 border-base-300">
          {Object.entries(sub).map(([subKey, subValue], index) => (
            <MenuItem
              key={index}
              label={subKey}
              url={subValue.url}
              sub={subValue.sub}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = ({ items }) => {
  if (!items) return null;

  return (
    <div className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow right-0 w-screen md:left-0 md:w-52">
      {Object.entries(items).map(([key, value], index) => (
        <div key={index} className="mb-1">
          <MenuItem label={key} url={value.url} sub={value.sub} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
