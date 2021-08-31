import { useState } from "react";
import { UpsellResponse } from "./modal/components/Upsell";
import { openUpsellModal } from "./modal/globalModals";

export const NavBar = () => {
  const [plan, setPlan] = useState<string>();

  const open = async () => {
    try {
      const { plan } = (await openUpsellModal()) as UpsellResponse;
      setPlan(plan);
    } catch {
      setPlan("basic");
    }
  };

  return (
    <div className="Nav">
      {plan === "business_200000" && (
        <>
          <div className="Banner Banner--success">
            Yay, you just upgraded to <strong>{plan}</strong> :)
            <div className="BannerClose" onClick={() => setPlan("")}>
              X
            </div>
          </div>
        </>
      )}
      {plan === "basic" && (
        <div className="Banner Banner--danger">
          Oh that's sad... you decided to stay on basic :(
          <div className="BannerClose" onClick={() => setPlan("")}>
            X
          </div>
        </div>
      )}
      <button className="Button Button--primary" onClick={open}>
        Upgrade to business
      </button>
    </div>
  );
};
