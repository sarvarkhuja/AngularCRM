export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: "orders",
    icon: "iconsminds-air-balloon-1",
    label: "Orders",
    to: "/app/orders",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "Order List",
        to: "/app/orders/order-list",
      },
      {
        icon: "simple-icon-paper-plane",
        label: "Order Kanban List",
        to: "/app/orders/order-kanban",
      },
    ],
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "menu.blank-page",
    to: "/app/blank-page",
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://vien-docs.coloredstrategies.com/",
    newWindow: true,
  },
];
export default data;
