import { UpsellModal, UpsellResponse } from "./components/Upsell";
import {
  PaymentDetailsModal,
  PaymentDetailsResponse,
  PaymentDetailsProps
} from "./components/PaymentDetails";
import {
  CompanyDetailsModal,
  CompanyDetailsResponse,
  CompanyDetailsProps
} from "./components/CompanyDetails";
import { createModal, ModalProps } from "./createModal";

export const openUpsellModal = createModal<
  UpsellResponse,
  ModalProps<UpsellResponse>
>(UpsellModal);

export const openPaymentDetailsModal = createModal<
  PaymentDetailsResponse,
  PaymentDetailsProps
>(PaymentDetailsModal);

export const openCompanyDetailsModal = createModal<
  CompanyDetailsResponse,
  CompanyDetailsProps
>(CompanyDetailsModal);
