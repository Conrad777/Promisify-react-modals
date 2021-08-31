import { render, unmountComponentAtNode } from "react-dom";

export interface ModalProps<Data> {
  onSubmit(data?: Data): void;
  onCancel(action?: Error): void;
}

export function createModal<Data, Props extends ModalProps<Data>>(
  Modal: typeof JSX.Element
): (props?: Omit<Props, "onSubmit" | "onCancel">) => Promise<Data | Error> {
  const root = document.getElementById("root");
  const container = document.createElement("div");

  const destroyContainer = () => {
    unmountComponentAtNode(container);
    root?.removeChild(container);
  };

  return (
    props?: Omit<Props, "onSubmit" | "onCancel">
  ): Promise<Data | Error> => {
    return new Promise<Data | Error>((resolve, reject) => {
      const onSubmit = (data: Data) => {
        resolve(data);
        destroyContainer();
      };
      const onCancel = (error: Error) => {
        reject(error);
        destroyContainer();
      };

      root?.appendChild(container);

      render(
        <Modal onCancel={onCancel} onSubmit={onSubmit} {...props} />,
        container
      );
    });
  };
}
