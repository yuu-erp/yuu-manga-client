import classNames from "classnames";
import React, { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren {
  className?: string;
  hasPadding?: boolean;
  title?: string;
}
const Section = React.forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  const { className, hasPadding, title, children } = props;
  return (
    <React.Fragment>
      <div
        ref={ref}
        className={classNames(
          hasPadding && "px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36",
          className
        )}
      >
        {title && (
          <h1 className="uppercase text-2xl font-semibold mb-4">{title}</h1>
        )}
        {children}
      </div>
    </React.Fragment>
  );
});

Section.displayName = "Section";

export default React.memo(Section);
