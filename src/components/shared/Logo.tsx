import classNames from "classnames";
import React from "react";
import Image from "@/components/shared/Image";

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "relative flex h-12 w-12 mb-8 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <Image src="/logo.jpeg" layout="fill" objectFit="contain" alt="logo" />
    </div>
  );
};

export default React.memo(Logo);
