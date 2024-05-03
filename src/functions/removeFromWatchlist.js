import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the CSS file

export const removeFromWatchlist = (e, id, setIsCoinAdded) => {
  e.preventDefault();
  const confirmMessage = "Are you sure you want to remove this coin?";
  const coinName = id.substring(0, 1).toUpperCase() + id.substring(1);

  if (window.confirm(confirmMessage)) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const newList = watchlist.filter((coin) => coin !== id);
    setIsCoinAdded(false);
    localStorage.setItem("watchlist", JSON.stringify(newList));
    toast.success(`${coinName} - has been removed!`);
  } else {
    toast.error(`${coinName} - could not be removed!`);
    setIsCoinAdded(true);
  }
};
