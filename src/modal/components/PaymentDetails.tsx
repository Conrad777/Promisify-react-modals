import { ModalProps } from "../createModal";

export interface PaymentDetailsResponse {
  nonce: string;
}

export interface PaymentDetailsProps
  extends ModalProps<PaymentDetailsResponse> {
  accountId: number;
}

export const PaymentDetailsModal = ({
  accountId,
  onSubmit,
  onCancel
}: PaymentDetailsProps): JSX.Element => (
  <div className="Modal">
    <div className="ModalBody">
      <h1>Payment Details with accountId {accountId}</h1>
      <div className="ModalFooter">
        <button className="Button" onClick={() => onCancel()}>
          Cancel
        </button>
        <button
          className="Button Button--primary"
          onClick={() => onSubmit({ nonce: "12345" })}
        >
          Let's Pay
        </button>
      </div>
    </div>
  </div>
);
