interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "primary" | "outline" | "secondary" | "terciary";
}

export function Button({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const variantClasses = {
    outline:
      "text-white border-2 py-5 px-5 rounded-xl font-semibold hover:bg-white hover:text-blueCustom-blue01 hover:border-indigo-600",
    primary:
      "text-blueCustom-blue01 font-bold bg-white border py-5 px-7 rounded-xl hover:bg-blueCustom-blue01 hover:text-white hover:border-indigo-600",
    secondary:
      "py-6 px-[120px] font-semibold text-xl bg-transparent text-white",

    terciary:
      "text-blueCustom-blue01 border-2 border-blueCustom-blue01  py-5 px-7 rounded-xl font-semibold hover:bg-blueCustom-blue01  hover:text-white",
  };

  const className = `flex items-center justify-center rounded-[20px] ${variantClasses[variant]}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
