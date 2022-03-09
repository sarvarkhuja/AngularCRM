export interface GetOrderModel {
  FirstName: string;
  ContactPhone: string;
  DeliveryAddress: string;
  Quantity: number;
  OrderTotalSum: number;
  PromoCode: string;
  Status: number;
  TrackingId: string;
  ProductId: number;
  CategoryName: string;
  OrderDate?: any;
  Note: string;
}
