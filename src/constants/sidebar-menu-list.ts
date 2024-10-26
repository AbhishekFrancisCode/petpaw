import homeIcon from "../../public/images/svg/home.svg";
import meetingICon from "../../public/images/svg/meeting.svg";
import testimonialsICon from "../../public/images/svg/testimonials.svg";
import inviteIcon from "../../public/images/svg/invite.svg";
import profileICon from "../../public/images/svg/user.svg";

export interface ISidebarItem {
  name: string;
  path: string;
  icon: any;
}

export const itemsMenu: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/account",
    icon: homeIcon
  },
  {
    name: "Meeting",
    path: "/account/meetings",
    icon: meetingICon
  },
  // {
  //   name: "Testimonials",
  //   path: "/account/testimonials",
  //   icon: testimonialsICon
  // },
  // {
  //   name: "Invite & Earn",
  //   path: "/account/inviteEarn",
  //   icon: inviteIcon
  // }
  {
    name: "Profile",
    path: "/account/profile",
    icon: profileICon
  }
];

export const itemMenuLeader: ISidebarItem[] = [...itemsMenu];
