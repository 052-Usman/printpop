import { useMutation } from "@tanstack/react-query";
import { ApiService } from "../services/ApiService";
import { handleApiResponse } from "./HandleResponse";

export const useLoginAdmin = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().loginAdmin(payload);
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useApproveDisapproveCompany = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await ApiService.getInstance().approveDisapproveCompany(
        id
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useApproveDisapproveDriver = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await ApiService.getInstance().approveDisapproveDriver(
        id
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useApproveDisapproveVehicle = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await ApiService.getInstance().approveDisapproveVehicle(
        id
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useBlockUnblockUser = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().blockUnblockUser(payload);
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useChangeOrderStatus = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().changeOrderStatus(
        payload
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useUpdateCompanyDetails = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().updateCompanyDetails(
        payload
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useUpdateCompanyPaymentDetails = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response =
        await ApiService.getInstance().updateCompanyPaymentDetails(payload);
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useUpdateDistributorDetails = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().updateDistributorDetails(
        payload
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useUpdateDriverDetails = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().updateDriverDetails(
        payload
      );
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useUpdateChargeInfo = () => {
  return useMutation({
    mutationFn: async (data: { payload: unknown; id: number }) => {
      const response = await ApiService.getInstance().updateChargeInfo(
        data.payload,
        data.id
      );
      const { data: responseData } = response;
      return handleApiResponse(responseData);
    },
  });
};

export const useSendOrderPayment = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().sendOrderPayment(payload);
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useDeleteOrder = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await ApiService.getInstance().deleteOrder(id);
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useAssignOrder = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().assignOrder(payload);
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};

export const useAddCompanyPaymentDetails = () => {
  return useMutation({
    mutationFn: async (payload: unknown) => {
      const response = await ApiService.getInstance().addCompanyPaymentDetails(payload);
      const { data } = response;
      return handleApiResponse(data);
    },
  });
};