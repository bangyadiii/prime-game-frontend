import OverviewIcon from "@/assets/svg/sidebar/overview.svg";
import TransactionIcon from "@/assets/svg/sidebar/transaction-icon.svg";
import MessageIcon from "@/assets/svg/sidebar/message-icon.svg";
import CardIcon from "@/assets/svg/sidebar/card-icon.svg";
import RewardIcon from "@/assets/svg/sidebar/reward-icon.svg";
import SettingIcon from "@/assets/svg/sidebar/setting-icon.svg";
import LogoutIcon from "@/assets/svg/sidebar/logout-icon.svg";

export const sidebarList = [
    {
        icon: OverviewIcon,
        title: "Overview",
        htmlHref: "/member/overview",
    },
    {
        icon: TransactionIcon,
        title: "Transaction",
        htmlHref: "/member/transactions",
    },
    {
        icon: MessageIcon,
        title: "Messages",
        htmlHref: "/messages",
    },
    {
        icon: CardIcon,
        title: "Card",
        htmlHref: "/card",
    },
    {
        icon: RewardIcon,
        title: "Rewards",
        htmlHref: "/rewards",
    },
    {
        icon: SettingIcon,
        title: "Setting",
        htmlHref: "/settings",
    },
    {
        icon: LogoutIcon,
        title: "Logout",
        htmlHref: "/logout",
    },
];
