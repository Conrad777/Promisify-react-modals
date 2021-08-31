// NOTE: this file ext is tsx so that CodeSandbox can find the relative import paths
import { CompanyDetailsResponse } from "./modal/components/CompanyDetails";
import { PaymentDetailsResponse } from "./modal/components/PaymentDetails";
import {
  openPaymentDetailsModal,
  openCompanyDetailsModal
} from "./modal/globalModals";

type CheckoutResponse = CompanyDetailsResponse & PaymentDetailsResponse;

export async function checkout(): Promise<CheckoutResponse> {
  try {
    const companyDetails = await openCompanyDetailsModal({
      name: "Peter",
      surname: "Pan"
    });

    const paymentDetails = await openPaymentDetailsModal({ accountId: 1 });

    return { ...companyDetails, ...paymentDetails } as CheckoutResponse;
  } catch {
    throw new Error("something went wrong");
  }
}
