import { sep22Data } from "./get-strava-activities";

export const getCurrentDateInPST = () => {
  const todaysDate = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // Convert the localized date to the YYYYMMDD format
  const [month, day, year] = todaysDate.split("/");
  return `${year}${month}${day}`;
};

export const MAIN_COLOR = "#E9FEB2";
export const SECONDARY_COLOR = "#3C414E";

export const THIRD_COLOR = "rgba(255,255,255,0.5)";
export const getCurrentDateLabelForView = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "2-digit",
  });

  return formattedDate;
};

export const getTotalElevation = () => {
  let val = 0;
  sep22Data.forEach((ride) => {
    val += ride.elevationGain;
  });
  console.log(val);
};
