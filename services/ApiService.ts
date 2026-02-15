import axios, { AxiosInstance } from "axios";
import { ENV } from "./env";

const ENDPOINTS = {
  LOGIN_ADMIN: "/auth/admin/signin",
  GET_OPERATORS: "/admin/operators",
  GET_DRIVERS: "/admin/drivers",
  GET_DISTRIBUTORS: "/admin/distributors",
  GET_TRUCK_COMPANIES: "/admin/companies",
  GET_VEHICLES: "/admin/vehicles",
  APPROVE_DISAPPROVE_COMPANY: "/admin/company/approve-disapprove",
  APPROVE_DISAPPROVE_DRIVER: "/admin/driver/approve-disapprove",
  APPROVE_DISAPPROVE_VEHICLE: "/admin/vehicle/approve-disapprove",
  GET_ORDERS: "/admin/orders",
  BLOCK_UNBLOCK_USER: "/admin/user/block-unblock",
  COMPANY_PAYMENT_DETAILS: "/company-operator/company/payment",
  CHANGE_ORDER_STATUS: "/driver/orders/status",
  UPDATE_COMPANY_DETAILS: "/company-operator/company",
  UPDATE_COMPANY_PAYMENT_DETAILS: "/company-operator/company/payment",
  UPDATE_DISTRIBUTOR_DETAILS: "/distributor/update",
  UPDATE_DRIVER_DETAILS: "/company-operator/driver",
  GET_PAYMENTS: "/admin/payments",
  GET_CHARGES_INFO: "/admin/equipments",
  UPDATE_CHARGE_INFO: "/admin/equipments",
  SEND_ORDER_PAYMENT: "/admin/payouts",
  COMPANY_PAYOUTS: "/admin/payouts",
  COMPANY_REVENUE: "/admin/company/revenue",
  DELETE_ORDER: "/admin/order",
  ASSIGN_ORDER: "/admin/order/assign-company",
  ADD_COMPANY_PAYMENT_DETAILS: "/company-operator/company/payment",
  ORDER_DETAILS: "/common/order-details",
};

export class ApiService {
  private static instance: ApiService;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: ENV.API_URL,
    });

    // Add interceptor to include Bearer token for all requests except /admin/signin
    this.axiosInstance.interceptors.request.use((config) => {
      if (!config.url?.includes("/admin/signin")) {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers["x-access-token"] = `${token}`;
        }
      }
      return config;
    });

    // Add response interceptor to handle 5999 response code
    this.axiosInstance.interceptors.response.use(
      (response) => {
        if (response.data?.responseCode === 5999) {
          localStorage.removeItem("token");
          window.location.href = "/signin";
          return Promise.reject("Session expired");
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  public loginAdmin(payload: unknown) {
    return this.axiosInstance.post(ENDPOINTS.LOGIN_ADMIN, payload);
  }

  public getOperators() {
    return this.axiosInstance.get(ENDPOINTS.GET_OPERATORS);
  }

  public getDrivers() {
    return this.axiosInstance.get(ENDPOINTS.GET_DRIVERS);
  }

  public getDistributors() {
    return this.axiosInstance.get(ENDPOINTS.GET_DISTRIBUTORS);
  }

  public getTruckCompanies() {
    return this.axiosInstance.get(ENDPOINTS.GET_TRUCK_COMPANIES);
  }

  public getVehicles() {
    return this.axiosInstance.get(ENDPOINTS.GET_VEHICLES);
  }

  public approveDisapproveCompany(id: number) {
    return this.axiosInstance.put(
      `${ENDPOINTS.APPROVE_DISAPPROVE_COMPANY}/${id}`
    );
  }

  public approveDisapproveDriver(id: number) {
    return this.axiosInstance.put(
      `${ENDPOINTS.APPROVE_DISAPPROVE_DRIVER}/${id}`
    );
  }

  public approveDisapproveVehicle(id: number) {
    return this.axiosInstance.put(
      `${ENDPOINTS.APPROVE_DISAPPROVE_VEHICLE}/${id}`
    );
  }

  public getOrders() {
    return this.axiosInstance.get(ENDPOINTS.GET_ORDERS);
  }

  public blockUnblockUser(payload: unknown) {
    return this.axiosInstance.put(ENDPOINTS.BLOCK_UNBLOCK_USER, payload);
  }

  public getCompanyPaymentDetails(id: number) {
    return this.axiosInstance.get(
      `${ENDPOINTS.COMPANY_PAYMENT_DETAILS}?companyId=${id}`
    );
  }

  public changeOrderStatus(payload: unknown) {
    return this.axiosInstance.put(ENDPOINTS.CHANGE_ORDER_STATUS, payload);
  }

  public updateCompanyDetails(payload: unknown) {
    return this.axiosInstance.put(ENDPOINTS.UPDATE_COMPANY_DETAILS, payload);
  }

  public updateCompanyPaymentDetails(payload: unknown) {
    return this.axiosInstance.put(
      ENDPOINTS.UPDATE_COMPANY_PAYMENT_DETAILS,
      payload
    );
  }

  public updateDistributorDetails(payload: unknown) {
    return this.axiosInstance.put(
      ENDPOINTS.UPDATE_DISTRIBUTOR_DETAILS,
      payload
    );
  }

  public updateDriverDetails(payload: unknown) {
    return this.axiosInstance.put(ENDPOINTS.UPDATE_DRIVER_DETAILS, payload);
  }

  public getPayments() {
    return this.axiosInstance.get(ENDPOINTS.GET_PAYMENTS);
  }

  public getChargesInfo() {
    return this.axiosInstance.get(ENDPOINTS.GET_CHARGES_INFO);
  }

  public updateChargeInfo(payload: unknown, id: number) {
    return this.axiosInstance.put(
      `${ENDPOINTS.UPDATE_CHARGE_INFO}/${id}`,
      payload
    );
  }

  public sendOrderPayment(payload: unknown) {
    return this.axiosInstance.post(ENDPOINTS.SEND_ORDER_PAYMENT, payload);
  }

  public getCompanyPayouts() {
    return this.axiosInstance.get(ENDPOINTS.COMPANY_PAYOUTS);
  }

  public getCompanyRevenue() {
    return this.axiosInstance.get(ENDPOINTS.COMPANY_REVENUE);
  }

  public deleteOrder(id: number) {
    return this.axiosInstance.delete(`${ENDPOINTS.DELETE_ORDER}/${id}`);
  }

  public assignOrder(payload: unknown) {
    return this.axiosInstance.post(ENDPOINTS.ASSIGN_ORDER, payload);
  }

  public addCompanyPaymentDetails(payload: unknown) {
    return this.axiosInstance.post(ENDPOINTS.ADD_COMPANY_PAYMENT_DETAILS, payload);
  }

  public getOrderDetails(id: number) {
    return this.axiosInstance.get(`${ENDPOINTS.ORDER_DETAILS}/${id}`);
  }
}
