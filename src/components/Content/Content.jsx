import styles from "./Content.module.css";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/profile" element={<div>profile</div>} />
        <Route path="/messages" element={<div>messages</div>} />
        <Route path="/map" element={<div>map</div>} />
      </Routes>
    </div>
  );
};
export default Content;
