import { getReviews } from "../../helpers/axiosHelper";
import { setReviews } from "./ReviewSlice";

//Get reviews
export const getReviewsAction = () => async (dispatch) => {
  const { status, reviews } = await getReviews();
  status === "success" && dispatch(setReviews(reviews));
};
