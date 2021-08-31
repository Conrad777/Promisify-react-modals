import { useState } from "react";
import { checkout } from "../../checkout";
import { ModalProps } from "../createModal";

export interface UpsellResponse {
  plan: string;
}

export const UpsellModal = ({
  onSubmit,
  onCancel
}: ModalProps<UpsellResponse>): JSX.Element => {
  const [open, setOpen] = useState(true);

  const handleSubmit = async () => {
    setOpen(false);

    try {
      const result = await checkout();
      console.log("Successfully submitted", result);
      onSubmit({ plan: "business_200000" });
    } catch {
      // if the user cancel checkout come back to this modal
    } finally {
      setOpen(true);
    }
  };

  return (
    <>
      {open && (
        <div className="Modal">
          <div className="ModalBody">
            <h1>Ditch Basic and move to business</h1>
            <p>
              NOTE: When you click the Hells yeah button we will enter the
              checkout flow via the dedicated{" "}
              <span className="Code">checkout</span> function.
            </p>
            <div className="ModalFooter">
              <button className="Button" onClick={() => onCancel()}>
                No thanks
              </button>
              <button className="Button Button--primary" onClick={handleSubmit}>
                Hells yeah, upgrade
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
