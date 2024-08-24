import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectContactNameFilter } from "../../redux/contacts/selectors.js";
import { changeFilter } from "../../redux/filters/slice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectContactNameFilter);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        value={value}
        placeholder="Enter contact name..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
