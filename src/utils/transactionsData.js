import { ReactComponent as FileStorage } from "./../assets/icons/file-storage-1.svg";
import { ReactComponent as Flights } from "./../assets/icons/flights.svg";
import { ReactComponent as MegaPhone } from "./../assets/icons/megaphone.svg";
export const recent_transactions = [
  {
    merchant: "Hamleys",
    date: "20 May 2020",
    description: "Refund on debit card",
    amount: "+$150",
    iconColor: "#009DFF1A",
    icon: <FileStorage />,
  },
  {
    merchant: "Hamleys",
    date: "20 May 2020",
    description: "Charged to debit card",
    amount: "-$150",
    iconColor: "#00D6B51A",
    icon: <Flights />,
  },
  {
    merchant: "Hamleys",
    date: "20 May 2020",
    description: "Charged to debit card",
    amount: "-$150",
    iconColor: "#F251951A",
    icon: <MegaPhone />,
  },
  {
    merchant: "Hamleys",
    date: "20 May 2020",
    description: "Charged to debit card",
    amount: "-$150",
    iconColor: "#009DFF1A",
    icon: <FileStorage />,
  },
];
