import { useQuery } from "@tanstack/react-query";
import { ApiService } from "../services/ApiService";
import { handleApiResponse } from "./HandleResponse";

export const useGetOperators = () => {
  return useQuery({
    queryKey: ["operators"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getOperators();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetDrivers = () => {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getDrivers();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetDistributors = () => {
  return useQuery({
    queryKey: ["distributors"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getDistributors();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetTruckCompanies = () => {
  return useQuery({
    queryKey: ["truck-companies"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getTruckCompanies();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetVehicles = () => {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getVehicles();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getOrders();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetCompanyPaymentDetails = (id: number) => {
  return useQuery({
    queryKey: ["company-payment-details", id],
    queryFn: async () => {
      const response = await ApiService.getInstance().getCompanyPaymentDetails(
        id
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetPayments = () => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getPayments();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetChargesInfo = () => {
  return useQuery({
    queryKey: ["charges-info"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getChargesInfo();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetCompanyPayouts = () => {
  return useQuery({
    queryKey: ["company-payouts"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getCompanyPayouts();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};


export const useGetCompanyRevenue = () => {
  return useQuery({
    queryKey: ["company-revenue"],
    queryFn: async () => {
      const response = await ApiService.getInstance().getCompanyRevenue();
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useGetOrderDetails = (id: number) => {
  return useQuery({
    queryKey: ["order-details", id],
    queryFn: async () => {
      const response = await ApiService.getInstance().getOrderDetails(id);
      const { data } = response;
      return handleApiResponse(data);
    },
    enabled: !!id,
  });
};
