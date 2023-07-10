import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <div className="p-10 bg-indigo-500 text-center ">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.deafaultProps = {};

export default Header;
