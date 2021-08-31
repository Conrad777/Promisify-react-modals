import { ModalProps } from "../createModal";

export interface CompanyDetailsResponse {
  name: string;
  surname: string;
}

export interface CompanyDetailsProps
  extends ModalProps<CompanyDetailsResponse> {
  name: string;
  surname: string;
}

export const CompanyDetailsModal = ({
  name,
  surname,
  onSubmit,
  onCancel
}: CompanyDetailsProps): JSX.Element => (
  <div className="Modal">
    <div className="ModalBody">
      <h1>Company Details</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Surname:</strong> {surname}
      </p>
      <div className="ModalFooter">
        <button className="Button" onClick={() => onCancel()}>
          Cancel
        </button>
        <button
          className="Button Button--primary"
          onClick={() => onSubmit({ name, surname })}
        >
          Continue
        </button>
      </div>
    </div>
  </div>
);
